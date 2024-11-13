"use server";

import { redirect } from "next/navigation";

import {
  createSession,
  deleteSessionTokenCookie,
  generateSessionToken,
  getCurrentSession,
  invalidateSession,
  setSessionTokenCookie,
} from "@/app/lib/server/session";
import {
  checkEmailAvailability,
  verifyEmailInput,
} from "@/app/lib/server/email";
import {
  verifyPasswordhash,
  verifyPasswordStrength,
} from "@/app/lib/server/password";
import {
  createUser,
  getUserFromEmail,
  getUserPasswordHash,
} from "@/app/lib/server/user";

interface ActionResult {
  error?: string | null;
  // error: {
  //   email: string | null;
  //   password: string | null;
  // };
}

export async function loginAction(
  _prev: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Invalid or missing fields" };
  }

  if (email === "" || password === "") {
    return { error: "Please enter your email and password." };
  }

  if (!verifyEmailInput(email)) {
    return { error: "Please enter a valid email address." };
  }

  const user = await getUserFromEmail(email);

  if (user === null) {
    return { error: "Account does not exist" };
  }

  const passwordHash = await getUserPasswordHash(user.id);
  const validPassword = await verifyPasswordhash(passwordHash, password);

  if (!validPassword) {
    return { error: "Invalid password" };
  }

  const sessionToken = generateSessionToken();
  const session = await createSession(sessionToken, user.id);
  setSessionTokenCookie(sessionToken, session.expiresAt);

  return redirect("/");
}

export async function signupAction(
  _prev: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Invalid or missing fields" };
  }

  if (email === "" || password === "") {
    return { error: "Please enter your email and password." };
  }

  if (!verifyEmailInput(email)) {
    return { error: "Please enter a valid email address." };
  }

  const emailAvailable = checkEmailAvailability(email);

  if (!emailAvailable) {
    return { error: "Email already exists" };
  }

  const strongPassword = await verifyPasswordStrength(password);

  if (!strongPassword) {
    return { error: "Password is too weak" };
  }

  const user = await createUser(email, password);

  const sessionToken = generateSessionToken();
  const session = await createSession(sessionToken, user.id);
  setSessionTokenCookie(sessionToken, session.expiresAt);

  return redirect("/login");
}

export async function logoutAction(): Promise<ActionResult> {
  const { session } = await getCurrentSession();

  if (session === null) {
    return { error: "Not authenticated, Unauthorized" };
  }

  invalidateSession(session.id);
  deleteSessionTokenCookie();
  return redirect("/login");
}

export async function forgotPasswordAction(
  _prev: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const email = formData.get("email");

  if (typeof email !== "string") {
    return { error: "Invalid or missing fields" };
  }

  if (!verifyEmailInput(email)) {
    return { error: "Please enter a valid email address." };
  }

  const user = getUserFromEmail(email);

  if (user === null) {
    return { error: "Account does not exist" };
  }

  // invalidateUserPasswordResetSessions(user.id);

  // const sessionToken = generateSessionToken();
  // const session = createPasswordResetSession(sessionToken, session.expiresAt);

  // sendPasswordResetEmail(session.email, session.code);
  // setPasswordResetSessionTokenCookie(sessionToken, session.expiresAt);
  // return redirect("/reset-password/verify-email");

  return redirect("/login");
}
