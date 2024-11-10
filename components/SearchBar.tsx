"use client";

import { Search } from "@/components/ui/Icons";
import { useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/Input";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = useCallback(
    (value: string) => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        const params = new URLSearchParams(searchParams);

        if (value) {
          params.set("q", value);
        } else {
          params.delete("q");
        }

        router.push(`/notes/search?${params.toString()}`);
      }, 300);
    },
    [router, searchParams],
  );

  return (
    <div className="relative flex text-neutral-500">
      <Search className="absolute left-4 top-3 mr-2 flex size-5" />

      <Input
        type="search"
        placeholder="Search by title, content, or tags..."
        className="min-w-[315px] px-[44px] text-preset-5"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams?.get("q") ?? ""}
      />
    </div>
  );
}
