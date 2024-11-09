"use client";

import Link from "next/link";

import * as Icons from "./ui/Icons";
import { Tag } from "@/types/note";
import { usePathname } from "next/navigation";

type Props = {
  tags: Tag[];
};

export default function Sidebar({ tags }: Props) {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <aside className="hidden h-screen min-w-[272px] flex-col gap-4 border-r bg-white px-4 py-3 xl:flex">
      <div className="py-3">
        <Icons.Logo className="shrink-0" />
      </div>
      <nav className="flex flex-col gap-1">
        <Link
          href="/notes"
          aria-label="Home"
          className={`${pathname === "/notes" ? "bg-neutral-100" : "group-hover:bg-neutral-100"} group flex items-center justify-between rounded px-3 py-[10px]`}
        >
          <div className="flex items-center gap-2">
            <Icons.Home
              className={`${pathname === "/notes" ? "" : "group-hover:text-blue-500"} size-5`}
            />
            <span className="text-preset-4">All Notes</span>
          </div>
          {pathname === "/notes" && (
            <div className="flex items-center justify-center">
              <Icons.ChevronRight className="size-6" />
            </div>
          )}
        </Link>

        <Link
          href="/notes/archived"
          aria-label="Archived Notes"
          className={`${pathname === "/notes/archived" ? "bg-neutral-100" : "group-hover:bg-neutral-100"} group flex items-center justify-between rounded px-3 py-[10px]`}
        >
          <div className="flex items-center gap-2">
            <Icons.Archive
              className={`${pathname === "/notes/archived" ? "" : "group-hover:text-blue-500"} size-5`}
            />
            <span className="text-preset-4">Archived Notes</span>
          </div>
          {pathname === "/notes/archived" && (
            <div className="flex items-center justify-center">
              <Icons.ChevronRight className="size-6" />
            </div>
          )}
        </Link>
      </nav>

      <hr />

      {tags.length > 0 && (
        <>
          <div className="px-2">
            <h2 className="text-preset-4 text-neutral-500">Tags</h2>
          </div>
          <ul>
            {tags.map((tag) => (
              <li key={tag.id}>
                <Link href={`/tags/${tag.id}}`}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
}
