import Link from "next/link";

import NoteList from "@/components/notes/NoteList";
import { Button } from "@/components/ui/Button";
import { Archive, Delete } from "@/components/ui/Icons";
// import { getNotes } from "@/app/lib/actions/notes";
import NoteEditor from "@/components/notes/NoteEditor";
import { Suspense } from "react";

type Note = {
  id: number;
  title: string;
  lastEdited: number;
  tags: string;
};

export default async function NotesPage() {
  // const notes = await getNotes();
  const notes: Note[] = [
    {
      id: 1,
      title: "Note 1",
      lastEdited: 1679147200000,
      tags: "tag1, tag2, tag3",
    },
  ];

  return (
    <div className="flex h-full justify-between divide-x divide-neutral-200 rounded-lg bg-white dark:divide-neutral-800 dark:bg-neutral-950 xl:rounded-none">
      <div className="w-full px-4 py-5 md:px-8 md:py-6 xl:w-[290px] xl:pl-8 xl:pr-4 xl:pt-5">
        <h1 className="mb-4 text-preset-1 text-neutral-950 dark:text-white xl:hidden">
          All Notes
        </h1>

        <Link href="/notes/new">
          <Button className="mb-4 hidden w-full xl:flex">
            + Create New Note
          </Button>
        </Link>
        {notes && notes.length > 0 ? (
          <Suspense fallback={<div>Loading...</div>}>
            <NoteList notes={notes} />
          </Suspense>
        ) : (
          <p className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-preset-5 text-neutral-950 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
            You don’t have any notes yet. Start a new note to capture your
            thoughts and ideas.
          </p>
        )}
      </div>

      <div className="hidden h-full flex-1 px-6 py-5 xl:flex">
        <NoteEditor />
      </div>

      <div className="mr-8 hidden min-w-[258px] flex-col space-y-3 pl-4 pt-4 xl:flex">
        <Button
          variant="border"
          className="flex w-full justify-start gap-2 text-preset-4"
        >
          <Archive className="size-5" />
          <span>Archive Note</span>
        </Button>

        <Button
          variant="border"
          className="flex w-full justify-start gap-2 text-preset-4"
        >
          <Delete className="size-5" />
          <span>Delete Note</span>
        </Button>
      </div>
    </div>
  );
}
