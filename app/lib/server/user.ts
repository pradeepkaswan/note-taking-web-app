import { sql } from "@vercel/postgres";
import { hashPassword } from "./password";

export interface User {
  id: number;
  name?: string;
  email: string;
  googleId?: string;
}

export async function createUser(
  email: string,
  password: string,
): Promise<User> {
  const passwordHash = await hashPassword(password);

  const { rows } = await sql<{ id: number }>`
    INSERT INTO users (email, password_hash)
    VALUES (${email}, ${passwordHash})
    RETURNING id
  `;

  if (rows.length === 0) {
    throw new Error("Unexpected error");
  }

  const user: User = {
    id: rows[0].id,
    email,
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
  const { rows } = await sql<{ id: number; email: string }>`
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

// export async function getUserFromGoogleId(googleId: string) {}
