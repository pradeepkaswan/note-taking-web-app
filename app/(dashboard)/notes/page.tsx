import NoteList from "@/components/notes/NoteList";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import { getNotes } from "@/data/services/getNotes";
import prisma from "@/lib/prisma";

export default async function Notes() {
  // const notes = await getNotes();
  // const tags = await prisma.tag.findMany();
  // const user = await getCurrentUser();

  return (
    <div>
      <Sidebar tags={tags} />
      <div>
        <SearchBar />
        <main>
          {/* <NoteList notes={notes} /> */}
          {/* TODO: Render NoteDetail component here */}
        </main>
      </div>
    </div>
  );
}
