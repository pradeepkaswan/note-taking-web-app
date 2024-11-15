import { eq, or } from "drizzle-orm";

import { hashPassword } from "./password";
import { db } from "../db";
import { type User, users } from "../db/schema";

// TODO: rewrite this
export async function createUser(
  email: string,
  password?: string,
  googleId?: string,
  picture?: string,
  name?: string,
): Promise<Pick<User, "id">> {
  // check if user already exists by email
  const existingUser = await getUserByEmailOrGoogleId(email, googleId);

  if (existingUser) {
    // User already exists, update thier record
    if (googleId && existingUser.googleId === null) {
      const updatedUser = await db
        .update(users)
        .set({
          googleId,
          name,
          picture,
        })
        .where(eq(users.id, existingUser.id))
        .returning()
        .then((res) => res[0]);

      return updatedUser;
    }

    return existingUser;
  }
  // User does not exist yet, create a new record
  const hashedPassword = password ? await hashPassword(password) : undefined;

  const data = await db
    .insert(users)
    .values({
      email,
      name,
      googleId,
      hashedPassword,
      picture,
    })
    .returning({ id: users.id })
    .then((res) => res[0]);

  return data;
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

export async function getUserByEmailOrGoogleId(
  email: string,
  googleId?: string,
): Promise<User | null> {
  if (!email && !googleId) return null;

  const where = [];
  if (email) where.push(eq(users.email, email));
  if (googleId) where.push(eq(users.googleId, googleId));

  const data = await db.query.users.findFirst({
    where: or(...where),
  });

  return data ? data : null;
}

// this is my current createUser function: export async function createUser(   email: string,   password?: string,   googleId?: string,   picture?: string,   name?: string, ): Promise> {   // check if user already exists by email   const existingUser = await getUserByEmailOrGoogleId(email);    if (existingUser) {     // User already exists, update thier record     if (!existingUser.googleId) {       const updatedUser = await db         .update(users)         .set({           googleId,           name: name || existingUser.name,           picture: picture || existingUser.picture,         })         .where(eq(users.id, existingUser.id))         .returning({ id: users.id })         .then((res) => res[0]);        return updatedUser;     }      return existingUser;   }   // User does not exist yet, create a new record   const hashedPassword = await hashPassword(password);    const data = await db     .insert(users)     .values({       name,       email,       hashedPassword,       googleId,       picture,     })     .returning({ id: users.id })     .then((res) => res[0]);    return data; } change the above code according to this code:
