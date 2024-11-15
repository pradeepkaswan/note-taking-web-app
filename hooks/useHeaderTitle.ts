import { usePathname } from "next/navigation";

const ROUTES = {
  HOME: "/notes",
  ARCHIVED: "/notes/archived",
  TAGS: "/tags",
  SETTINGS: "/settings",
} as const;

const headerConfigs = [
  {
    pattern: ROUTES.HOME,
    title: "All Notes",
  },
  {
    pattern: ROUTES.ARCHIVED,
    title: "Archived Notes",
  },
  {
    pattern: ROUTES.TAGS,
    title: "Tags",
  },
  {
    pattern: ROUTES.SETTINGS,
    title: "Settings",
  },
];

export function useHeaderTitle() {
  const pathname = usePathname();

  const config = headerConfigs.find((config) => {
    if (typeof config.pattern === "string") {
      return pathname === config.pattern;
    }
  });

  if (!config) return "Notes";

  return config.title;
}
