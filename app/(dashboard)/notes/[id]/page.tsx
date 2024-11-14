// import NoteActions from "@/components/note-actions";
import NoteEditor from "@/components/notes/NoteEditor";
import { Archive, ArrowLeft, Delete } from "@/components/ui/Icons";
import Link from "next/link";

export default function NotePage() {
  return (
    <div className="flex h-full flex-col rounded-[10px] bg-white px-4 py-5 md:px-8 md:py-6">
      <header className="flex items-center justify-between border-b pb-3 text-preset-5 text-neutral-600 md:pb-4 xl:hidden">
        <div>
          <Link href="/notes" className="flex items-center gap-1">
            <ArrowLeft className="size-[18px]" />
            <span>Go Back</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Delete className="size-[18px]" />
          <Archive className="size-[18px]" />
          <button>Cancel</button>
          <button className="text-blue-500">Save Note</button>
        </div>
      </header>

      <div className="flex-1 py-4">
        <NoteEditor />
      </div>
    </div>
  );
}
