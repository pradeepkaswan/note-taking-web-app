import Link from "next/link";

import { ThemeSelector } from "@/components/settings/ThemeSelector";
import { ArrowLeft } from "@/components/ui/Icons";

export default function ThemePage() {
  return (
    <div className="w-full flex-1 flex-col px-4 py-6 md:px-8 xl:p-8">
      <Link
        href="/settings"
        className="mb-3 flex items-center gap-2 text-neutral-600 dark:text-neutral-300 xl:hidden"
      >
        <ArrowLeft className="size-5" />
        <span className="text-preset-4">Settings</span>
      </Link>

      <div className="mb-6 flex flex-col gap-2 xl:gap-1">
        <p className="text-preset-1 text-neutral-950 dark:text-white xl:text-preset-3">
          Color Theme
        </p>
        <p className="text-preset-5 text-neutral-700 dark:text-neutral-300">
          Choose your color theme:
        </p>
      </div>

      <ThemeSelector />
    </div>
  );
}
