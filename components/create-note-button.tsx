import Link from "next/link";
import { Button } from "./ui/Button";

export default function CreateNoteButton() {
  return (
    <Link href="/notes/new">
      <Button className="mb-4 hidden w-full xl:flex">+ Create New Note</Button>
    </Link>
  );
}
