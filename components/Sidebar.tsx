"use client";

import Link from "next/link";

import * as Icons from "./ui/Icons";
import { usePathname } from "next/navigation";
import TagList from "./TagList";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-dvh min-w-[272px] flex-col gap-4 border-r bg-white px-4 py-3 xl:flex">
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

      <TagList />
    </aside>
  );
}
