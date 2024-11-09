import Link from "next/link";
import type { Note } from "@prisma/client";

type Props = {
  notes: Note[];
};

export default function NoteList({ notes }: Props) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Link href={`/notes/${note.id}`}></Link>
        </li>
      ))}
    </ul>
  );
}
