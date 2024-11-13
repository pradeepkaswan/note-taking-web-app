import { db } from "@vercel/postgres";

async function initializeDatabase() {
  const client = await db.connect();

  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name TEXT,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT,
        google_id TEXT UNIQUE,
        picture TEXT
      );
  `;
    await client.sql`CREATE INDEX IF NOT EXISTS email_index ON users(email)`;

    await client.sql`CREATE INDEX IF NOT EXISTS google_id_index ON users(google_id)`;

    await client.sql`CREATE TABLE IF NOT EXISTS sessions (
        id TEXT NOT NULL PRIMARY KEY,
        user_id UUID NOT NULL REFERENCES users(id),
        expires_at INTEGER NOT NULL
      );
      `;

    await client.sql`CREATE TABLE IF NOT EXISTS password_reset_sessions (
        id TEXT NOT NULL PRIMARY KEY,
        user_id UUID NOT NULL REFERENCES users(id),
        email TEXT NOT NULL,
        code TEXT NOT NULL,
        expires_at INTEGER NOT NULL
      );
    `;
  } catch (error) {
    console.error("Error in database initialization:", error);
    throw error;
  }
}

export async function GET() {
  const client = await db.connect();

  try {
    await client.sql`BEGIN`;
    await initializeDatabase();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database initialized successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  } finally {
    client.release();
  }
}
