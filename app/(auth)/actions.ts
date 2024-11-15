"use server";

import { redirect } from "next/navigation";

import {
  createSession,
  generateSessionToken,
  getCurrentSession,
  deleteSession,
} from "@/app/lib/server/session";
import {
  checkEmailAvailability,
  verifyEmailInput,
} from "@/app/lib/server/email";
import {
  verifyPasswordhash,
  verifyPasswordStrength,
} from "@/app/lib/server/password";
import { createUser, getUserByEmailOrGoogleId } from "@/app/lib/server/user";
import { db } from "../lib/db";

interface ActionResult {
  errors?: {
    email?: string;
    password?: string;
    toast?: string;
  };
}

export async function login(
  state: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { errors: { email: "Invalid email", password: "Invalid password" } };
  }

  if (email === "") {
    return { errors: { email: "Please enter your email." } };
  }

  if (password === "") {
    return { errors: { password: "Pleae enter your password." } };
  }

  if (!verifyEmailInput(email)) {
    return { errors: { email: "Please enter a valid email address." } };
  }

  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });

  if (!user) {
    return { errors: { toast: "Account does not exist" } };
  }

  if (!user.hashedPassword) {
    return {};
  }

  const validPassword = await verifyPasswordhash(user.hashedPassword, password);

  if (!validPassword) {
    return { errors: { password: "Invalid password" } };
  }

  const token = generateSessionToken();
  await createSession(token, user.id);

  return { errors: {} };
}

export async function signup(
  state: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { errors: { email: "Invalid email", password: "Invalid password" } };
  }

  if (email === "") {
    return { errors: { email: "Please enter your email." } };
  }

  if (password === "") {
    return { errors: { password: "Pleae enter your password." } };
  }

  if (!verifyEmailInput(email)) {
    return { errors: { email: "Please enter a valid email address." } };
  }

  const emailAvailable = checkEmailAvailability(email);

  if (!emailAvailable) {
    return { errors: { email: "Email already exists" } };
  }

  const strongPassword = await verifyPasswordStrength(password);

  if (!strongPassword) {
    return { errors: { password: "Password is too weak" } };
  }

  const user = await createUser(email, password);

  const token = generateSessionToken();
  await createSession(token, user.id);

  return { errors: {} };
}

export async function logout(): Promise<ActionResult> {
  const { session } = await getCurrentSession();

  if (session) {
    deleteSession(session.id);
  }

  return redirect("/login");
}

export async function forgotPassword(
  state: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const email = formData.get("email");

  if (typeof email !== "string") {
    return { errors: { email: "Invalid or missing fields" } };
  }

  if (!verifyEmailInput(email)) {
    return { errors: { email: "Please enter a valid email address." } };
  }

  const user = getUserByEmailOrGoogleId(email);

  if (user === null) {
    return { errors: { toast: "Account does not exist" } };
  }

  // invalidateUserPasswordResetSessions(user.id);

  // const sessionToken = generateSessionToken();
  // const session = createPasswordResetSession(sessionToken, session.expiresAt);

  // sendPasswordResetEmail(session.email, session.code);
  // setPasswordResetSessionTokenCookie(sessionToken, session.expiresAt);
  // return redirect("/reset-password/verify-email");

  return redirect("/login");
}
