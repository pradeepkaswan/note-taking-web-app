"use server";

import type { Note } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { prisma } from "@/db";
import { noteSchema } from "@/validations/noteSchema";

export type State = {
  success: boolean;
  error?: string;
  data?: Note;
};

/**
 * Disclaimer: You don't want to pass userId from the client-side in a real app.
 * It's simply an example on how to pass additional params.
 * You would want a server-sider authentication setup i.e getCurrentUser().
 */
export async function createNote(prevState: State, formData: FormData) {
  const result = noteSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    createdById: formData.get("createdById"),
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  if (!result.success) {
    return {
      error: "Invalid note data",
      success: false,
      data: {
        title: result.data.title,
        content: result.data.content,
      },
    };
  }

  await prisma.note.create({
    data: result.data,
  });

  revalidatePath("/");

  return {
    success: true,
  };
}

export async function updateNote(note: Note) {
  return prisma.note.update({
    where: {
      id: note.id,
    },
    data: {
      title: note.title,
      content: note.content,
      lastEdited: new Date(),
    },
  });
}

export async function deleteNote(note: Note) {
  return prisma.note.delete({
    where: {
      id: note.id,
    },
  });
}

export async function archiveNote(id: string) {
  if (id) {
    return prisma.note.update({
      where: {
        id: id,
      },
      data: {
        isArchived: true,
      },
    });
  } else {
    throw new Error("Note not found");
  }
}

export async function restoreNote(id: string) {
  if (id) {
    return prisma.note.update({
      where: {
        id: id,
      },
      data: {
        isArchived: false,
      },
    });
  } else {
    throw new Error("Note not found");
  }
}
