"use client";

import Link from "next/link";
import * as Icons from "./ui/Icons";
import { usePathname } from "next/navigation";

const menuBarItems = [
  { id: 1, label: "Home", icon: "Home", href: "/notes" },
  { id: 2, label: "Search", icon: "Search", href: "/notes/search" },
  { id: 3, label: "Archived", icon: "Archive", href: "/notes/archived" },
  { id: 4, label: "Tags", icon: "Tag", href: "/tags" },
  { id: 5, label: "Settings", icon: "Settings", href: "/settings" },
];

export default function MenuBar() {
  const pathname = usePathname();

  return (
    <ul className="absolute bottom-0 left-0 right-0 flex h-14 justify-between bg-white px-4 py-3 dark:bg-neutral-950 md:h-[74px] md:px-8 xl:hidden">
      {menuBarItems.map((item) => {
        const Icon = Icons[item.icon as keyof typeof Icons];

        return (
          <li key={item.id} className="flex justify-between">
            <Link
              href={item.href}
              className={`${pathname === item.href ? "bg-blue-100 text-blue-500" : "text-neutral-600"} flex w-20 flex-col items-center gap-1 rounded py-1`}
            >
              <Icon className="size-6 shrink-0" />
              <p className="hidden text-preset-6 md:block">{item.label}</p>
            </Link>
            {/* <div className="hidden h-full w-px bg-neutral-800 md:block"></div> */}
          </li>
        );
      })}
    </ul>
  );
}
