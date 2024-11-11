import { db } from "./index";

// Initialize authentication-related tables
export function initAuthTables() {
  // Create users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      "id" INTEGER PRIMARY KEY AUTOINCREMENT,
      "email" TEXT UNIQUE NOT NULL,
      "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
      reset_token TEXT,
      reset_token_expires DATETIME
    )
  `);

  // Add index for reset token lookups
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_reset_token ON users(reset_token)
  `);
}

initAuthTables();
