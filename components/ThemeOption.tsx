"use client";

import { useTheme } from "next-themes";

type ThemeOptionProps = {
  theme: string;
  icon: React.ComponentType;
  title: string;
  description: string;
  selectedTheme: string;
  onSelect: (theme: string) => void;
};

export function ThemeOption({
  theme,
  icon: Icon,
  title,
  description,
  selectedTheme,
  onSelect,
}: ThemeOptionProps) {
  const { setTheme } = useTheme();

  return (
    <label
      onClick={() => setTheme(theme)}
      className={`${selectedTheme === theme ? "bg-neutral-100 dark:bg-neutral-800" : ""} flex h-[72px] cursor-pointer items-center justify-between rounded-xl border border-neutral-200 p-4 dark:border-neutral-800`}
    >
      <div className="flex gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
          <div className="size-6">
            <Icon />
          </div>
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="text-preset-4 text-neutral-950 dark:text-white">
            {title}
          </p>
          <p className="text-preset-6 text-neutral-700 dark:text-neutral-300">
            {description}
          </p>
        </div>
      </div>
      <input
        type="radio"
        name="theme"
        value={theme}
        checked={selectedTheme === theme}
        onChange={() => onSelect(theme)}
      />
    </label>
  );
}
