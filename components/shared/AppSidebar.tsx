"use client";

import Link from "next/link";

import * as Icons from "@/components/ui/Icons";
import { usePathname } from "next/navigation";
import TagList from "@/components/TagList";

export default function AppSidebar() {
  const pathname = usePathname();
  const tags = ["React", "Next.js", "Tailwind CSS", "TypeScript"];

  return (
    <aside className="hidden h-full w-[272px] flex-col border-r bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950 xl:flex">
      <div className="mb-4 py-3">
        <Link href="/">
          <Icons.Logo className="shrink-0 dark:text-white" />
        </Link>
      </div>

      <nav className="flex flex-col gap-1">
        <Link
          href="/notes"
          aria-label="Home"
          className={`${pathname === "/notes" ? "bg-neutral-100 dark:bg-neutral-800" : "group-hover:bg-neutral-100"} group flex items-center justify-between rounded-lg px-3 py-[10px] dark:text-neutral-200`}
        >
          <div className="flex items-center gap-2">
            <Icons.Home
              className={`${pathname === "/notes" ? "text-blue-500" : "group-hover:text-blue-500"} size-5`}
            />
            <span className="text-preset-4 dark:text-white">All Notes</span>
          </div>
          {pathname === "/notes" && (
            <div className="flex items-center justify-center">
              <Icons.ChevronRight className="size-5 dark:text-white" />
            </div>
          )}
        </Link>

        <Link
          href="/notes/archived"
          aria-label="Archived Notes"
          className={`${pathname === "/notes/archived" ? "bg-neutral-100 dark:bg-neutral-800" : "group-hover:bg-neutral-100"} group flex items-center justify-between rounded-lg px-3 py-[10px]`}
        >
          <div className="flex items-center gap-2">
            <Icons.Archive
              className={`${pathname === "/notes/archived" ? "text-blue-500" : "group-hover:text-blue-500"} size-5`}
            />
            <span className="text-preset-4 dark:text-white">
              Archived Notes
            </span>
          </div>
          {pathname === "/notes/archived" && (
            <div className="flex items-center justify-center">
              <Icons.ChevronRight className="size-5 dark:text-white" />
            </div>
          )}
        </Link>
      </nav>

      <hr className="my-4 dark:border-neutral-800" />

      <TagList tags={tags} />
    </aside>
  );
}
