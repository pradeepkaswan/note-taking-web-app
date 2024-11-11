import sqlite3 from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "notes.db");
const db = sqlite3(dbPath);

db.pragma("foreign_keys = ON");

const initDb = () => {
  // Notes table
  db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT,
      is_archived INTEGER DEFAULT 0,
      user_id INTEGER REFERENCES users(id),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Tags table
  db.exec(`
    CREATE TABLE IF NOT EXISTS tags (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )
  `);

  // Note tags junction table
  db.exec(`
    CREATE TABLE IF NOT EXISTS note_tags (
      note_id INTEGER,
      tag_id INTEGER,
      PRIMARY KEY (note_id, tag_id),
      FOREIGN KEY (note_id) REFERENCES notes(id) ON DELETE CASCADE,
      FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
    )
  `);
};

initDb();

export { db };
