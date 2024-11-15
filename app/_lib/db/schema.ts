import { InferSelectModel, relations } from "drizzle-orm";
import {
  pgTable,
  varchar,
  text,
  timestamp,
  uuid,
  boolean,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar({ length: 255 }),
  googleId: text("google_id").unique(),
  email: varchar({ length: 255 }).notNull().unique(),
  hashedPassword: text("hashed_password"),
  picture: text("picture"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const passwordResetSessions = pgTable("password_reset_sessions", {
  id: text("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  email: varchar({ length: 255 }).notNull(),
  code: varchar({ length: 255 }).notNull(),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const notes = pgTable("notes", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  tags: varchar({ length: 255 }).references(() => tags.name),
  isArchived: boolean("is_archived").default(false).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const tags = pgTable("tags", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
});

export type User = InferSelectModel<typeof users>;
export type Session = InferSelectModel<typeof sessions>;
export type PasswordResetSession = InferSelectModel<
  typeof passwordResetSessions
>;
export type Note = InferSelectModel<typeof notes>;
export type Tag = InferSelectModel<typeof tags>;

export const userRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  passwordResetSessions: many(passwordResetSessions),
}));

export const sessionRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));
