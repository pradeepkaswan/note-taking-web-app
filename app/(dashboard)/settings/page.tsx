import Link from "next/link";
import * as Icons from "@/components/ui/Icons";
import { LogoutButton } from "@/components/auth/logout-button";

export default function SettingsPage() {
  return (
    <div className="h-full bg-white px-4 py-5 dark:bg-neutral-950">
      <h1 className="mb-4 text-preset-1">Settings</h1>
      <aside className="min-w-[258px] flex-col xl:flex xl:hidden">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between rounded-md bg-neutral-100 p-2">
            <Link href="/settings/theme" className="flex items-center gap-2">
              <Icons.Sun className="size-5 shrink-0" />
              <span className="whitespace-nowrap text-preset-4 text-neutral-950">
                Color Theme
              </span>
            </Link>
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

        <LogoutButton />
      </aside>
    </div>
  );
}
