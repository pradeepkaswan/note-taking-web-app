import Link from "next/link";
import NoteCard from "./NoteCard";

// type Props = {
//   archived = false,
//   tag?: string
// }

export default function NoteList({ notes }) {
  // const query = db.select().from("notes");

  return (
    <ul className="flex flex-col gap-1 divide-y divide-neutral-200 pb-32">
      {notes.map((note) => (
        <li key={note.title} className="pt-1 first:pt-0 last:pb-0">
          <Link href={`/notes/${note.title}`}>
            <NoteCard
              note={note}
              tags={note.tags}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
