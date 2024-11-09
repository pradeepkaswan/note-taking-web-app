import NotesList from "@/components/notes/NoteList";
import { getNotes } from "@/lib/models/note";

export default async function ArchivedNotes() {
  const notes = await getNotes(true);

  return (
    <>
      <h1>Archived Notes</h1>
      <NotesList notes={notes} isArchivedView={true} />
      {/* TODO: Render NoteDetail component here */}
    </>
  );
}
