import Link from "next/link";

import * as Icons from "@/components/ui/Icons";
import { LogoutButton } from "@/components/auth/logout-button";

export default function SettingsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-full flex-col bg-white px-4 py-6 dark:bg-neutral-950">
      <h1 className="mb-4 text-preset-1 text-neutral-950 dark:text-white xl:hidden">
        Settings
      </h1>

      <div className="flex">
        <aside className="flex-col dark:border-neutral-800 xl:flex xl:w-[258px] xl:border-r xl:pl-8">
          <div className="flex flex-col gap-2 border-b border-neutral-200 pb-2 dark:border-neutral-800">
            <div className="flex items-center justify-between rounded-md bg-neutral-100 p-2 dark:bg-neutral-800">
              <Link
                href="/settings/theme"
                className="flex items-center gap-2 text-neutral-950 dark:text-neutral-200"
              >
                <Icons.Sun className="size-5 shrink-0" />
                <span className="whitespace-nowrap text-preset-4">
                  Color Theme
                </span>
              </Link>
              <Icons.ChevronRight className="size-6" />
            </div>

            <div className="flex items-center gap-2 p-2 text-neutral-700 dark:text-neutral-200">
              <Icons.Font className="size-5 shrink-0" />
              <span className="text-preset-4">Font Theme</span>
            </div>

            <div className="flex items-center gap-2 p-2 text-neutral-700 dark:text-neutral-200">
              <Icons.Lock className="size-5 shrink-0" />
              <span className="text-preset-4">Change Password</span>
            </div>
          </div>

          <LogoutButton />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
