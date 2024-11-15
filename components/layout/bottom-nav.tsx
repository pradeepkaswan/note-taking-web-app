"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as Icons from "@/components/ui/Icons";

const navItems = [
  { id: 1, label: "Home", icon: "Home", href: "/notes" },
  { id: 2, label: "Search", icon: "Search", href: "/notes/search" },
  { id: 3, label: "Archived", icon: "Archive", href: "/archived" },
  { id: 4, label: "Tags", icon: "Tag", href: "/tags" },
  { id: 5, label: "Settings", icon: "Settings", href: "/settings" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 h-14 border-t bg-white px-6 py-3 shadow-[0px_-4px_6px_0px_rgba(240,240,240,0.60)] dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-[0px_-5px_6px_0px_rgba(0,0,0,0.50)] md:h-[74px] md:px-8 xl:hidden">
      <ul className="flex justify-between">
        {navItems.map((item) => {
          const Icon = Icons[item.icon as keyof typeof Icons];

          return (
            <li key={item.id} className="flex justify-between">
              <Link
                href={item.href}
                className={`${pathname === item.href ? "cursor-pointer bg-blue-100 text-blue-500 dark:bg-neutral-700" : "text-neutral-600 dark:text-neutral-400"} flex flex-col items-center gap-1 rounded px-5 py-1`}
              >
                <Icon className="size-6 shrink-0" />
                <p className="hidden text-preset-6 md:block">{item.label}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
