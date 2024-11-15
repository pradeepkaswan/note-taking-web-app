import Link from "next/link";

import NoteCard from "./NoteCard";
import type { Note, Tag } from "@/app/_lib/db/schema";

type Props = {
  notes: Note[];
};

export default function NoteList({ notes }: Props) {
  const tags: Tag[] = [];

  return (
    <ul className="flex flex-col gap-1 divide-y divide-neutral-200 pb-32">
      {notes.map((note, index) => (
        <li key={index} className="pt-1 first:pt-0 last:pb-0">
          <Link href={`/notes/${note.id}`}>
            <NoteCard note={note} tags={tags} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
