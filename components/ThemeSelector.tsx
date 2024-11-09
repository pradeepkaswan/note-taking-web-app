"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/Button";
import * as Icons from "@/components/ui/Icons";
import { ThemeOption } from "@/components/ThemeOption";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme || "light");

  const applyTheme = () => {
    setTheme(selectedTheme);
  };

  return (
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
      <div className="flex justify-end">
        <Button className="w-fit text-white" onClick={applyTheme}>
          Apply Changes
        </Button>
      </div>
    </div>
  );
}
