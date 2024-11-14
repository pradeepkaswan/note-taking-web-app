import { cache } from "react";
import {
  encodeBase32LowerCaseNoPadding,
  encodeHexLowerCase,
} from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";

import type { User } from "./user";
import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";
import { db } from "../db";
import { sessionsTable } from "../db/schema";

export interface Session {
  id: string;
  userId: string;
  expiresAt: Date;
}

type SessionValidationResult =
  | {
      session: Session | null;
      user: User;
    }
  | { session: null; user: null };

export async function validateSessionToken(
  token: string,
): Promise<SessionValidationResult> {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));

  const { rows } = await sql<{
    id: string;
    user_id: string;
    expires_at: number;
    user_id_1: string;
    google_id: string;
    email: string;
    name: string;
    picture: string;
  }>`
    SELECT 
      sessions.id, 
      sessions.user_id, 
      sessions.expires_at, 
      users.id AS user_id_1,
      users.google_id,
      users.email,
      users.name,
      users.picture
    FROM sessions
    INNER JOIN users ON sessions.user_id = users.id
    WHERE sessions.id = ${sessionId}
  `;

  if (rows.length === 0) {
    return { session: null, user: null };
  }

  const row = rows[0];

  const session: Session = {
    id: row.id,
    userId: row.user_id,
    expiresAt: new Date(row.expires_at * 1000),
  };

  const user: User = {
    id: row.user_id_1,
    googleId: row.google_id,
    email: row.email,
    name: row.name,
    picture: row.picture,
  };

  const now = Date.now();
  if (now >= session.expiresAt.getTime()) {
    await sql`DELETE FROM sessions WHERE id = ${sessionId}`;
    return { session: null, user: null };
  }

  if (now >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
    session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
    await sql`UPDATE sessions SET expires_at = ${Math.floor(session.expiresAt.getTime() / 1000)} WHERE id = ${sessionId}`;
  }

  return { session, user };
}

export const getCurrentSession = cache(
  async (): Promise<SessionValidationResult> => {
    const cookieStore = await cookies();
    const token = cookieStore.get("session")?.value ?? null;

    if (token === null) {
      return { session: null, user: null };
    }
    const result = await validateSessionToken(token);
    return result;
  },
);

export async function invalidateSession(sessionId: string): Promise<void> {
  await sql`DELETE FROM sessions WHERE id = ${sessionId}`;
}

export async function invalidateUserSessions(userId: number): Promise<void> {
  await sql`DELETE FROM sessions WHERE user_id = ${userId}`;
}

export async function setSessionTokenCookie(
  token: string,
  expiresAt: Date,
): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set("session", token, {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
  });
}

export async function deleteSessionTokenCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

export function generateSessionToken(): string {
  const tokenBytes = new Uint8Array(20);
  crypto.getRandomValues(tokenBytes);
  const token = encodeBase32LowerCaseNoPadding(tokenBytes).toLowerCase();
  return token;
}

export async function createSession(
  token: string,
  userId: string,
): Promise<Session> {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30); // 30 days

  const [session] = await db
    .insert(sessionsTable)
    .values({
      id: sessionId,
      userId,
      expiresAt,
    })
    .returning({
      id: sessionsTable.id,
      userId: sessionsTable.userId,
      expiresAt: sessionsTable.expiresAt,
    });

  return session;
}
