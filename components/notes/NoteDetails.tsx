import type { Note } from "@prisma/client";

type Props = {
  note: Note;
  onArchive: () => void;
  onRestore: () => void;
  onDelete: () => void;
};

export default function NoteDetails({
  note,
  onArchive,
  onRestore,
  onDelete,
}: Props) {
  return (
    <div>
      {/* <NoteForm note={note} userId={note.createdById} /> */}

      <h2>{note.title}</h2>
      <div>
        <div>{/* TODO: Render note tags here */}</div>
        <p>Last edited: {note.updatedAt.toLocaleDateString()}</p>
      </div>
      <p>{note.content}</p>
      {note.archived ? (
        <button onClick={onRestore}>Restore Note</button>
      ) : (
        <button onClick={onArchive}>Archive Note</button>
      )}
      <button onClick={onDelete}>Delete Note</button>
    </div>
  );
}
