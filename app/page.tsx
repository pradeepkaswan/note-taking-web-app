"use client";

import { Button } from "@/components/ui/Button";
import * as Icons from "@/components/ui/Icons";

export default function Home() {
  return (
    <div className="bg-white p-8 dark:bg-neutral-950">
      <div className="flex flex-col gap-4">
        <Button className="w-fit">+ Create New Note</Button>
        <Button variant="secondary" className="w-fit">
          Cancel
        </Button>
        <Button variant="danger" className="w-fit">
          Delete
        </Button>
        <Button variant="border" className="flex w-fit gap-2">
          <Icons.Archive className="size-5" />
          Archive Note
        </Button>
        <Button variant="border" className="flex w-fit gap-2">
          <Icons.Delete className="size-5" />
          Delete Note
        </Button>
      </div>
    </div>
  );
}
