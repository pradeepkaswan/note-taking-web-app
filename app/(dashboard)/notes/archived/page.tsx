import Link from "next/link";

import NoteList from "@/components/notes/NoteList";
import { Note } from "@/app/lib/types";
import { Button } from "@/components/ui/Button";
import { Delete, Restore } from "@/components/ui/Icons";

// import { getArchivedNotes } from "@/lib/actions/notes";

export default function ArchivedNotes() {
  // const notes = await getArchivedNotes();

  const notes: Note[] = [];

  return (
    <div className="flex h-full justify-between divide-x divide-neutral-200 rounded-lg bg-white dark:divide-neutral-800 dark:bg-neutral-950 xl:rounded-none">
      <div className="w-full px-4 py-5 dark:bg-neutral-950 md:px-8 md:py-6 xl:w-[290px] xl:pl-8 xl:pr-4 xl:pt-5">
        <h1 className="mb-4 text-preset-1 text-neutral-950 xl:hidden">
          Archived Notes
        </h1>

        <p className="mb-4 text-preset-5 text-neutral-700 dark:text-neutral-200">
          All your archived notes are stored here. You can restore or delete
          them anytime.
        </p>

        {notes.length > 0 ? (
          <NoteList notes={notes} />
        ) : (
          <p className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-preset-5 text-neutral-950 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
            No notes have been archived yet. Move notes here for safekeeping, or{" "}
            <Link
              href="/notes/new"
              className="cursor-pointer underline underline-offset-2"
            >
              create a new note
            </Link>
            .
          </p>
        )}
      </div>

      <div className="flex-1"></div>

      {notes.length > 0 && (
        <div className="hidden w-[258px] flex-col gap-3 px-4 py-5 text-neutral-950 xl:flex">
          <Button
            variant="border"
            className="flex items-center justify-start gap-2"
          >
            <Restore className="size-5" />
            <span className="text-preset-4">Restore Note</span>
          </Button>
          <Button
            variant="border"
            className="flex items-center justify-start gap-2"
          >
            <Delete className="size-5" />
            <span className="text-preset-4">Delete Note</span>
          </Button>
        </div>
      )}
    </div>
  );
}
