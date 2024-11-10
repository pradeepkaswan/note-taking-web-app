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

export async function saltAndHashPassword(password: string) {
  // Generate a random salt
  const salt = Math.random().toString(36).substring(2, 10);

  // Concatenate password and salt, then hash using SHA-256
  const enc = new TextEncoder().encode(password + salt);
  const hashBuffer = await crypto.subtle.digest("SHA-256", enc);

  // Convert the hash to a hexadecimal string
  const hash = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // Return the salt and hash
  return `${salt}:${hash}`;
}
