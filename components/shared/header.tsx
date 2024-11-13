"use client";

import Link from "next/link";

import { Logo, Settings } from "@/components/ui/Icons";
import { useHeaderTitle } from "@/hooks/useHeaderTitle";
import Search from "@/components/search";

export default function Header() {
  const title = useHeaderTitle();

  return (
    <header className="sticky right-0 top-0 flex h-[54px] items-center justify-between border-neutral-200 px-4 py-3 dark:border-neutral-800 md:h-[74px] md:px-8 md:py-4 dark:lg:bg-neutral-950 xl:h-[81px] xl:border-b xl:bg-white">
      <Link href="/" className="xl:hidden">
        <Logo className="dark:text-white" />
      </Link>

      <h1 className="hidden text-preset-1 dark:text-white xl:block">{title}</h1>

      <div className="hidden items-center gap-4 xl:flex">
        <Search placeholder="Search by title, content, or tags..." />
        <Link
          href="/settings"
          className="flex size-[42px] items-center justify-center"
        >
          <Settings className="size-6 cursor-pointer text-neutral-500" />
        </Link>
      </div>
    </header>
  );
}
