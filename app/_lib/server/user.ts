import { eq } from "drizzle-orm";

import { hashPassword } from "./password";
import { db } from "../db";
import { type User, users } from "../db/schema";

// TODO: rewrite this
export async function createUser(
  email: string,
  googleId: string,
  picture: string,
  name: string,
) {
  const data = await db
    .insert(users)
    .values({
      googleId,
      name,
      picture,
      email,
    })
    .returning({ id: users.id });

  const user = data[0];

  return user.id;
}

export async function updateUserPassword(
  userId: string,
  password: string,
): Promise<void> {
  const hashedPassword = await hashPassword(password);

  await db
    .update(users)
    .set({ hashedPassword })
    .where(eq(users.id, userId))
    .returning();
}

export async function getUserPasswordHash(userId: string): Promise<string> {
  const data = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  if (data.length < 1) {
    throw new Error("Invalid user ID");
  }

  const { hashedPassword } = data[0];

  return hashedPassword as string;
}

export async function getUserFromGoogleId(
  googleId: string,
): Promise<User | null> {
  const data = await db.query.users.findMany({
    where: eq(users.googleId, googleId),
  });

  if (data.length < 1) {
    return null;
  }

  const user: User = data[0];

  return user;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const data = await db.query.users.findMany({
    where: eq(users.email, email),
  });

  if (data.length < 1) {
    return null;
  }

  const user: User = data[0];

  return user;
}
