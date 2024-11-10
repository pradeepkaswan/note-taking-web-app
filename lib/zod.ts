import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Please enter a valid email address." })
    .email("Please enter a valid email address."),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const noteSchema = z.object({
  title: z.string(),
  content: z.string().min(1, {
    message: "Content must be at least 1 characters long",
  }),
  createdById: z.string().uuid({
    message: "Invalid user ID",
  }),
  createdAt: z.date(),
  updatedAt: z.date(),
});
