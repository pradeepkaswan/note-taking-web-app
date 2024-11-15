import Link from "next/link";

import Search from "@/components/search";
import { type Note } from "@/app/_lib/db/schema";
import NoteList from "@/components/notes/NoteList";
import { Suspense } from "react";

export default function SearchPage() {
  const notes: Note[] = [];

  return (
    <div className="flex h-full flex-col gap-4 rounded-lg bg-white px-4 py-5 dark:bg-neutral-950 md:px-8 md:py-6">
      <h1 className="text-preset-1 text-neutral-950 dark:text-white xl:hidden">
        Search
      </h1>
      <div className="xl:hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <Search placeholder="Search by title, content, or tags..." />
        </Suspense>
      </div>
      <div className="flex flex-col gap-4 xl:hidden">
        <p className="text-preset-5">
          All notes matching &quot;&quot; are diplayed below.
        </p>

        {notes.length > 0 ? (
          <NoteList notes={notes} />
        ) : (
          <p className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-preset-5 text-neutral-950 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
            No notes match your search. Try a different keyword or{" "}
            <Link href="/notes/new" className="underline underline-offset-2">
              create a new note
            </Link>
            .
          </p>
        )}
      </div>
    </div>
  );
}
