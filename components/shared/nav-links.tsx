"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { ChevronRight, Home, Archive } from "../ui/Icons";

const links = [
  {
    icon: Home,
    name: "All Notes",
    href: "/notes",
  },
  {
    icon: Archive,
    name: "Archived Notes",
    href: "/notes/archived",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "group flex items-center justify-between rounded-lg px-3 py-[10px] dark:text-neutral-200",
              {
                "bg-neutral-100 dark:bg-neutral-800": pathname === link.href,
                "group-hover:bg-neutral-100": pathname !== link.href,
              },
            )}
          >
            <div className="flex items-center gap-2">
              <LinkIcon
                className={clsx("size-5", {
                  "text-blue-500": pathname === link.href,
                  "group-hover:text-blue-500": pathname !== link.href,
                })}
              />
              <p className="text-preset-4 dark:text-white">{link.name}</p>
            </div>
            {pathname === link.href && (
              <div className="flex items-center justify-center">
                <ChevronRight className="size-5 dark:text-white" />
              </div>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
