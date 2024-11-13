import Link from "next/link";
import NoteCard from "./NoteCard";

export default function NoteList({
  notes,
}: {
  notes: {
    id: number;
    title: string;
    lastEdited: number;
    tags: string;
  }[];
}) {
  const tags = ["React"];

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
