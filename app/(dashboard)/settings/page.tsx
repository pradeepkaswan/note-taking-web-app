import { ThemeSelector } from "@/components/ThemeSelector";
import * as Icons from "@/components/ui/Icons";
import Link from "next/link";

export default function Settings() {
  return (
    <div className="flex h-screen bg-white dark:bg-neutral-950">
      <aside className="min-w-[258px] border-r pl-8 pr-4 pt-5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between rounded-md bg-neutral-100 p-2">
            <div className="flex items-center gap-2">
              <Icons.Sun className="size-5 shrink-0" />
              <span className="text-preset-4 text-neutral-950">
                Color Theme
              </span>
            </div>
            <Icons.ChevronRight className="size-6" />
          </div>
          <div className="flex items-center gap-2 p-2">
            <Icons.Font className="size-5 shrink-0" />
            <span className="text-preset-4 text-neutral-700">Font Theme</span>
          </div>
          <div className="flex items-center gap-2 p-2">
            <Icons.Lock className="size-5 shrink-0" />
            <span className="text-preset-4 text-neutral-700">
              Change Password
            </span>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex items-center gap-2 p-2">
          <Icons.Logout className="size-5 shrink-0" />
          <span className="text-preset-4 text-neutral-700">Logout</span>
        </div>
      </aside>

      <div className="flex w-full max-w-[528px] flex-col p-8">
        <Link
          href=".."
          className="mb-3 flex items-center gap-2 dark:text-neutral-300 xl:hidden"
        >
          <Icons.ArrowLeft className="size-5" />
          <span className="text-preset-4">Settings</span>
        </Link>

        <div className="mb-6 flex flex-col gap-1">
          <p className="text-preset-3 text-neutral-950 dark:text-white">
            Color Theme
          </p>
          <p className="text-preset-5 text-neutral-700 dark:text-neutral-300">
            Choose your color theme:
          </p>
        </div>

        <ThemeSelector />
      </div>
    </div>
  );
}
