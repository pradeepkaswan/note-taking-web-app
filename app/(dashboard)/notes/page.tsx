import type { Metadata } from "next";

import NoteList from "@/components/notes/NoteList";
import { Note } from "@/app/lib/types";
import CreateNoteButton from "@/components/create-note-button";
import NoteActions from "@/components/note-actions";
import { getCurrentSession } from "@/app/lib/server/session";
import { redirect } from "next/navigation";
// import { getNotes } from "@/app/lib/actions/notes";

export const metadata: Metadata = {
  title: "All Notes",
  description: "View and manage all your notes",
};

export default async function NotesPage() {
  // const notes = await getNotes();
  const notes: Note[] = [];

  const { session } = await getCurrentSession();

  if (session === null) {
    redirect("/login");
  }

  return (
    <div className="flex h-full justify-between rounded-lg bg-white dark:divide-neutral-800 dark:bg-neutral-950 xl:rounded-none">
      <div className="w-full border-r border-neutral-200 px-4 py-5 md:px-8 md:py-6 xl:w-[290px] xl:pl-8 xl:pr-4 xl:pt-5">
        <h1 className="mb-4 text-preset-1 text-neutral-950 dark:text-white xl:hidden">
          All Notes
        </h1>

        <CreateNoteButton />

        {notes.length > 0 ? (
          <>
            <NoteList notes={notes} />

            <div className="hidden xl:flex">
              <NoteActions />
            </div>
          </>
        ) : (
          <p className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-preset-5 text-neutral-950 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
            You don’t have any notes yet. Start a new note to capture your
            thoughts and ideas.
          </p>
        )}
      </div>
    </div>
  );
}
