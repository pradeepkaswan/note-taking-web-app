"use client";

import { Button } from "@/components/ui/Button";
import * as Icons from "@/components/ui/Icons";

export function ThemeSelector() {
  const theme: Theme = "light";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div
          className={`${theme === "light" ? "bg-neutral-100 dark:bg-neutral-800" : ""} flex h-[72px] cursor-pointer items-center justify-between rounded-xl border border-neutral-200 p-4 dark:border-neutral-800`}
        >
          <div className="flex gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
              <Icons.Sun className="size-6" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="text-preset-4 text-neutral-950 dark:text-white">
                Light Mode
              </p>
              <p className="text-preset-6 text-neutral-700 dark:text-neutral-300">
                Pick a clean and classic light theme
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${theme === "dark" ? "bg-neutral-100 dark:bg-neutral-800" : ""} flex h-[72px] cursor-pointer items-center justify-between rounded-xl border border-neutral-200 p-4 dark:border-neutral-800`}
        >
          <div className="flex gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
              <Icons.Moon className="size-6" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="text-preset-4 text-neutral-950 dark:text-white">
                Dark Mode
              </p>
              <p className="text-preset-6 text-neutral-700 dark:text-neutral-300">
                Select a sleek and modern dark theme
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${theme === "system" ? "bg-neutral-100 dark:bg-neutral-800" : ""} flex h-[72px] cursor-pointer items-center justify-between rounded-xl border border-neutral-200 p-4 dark:border-neutral-800`}
        >
          <div className="flex gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
              <Icons.SystemTheme className="size-6" />
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="text-preset-4 text-neutral-950 dark:text-white">
                System
              </p>
              <p className="text-preset-6 text-neutral-700 dark:text-neutral-300">
                Adapts to your device's theme
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button className="w-fit text-white">Apply Changes</Button>
      </div>
    </div>
  );
}
