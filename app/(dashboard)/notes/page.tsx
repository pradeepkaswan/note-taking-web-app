import Link from "next/link";

import NoteList from "@/components/notes/NoteList";
import { Button } from "@/components/ui/Button";
import { Archive, Delete } from "@/components/ui/Icons";
import { getNotes } from "@/lib/actions/notes";
import NoteEditor from "@/components/notes/NoteEditor";

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="flex h-full justify-between divide-x divide-neutral-200">
      <div className="w-full px-4 py-5 md:px-8 md:py-6 xl:w-[290px] xl:pl-8 xl:pr-4 xl:pt-5">
        <h1 className="mb-4 text-preset-1 text-neutral-950 xl:hidden">
          All Notes
        </h1>

        <Link href="/notes/new">
          <Button className="mb-4 hidden w-full xl:flex">
            + Create New Note
          </Button>
        </Link>

        {notes && notes.length > 0 ? (
          <NoteList notes={notes} />
        ) : (
          <p className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-preset-5 text-neutral-950">
            You don’t have any notes yet. Start a new note to capture your
            thoughts and ideas.
          </p>
        )}
      </div>

      <div className="hidden flex-1 px-6 py-5 xl:flex">
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
