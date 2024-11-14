import { relations } from "drizzle-orm";
import { pgTable, varchar, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar({ length: 255 }),
  googleId: text("google_id").unique(),
  email: varchar({ length: 255 }).notNull().unique(),
  hashedPassword: text("hashed_password"),
  picture: text("picture"),

  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const sessionsTable = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const passwordResetSessionsTable = pgTable("password_reset_sessions", {
  id: text("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id),
  email: varchar({ length: 255 }).notNull(),
  code: varchar({ length: 255 }).notNull(),
  expires_at: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const userRelations = relations(usersTable, ({ many }) => ({
  sessions: many(sessionsTable),
  passwordResetSessions: many(passwordResetSessionsTable),
}));

export const sessionRelations = relations(sessionsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [sessionsTable.userId],
    references: [usersTable.id],
  }),
}));
