import { RouteManager } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

export const useHeaderTitle = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const segments = pathname.split("/").filter(Boolean);
  const searchQuery = searchParams?.get("q");

  return RouteManager.getHeaderTitle({
    pathname,
    searchQuery,
    segments,
  });
};
