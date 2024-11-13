import { sql } from "@vercel/postgres";

export function verifyEmailInput(email: string): boolean {
  return /^.+@.+\..+$/.test(email) && email.length < 256;
}

export async function checkEmailAvailability(email: string): Promise<boolean> {
  const { rows } = await sql<{ count: number }>`
    SELECT COUNT(*) as count
    FROM users
    WHERE email = ${email}
  `;

  if (rows.length === 0) {
    throw new Error("No results reuturned");
  }

  return rows[0].count === 0;
}
