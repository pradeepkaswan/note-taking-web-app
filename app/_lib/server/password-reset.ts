// import { cookies } from "next/headers";
// import { sha256 } from "@oslojs/crypto/sha2";
// import { encodeHexLowerCase } from "@oslojs/encoding";
// import { sql } from "@vercel/postgres";

// import { generateRandomOTP } from "../utils";

// import type { User } from "./user";

// export interface PasswordResetSession {
//   id: string;
//   userId: string;
//   email: string;
//   expiresAt: Date;
//   code: string;
// }

// export type PasswordResetSessionValidationResult =
//   | { session: PasswordResetSession; user: User }
//   | { session: null; user: null };

// export function createPasswordResetSession(
//   token: string,
//   userId: string,
//   email: string,
// ): PasswordResetSession {
//   const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
//   const session: PasswordResetSession = {
//     id: sessionId,
//     userId,
//     email,
//     expiresAt: new Date(Date.now() + 1000 * 60 * 10),
//     code: generateRandomOTP(),
//   };

//   sql`INSERT INTO password_reset_sessions (id, user_id, email, code, expires_at)
//     VALUES (${session.id}, ${session.userId}, ${session.email}, ${session.code}, ${Math.floor(session.expiresAt.getTime() / 1000)})`;

//   return session;
// }

// export function validatePasswordResetSessionToken(
//   token: string,
// ): PasswordResetSessionValidationResult {}

// export function invalidateUserPasswordResetSessions(userId: string): void {}

// export async function validatePasswordResetSessionRequest(): Promise<PasswordResetSessionValidationResult> {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("password_reset_token")?.value ?? null;

//   if (token === null) {
//     return { session: null, user: null };
//   }

//   const result = validatePasswordResetSessionToken(token);

//   if (result.session === null) {
//     deletePasswordResetSessionTokenCookie();
//   }

//   return result;
// }

// export async function setPasswordResetSessionTokenCookie(
//   token: string,
//   expiresAt: Date,
// ): Promise<void> {
//   const cookieStore = await cookies();
//   cookieStore.set("password_reset_session", token, {
//     expires: expiresAt,
//     sameSite: "lax",
//     httpOnly: true,
//     path: "/",
//     secure: process.env.NODE_ENV === "production",
//   });
// }

// export async function deletePasswordResetSessionTokenCookie(): Promise<void> {
//   const cookieStore = await cookies();
//   cookieStore.delete("password_reset_session");
// }

// export function sendPasswordResetEmail(email: string, code: string): void {
//   console.log(`To ${email}: Your secret code is ${code}`);
// }
