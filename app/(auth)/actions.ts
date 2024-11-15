"use server";

import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

import {
  createSession,
  getCurrentSession,
  deleteSession,
  deleteSessionTokenCookie,
  generateSessionToken,
} from "@/app/_lib/server/session";
import {
  hashPassword,
  verifyPasswordhash,
  verifyPasswordStrength,
} from "@/app/_lib/server/password";
import { db } from "@/app/_lib/db";
import { users } from "@/app/_lib/db/schema";
import { SignupFormSchema, LoginFormSchema } from "@/app/_lib/utils";

type State =
  | {
      errors?: {
        email?: string;
        password?: string;
      };
      message?: string;
    }
  | undefined;

export async function signup(
  prevState: State,
  formData: FormData,
): Promise<State> {
  // 1. Validate credentials
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: {
        email: validatedFields.error.flatten().fieldErrors.email?.[0],
        password: validatedFields.error.flatten().fieldErrors.password?.[0],
      },
    };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (existingUser) {
    if (!existingUser.hashedPassword) {
      const strongPassword = await verifyPasswordStrength(password);
      if (!strongPassword) {
        return {
          message: "Password is too weak, please use a stronger password.",
        };
      }

      try {
        //  Update user
        const hashedPassword = await hashPassword(password);

        const data = await db
          .update(users)
          .set({
            hashedPassword,
          })
          .where(eq(users.id, existingUser.id))
          .returning({ id: users.id });

        const user = data[0];

        // 3. Create session
        const sessionToken = generateSessionToken();
        await createSession(sessionToken, user.id);

        return {
          message: "Password set successfully for your Google account.",
        };
      } catch {
        return {
          message: "An error occurred while creating your account.",
        };
      }
    } else {
      return {
        message: "Email already exists, please use a different email or login.",
      };
    }
  }

  const strongPassword = await verifyPasswordStrength(password);
  if (!strongPassword) {
    return {
      message: "Password is too weak, please use a stronger password.",
    };
  }

  // 2. Create user
  const hashedPassword = await hashPassword(password);

  const data = await db
    .insert(users)
    .values({
      email,
      hashedPassword,
    })
    .returning({ id: users.id });

  const user = data[0];

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  // 3. Create session
  const sessionToken = generateSessionToken();
  await createSession(sessionToken, user.id);

  return {
    message: "Account created successfully!",
  };
}

export async function login(
  prevState: State,
  formData: FormData,
): Promise<State> {
  // 1. Validate credentials
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: {
        email: validatedFields.error.flatten().fieldErrors.email?.[0],
        password: validatedFields.error.flatten().fieldErrors.password?.[0],
      },
    };
  }

  const { email, password } = validatedFields.data;

  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (!user) {
    return {
      message: "Account does not exist",
    };
  }

  if (user.hashedPassword === null) {
    return {
      message: "Please set a password for your account before logging in.",
    };
  }

  const validPassword = await verifyPasswordhash(
    user.hashedPassword as string,
    password,
  );

  if (!validPassword) {
    return {
      errors: {
        password: "Invalid password",
      },
    };
  }

  // 2. Create session
  const sessionToken = generateSessionToken();
  await createSession(sessionToken, user.id);
}

export async function logout() {
  const { session } = await getCurrentSession();

  if (!session) {
    return {
      message: "You are not logged in.",
    };
  }

  await deleteSession(session.id);
  await deleteSessionTokenCookie();
  return redirect("/login");
}

export async function forgotPassword(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const email = formData.get("email");

  if (typeof email !== "string") {
    return { errors: { email: "Invalid or missing fields" } };
  }

  // if (!verifyEmailInput(email)) {
  //   return { errors: { email: "Please enter a valid email address." } };
  // }

  // const user = getUserByEmailOrGoogleId(email);

  // if (user === null) {
  //   return { errors: { toast: "Account does not exist" } };
  // }

  // invalidateUserPasswordResetSessions(user.id);

  // const sessionToken = generateSessionToken();
  // const session = createPasswordResetSession(sessionToken, session.expiresAt);

  // sendPasswordResetEmail(session.email, session.code);
  // setPasswordResetSessionTokenCookie(sessionToken, session.expiresAt);
  // return redirect("/reset-password/verify-email");

  return redirect("/login");
}
