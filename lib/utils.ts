import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { RouteConfig, RouteParams } from "@/types/header";
import { HEADER_CONFIGS } from "@/constants/header";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class RouteManager {
  static getHeaderTitle(params: RouteParams): string {
    const config = this.findMatchingRoute(params);
    return config ? config.getTitle(params) : "Notes";
  }

  private static findMatchingRoute(
    params: RouteParams,
  ): RouteConfig | undefined {
    return HEADER_CONFIGS.find((config) => {
      if (typeof config.pattern === "string") {
        return params.pathname === config.pattern;
      }

      return config.pattern.test(params.pathname);
    });
  }
}
