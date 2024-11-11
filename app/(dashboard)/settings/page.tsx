import Link from "next/link";

import { ThemeSelector } from "@/components/settings/ThemeSelector";
import * as Icons from "@/components/ui/Icons";
import { signOut } from "@/lib/actions/auth";

export default function Settings() {
  return (
    <div className="flex">
      <aside className="hidden min-w-[258px] flex-col border-r pl-8 pr-4 pt-5 xl:flex">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between rounded-md bg-neutral-100 p-2">
            <div className="flex items-center gap-2">
              <Icons.Sun className="size-5 shrink-0" />
              <span className="whitespace-nowrap text-preset-4 text-neutral-950">
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

        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit" className="flex items-center gap-2 p-2">
            <Icons.Logout className="size-5 shrink-0" />
            <span className="text-preset-4 text-neutral-700">Logout</span>
          </button>
        </form>
      </aside>

      <div className="w-full flex-1 flex-col px-4 py-6 md:px-8 xl:p-8">
        <Link
          href="/settings"
          className="mb-3 flex items-center gap-2 text-neutral-600 dark:text-neutral-300 xl:hidden"
        >
          <Icons.ArrowLeft className="size-5" />
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
    </div>
  );
}
