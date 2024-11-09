"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import type { Note } from "@prisma/client";

import { createNote } from "@/data/actions/notes";

type Props = {
  note?: Note;
  userId: string;
};

export default function NoteForm({ note, userId }: Props) {
  const [state, createNoteAction] = useActionState(createNote, {
    success: false,
  });
  // const [optmisticState, addOptimistic] = useOptimistic(state, updateFn);

  return (
    <form action={createNoteAction}>
      <h2>{note ? "Edit Note" : "Create New Note"}</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          defaultValue={state.data?.title}
          required
        />
        <p aria-live="polite">{state.error && <span>{state.error}</span>}</p>
        <input type="hidden" name="createdById" value={userId} />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea name="content" defaultValue={state.data?.content} required />
      </div>
      <div>
        <SaveButton>Save</SaveButton>
        <button>Cancel</button>
      </div>
    </form>
  );
}

function SaveButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      {pending ? "Saving..." : children}
    </button>
  );
}
