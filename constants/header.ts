import { RouteConfig } from "@/types/header";
import { APP_ROUTES } from "./routes";

export const HEADER_CONFIGS: RouteConfig[] = [
  {
    pattern: APP_ROUTES.HOME,
    getTitle: () => "All Notes",
  },
  {
    pattern: APP_ROUTES.ARCHIVED,
    getTitle: () => "Archived Notes",
  },
  {
    pattern: /^\/tags\/(.+)$/,
    getTitle: (params) => `Notes Tagged: ${params.segments?.[1] ?? ""}`,
  },
  {
    pattern: APP_ROUTES.SEARCH,
    getTitle: (params) => `Showing results for: ${params.searchQuery}`,
  },
  {
    pattern: APP_ROUTES.SETTINGS,
    getTitle: () => "Settings",
  },
] as const;
