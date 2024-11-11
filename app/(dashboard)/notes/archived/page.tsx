import Link from "next/link";

import NoteList from "@/components/notes/NoteList";
import { Button } from "@/components/ui/Button";
// import data from "@/data.json";

const data = { notes: [] };

export default async function ArchivedNotes() {
  return (
    <div className="px-4 py-5 xl:h-screen xl:w-[290px] xl:overflow-y-scroll xl:border-r xl:px-8">
      <h1 className="mb-4 text-preset-1 text-neutral-950 xl:hidden">
        Archived Notes
      </h1>
      <Button className="mb-4 hidden w-full text-preset-4 text-white xl:flex">
        + Create New Note
      </Button>
      <p className="mb-4 text-preset-5 text-neutral-700">
        All your archived notes are stored here. You can restore or delete them
        anytime.
      </p>
      {data.notes && data.notes.length > 0 ? (
        <NoteList notes={data.notes} />
      ) : (
        <p className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-preset-5 text-neutral-950">
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
  );
}
