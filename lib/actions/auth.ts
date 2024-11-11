"use server";

import crypto from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createTransport } from "nodemailer";
import { SignJWT, jwtVerify } from "jose";

import { db } from "@/lib/db";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

const SMTP_CONFIG = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

// const googleClient = new OAuth2Client({
//   clientId: process.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   redirectUri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/google/callback}`
// })

type AuthProvider = "email" | "google";

export async function signUp(data: {
  email: string;
  password: string;
  googleToken?: string;
}) {
  const { email, password, googleToken } = data;

  try {
    // Initialize the database statement
    let stmt;

    if (googleToken) {
      // Verify Google token
      // const ticket = await googleClient.verfiyIdToken({
      //   idToken: googleToken,
      //   audience: process.env.GOOGLE_CLIENT_ID
      // })

      // const payload = ticket.getPayload()

      // if (!payload) {
      //   throw new Error('Invalid Google token')
      // }

      stmt = db.prepare(`
        INSERT INTO users (email, name, auth_provider, google_id)
        VALUES (?, ?, ?, ?)
      `);

      // stmt.run(email, payload.name, 'google', payload.sub)

      // Sign in the user after Google signup
      // return signInWithGoogle(googleToken)
    } else if (password) {
      // const hashedPassword = await bcrypt.hash(password, 10)

      const stmt = db.prepare(`
        INSERT INTO users (email, password_hash, name)
        VALUES (?, ?, ?)
      `);

      stmt.run(email, password);

      await signIn({ email, password });
    } else {
      throw new Error("Either password or Google token must be provided");
    }
  } catch (error: any) {
    if (error.code === "SQLITE_CONSTRAINT") {
      throw new Error("Email already exists");
    }
    throw error;
  }
}

export async function signIn(data: { email: string; password: string }) {}

export async function signInWithGoogle(googleToken: string) {}

export async function forgotPassword(email: string) {
  // Generate reset token
  const resetToken = crypto.randomBytes(32).toString("hex");
  const expires = new Date();
  expires.setHours(expires.getHours() + 1); // Token valid for 1 hour

  const stmt = db.prepare(`
    UPDATE users
    SET reset_token = ?, reset_token_expires = ?
    WHERE email = ?
  `);

  const result = stmt.run(resetToken, expires.toISOString(), email);

  if (result.changes === 0) {
    throw new Error("User not found");
  }

  const transporter = createTransport(SMTP_CONFIG);

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: email,
    subject: "Reset your password",
    html: `
      <p>You are receiving this email because you (or someone else) have requested the reset of the password for your account.<p>
      <p>Please click on the following link, or paste this into your browser to complete the process:<p>

      <a href="${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}">
        Reset Password
      </a>
      <p>This link will expire in 1 hour.<p>
    `,
  });
}

export async function resetPassword(token: string, newPassword: string) {
  const stmt = db.prepare(`
    SELECT id
    FROM users
    WHERE reset_token = ? AND reset_token_expires > CURRENT_TIMESTAMP
  `);

  const user = stmt.get(token) as any;

  if (!user) {
    throw new Error("Invalid or expired reset token");
  }

  // Update the user's password
  // const hashedPassword = await bcrypt.hash(newPassword, 10)

  const updateStmt = db.prepare(`
    UPDATE users
    SET 
      password_hash = ?,
      reset_token = NULL,
      reset_token_expires = NULL
    WHERE id = ?
  `);

  updateStmt.run(newPassword, user.id);
}

export async function signOut() {
  (await cookies()).delete("auth-token");
  redirect("/login");
}

export async function getCurrentUser() {
  const token = (await cookies()).get("auth-token");

  if (!token) {
    return null;
  }

  try {
    const verified = await jwtVerify(token.value, JWT_SECRET);
    const userId = verified.payload.userId as number;

    const stmt = db.prepare(`
      SELECT id, email
      FROM users
      WHERE id = ?
    `);

    return stmt.get(userId);
  } catch {
    return null;
  }
}
