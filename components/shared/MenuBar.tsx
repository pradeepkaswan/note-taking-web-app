"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as Icons from "@/components/ui/Icons";

const menuBarItems = [
  { id: 1, label: "Home", icon: "Home", href: "/notes" },
  { id: 2, label: "Search", icon: "Search", href: "/notes/search" },
  { id: 3, label: "Archived", icon: "Archive", href: "/notes/archived" },
  { id: 4, label: "Tags", icon: "Tag", href: "/notes/tags" },
  { id: 5, label: "Settings", icon: "Settings", href: "/settings" },
];

export default function MenuBar() {
  const pathname = usePathname();

  return (
    <>
      <ul className="absolute bottom-0 left-0 right-0 flex h-14 justify-between divide-neutral-800 border-t bg-white px-6 py-3 dark:border-neutral-800 dark:bg-neutral-950 md:h-[74px] md:divide-x md:px-8 xl:hidden">
        {menuBarItems.map((item) => {
          const Icon = Icons[item.icon as keyof typeof Icons];

          return (
            <li key={item.id} className="flex justify-between">
              <Link
                href={item.href}
                className={`${pathname === item.href ? "bg-blue-100 text-blue-500 dark:bg-neutral-700" : "text-neutral-600 dark:text-neutral-400"} flex w-20 flex-col items-center gap-1 rounded py-1`}
              >
                <Icon className="size-6 shrink-0" />
                <p className="hidden text-preset-6 md:block">{item.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
