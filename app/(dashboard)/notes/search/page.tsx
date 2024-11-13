"use client";

import NoteList from "@/components/notes/NoteList";
import Search from "@/components/search";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type Note = {
  id: number;
  title: string;
  lastEdited: number;
  tags: string;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const notes: Note[] = [];

  return (
    <div className="flex h-full flex-col gap-4 rounded-lg bg-white px-4 py-5 dark:bg-neutral-950 md:px-8 md:py-6">
      <h1 className="text-preset-1 text-neutral-950 xl:hidden">Search</h1>
      <div className="xl:hidden">
        <Search placeholder="Search by title, content, or tags..." />
      </div>
      <div className="flex flex-col gap-4 xl:hidden">
        <p className="text-preset-5">
          All notes matching &quot;{searchParams.get("query")}&quot; are
          diplayed below.
        </p>

        {notes && notes.length > 0 ? (
          <Suspense fallback={<div>Loading...</div>}>
            <NoteList notes={notes} />
          </Suspense>
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
