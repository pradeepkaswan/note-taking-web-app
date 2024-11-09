"use client";

import { Logo, Settings } from "./ui/Icons";
import Link from "next/link";
import { useHeaderTitle } from "@/hooks/useHeaderTitle";
import SearchBar from "./SearchBar";

export default function Header() {
  const title = useHeaderTitle();

  return (
    <div className="flex h-[54px] items-center border-neutral-200 bg-neutral-100 px-4 py-3 dark:bg-neutral-800 md:h-[74px] md:px-8 md:py-4 lg:bg-white dark:lg:bg-neutral-950 xl:h-[81px] xl:justify-between xl:border-b">
      <Logo className="xl:hidden" />
      <h1 className="hidden text-preset-1 xl:block">{title}</h1>
      <div className="hidden items-center gap-4 xl:flex">
        <SearchBar />
        <Link
          href="/settings"
          className="flex size-[42px] items-center justify-center"
        >
          <Settings className="size-6 cursor-pointer text-neutral-500" />
        </Link>
      </div>
    </div>
  );
}
