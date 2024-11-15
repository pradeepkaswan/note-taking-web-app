import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CreateNoteButton() {
  return (
    <Link href="/notes/new" className="mb-4 hidden xl:flex">
      <Button className="w-full">+ Create New Note</Button>
    </Link>
  );
}
