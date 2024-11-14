import { sql } from "@vercel/postgres";
import { hashPassword } from "./password";
import { db } from "../db";
import { usersTable } from "../db/schema";

export interface User {
  id: string;
  name?: string;
  email: string;
  googleId?: string;
  picture?: string;
  hashedPassword?: string;
}

export async function createUser(
  email: string,
  password: string,
  googleId?: string,
  picture?: string,
  name?: string,
): Promise<User> {
  const hashedPassword = await hashPassword(password);

  const [newUser] = await db
    .insert(usersTable)
    .values({
      name,
      email,
      hashedPassword,
      googleId,
      picture,
    })
    .returning({ id: usersTable.id });

  const user: User = {
    id: newUser.id,
    email,
    googleId,
    picture,
    name,
  };

  return user;
}

export async function updateUserPassword(
  userId: number,
  password: string,
): Promise<void> {
  const passwordHash = await hashPassword(password);
  await sql`UPDATE users SET password_hash = ${passwordHash} WHERE id = ${userId}`;
}

export async function getUserPasswordHash(userId: number): Promise<string> {
  const { rows } = await sql<{ password_hash: string }>`
    SELECT password_hash 
    FROM users 
    WHERE id = ${userId}
  `;

  if (rows.length === 0) {
    throw new Error("Invalid user ID");
  }

  return rows[0].password_hash;
}

export async function getUserFromEmail(email: string): Promise<User | null> {
  const { rows } = await sql<{ id: string; email: string }>`
    SELECT id, email 
    FROM users 
    WHERE email = ${email}
  `;

  if (rows.length === 0) {
    return null;
  }

  const row = rows[0];

  const user: User = {
    id: row.id,
    email: row.email,
  };

  return user;
}

export async function getUserFromGoogleId(
  googleId: string,
): Promise<User | null> {
  const { rows } = await sql<{
    id: string;
    email: string;
    google_id: string;
    name: string;
    picture: string;
  }>`
    SELECT id, name, email, google_id, picture
    FROM users 
    WHERE google_id = ${googleId}
  `;

  if (rows.length === 0) {
    return null;
  }

  const row = rows[0];

  const user: User = {
    id: row.id,
    email: row.email,
    googleId: row.google_id,
    name: row.name,
    picture: row.picture,
  };

  return user;
}
