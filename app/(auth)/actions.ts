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
import { createUser, getUserFromEmail } from "@/app/lib/server/user";
import { db } from "../lib/db";

interface ActionResult {
  error?: {
    email?: string;
    password?: string;
    toast?: string;
  };
}

export async function loginAction(
  _prev: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: { email: "Invalid email", password: "Invalid password" } };
  }

  if (email === "") {
    return { error: { email: "Please enter your email." } };
  }

  if (password === "") {
    return { error: { password: "Pleae enter your password." } };
  }

  if (!verifyEmailInput(email)) {
    return { error: { email: "Please enter a valid email address." } };
  }

  const user = await db.query.usersTable.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });

  if (!user) {
    return { error: { toast: "Account does not exist" } };
  }

  if (!user.hashedPassword) {
    return {};
  }

  const validPassword = await verifyPasswordhash(user.hashedPassword, password);

  if (!validPassword) {
    return { error: { password: "Invalid password" } };
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
    return { error: { email: "Invalid email", password: "Invalid password" } };
  }

  if (email === "") {
    return { error: { email: "Please enter your email." } };
  }

  if (password === "") {
    return { error: { password: "Pleae enter your password." } };
  }

  if (!verifyEmailInput(email)) {
    return { error: { email: "Please enter a valid email address." } };
  }

  const emailAvailable = checkEmailAvailability(email);

  if (!emailAvailable) {
    return { error: { email: "Email already exists" } };
  }

  const strongPassword = await verifyPasswordStrength(password);

  if (!strongPassword) {
    return { error: { password: "Password is too weak" } };
  }

  const user = await createUser(email, password);

  const sessionToken = generateSessionToken();
  const session = await createSession(sessionToken, user.id);
  setSessionTokenCookie(sessionToken, session.expiresAt);

  return redirect("/");
}

export async function logoutAction(): Promise<ActionResult> {
  const { session } = await getCurrentSession();

  if (session) {
    invalidateSession(session.id);
    deleteSessionTokenCookie();
  }

  return redirect("/login");
}

export async function forgotPasswordAction(
  _prev: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const email = formData.get("email");

  if (typeof email !== "string") {
    return { error: { email: "Invalid or missing fields" } };
  }

  if (!verifyEmailInput(email)) {
    return { error: { email: "Please enter a valid email address." } };
  }

  const user = getUserFromEmail(email);

  if (user === null) {
    return { error: { toast: "Account does not exist" } };
  }

  // invalidateUserPasswordResetSessions(user.id);

  // const sessionToken = generateSessionToken();
  // const session = createPasswordResetSession(sessionToken, session.expiresAt);

  // sendPasswordResetEmail(session.email, session.code);
  // setPasswordResetSessionTokenCookie(sessionToken, session.expiresAt);
  // return redirect("/reset-password/verify-email");

  return redirect("/login");
}
