import Link from "next/link";

import { Logo } from "@/components/ui/Icons";
import TagList from "@/components/tags/TagList";
import NavLinks from "./nav-links";
import { type Tag } from "@/app/_lib/db/schema";

export default function SideNav() {
  const tags: Tag[] = [
    {
      id: "1",
      name: "Design",
    },
    {
      id: "2",
      name: "Development",
    },
    {
      id: "3",
      name: "Marketing",
    },
  ];

  return (
    <aside className="hidden h-screen w-[272px] flex-col border-r bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950 xl:flex">
      <div className="mb-4 py-3">
        <Link href="/">
          <Logo className="shrink-0 dark:text-white" />
        </Link>
      </div>

      <NavLinks />

      <hr className="my-4 dark:border-neutral-800" />
      {tags && tags.length > 0 && (
        <>
          <div className="px-2">
            <h2 className="pb-2 text-preset-4 text-neutral-500">Tags</h2>
          </div>
          <TagList tags={tags} />
        </>
      )}
    </aside>
  );
}
