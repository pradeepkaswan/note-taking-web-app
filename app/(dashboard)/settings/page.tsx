"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/Button";
import * as Icons from "@/components/ui/Icons";

type ThemeOptionProps = {
  theme: string;
  icon: React.ComponentType;
  title: string;
  description: string;
  selectedTheme: string;
  onSelect: (theme: string) => void;
};

function ThemeOption({
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
        <div className="flex size-10 items-center justify-center rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
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

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme || "light");

  const applyTheme = () => {
    setTheme(selectedTheme);
  };

  return (
    <div className="bg-white dark:bg-neutral-950">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-preset-3 text-neutral-950 dark:text-white">
            Color Theme
          </p>
          <p className="text-preset-5 text-neutral-700 dark:text-neutral-300">
            Choose your color theme:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ThemeOption
            theme="light"
            icon={Icons.Sun}
            title="Light Mode"
            description="Pick a clean and classic light theme"
            selectedTheme={selectedTheme}
            onSelect={setSelectedTheme}
          />
          <ThemeOption
            theme="dark"
            icon={Icons.Moon}
            title="Dark Mode"
            description="Select a sleek and modern dark theme"
            selectedTheme={selectedTheme}
            onSelect={setSelectedTheme}
          />
          <ThemeOption
            theme="system"
            icon={Icons.SystemTheme}
            title="System"
            description="Adapts to your device's theme"
            selectedTheme={selectedTheme}
            onSelect={setSelectedTheme}
          />
        </div>

        <div className="flex justify-end">
          <Button className="w-fit text-white" onClick={applyTheme}>
            Apply Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
