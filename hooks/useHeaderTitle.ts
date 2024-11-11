import { usePathname, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const segments = decodeURIComponent(pathname).split("/").filter(Boolean);
  const searchQuery = searchParams?.get("q") || "";

  const config = headerConfigs.find((config) => {
    if (typeof config.pattern === "string") {
      return pathname === config.pattern;
    }
  });

  if (!config) return "Notes";

  return config.title;
}
