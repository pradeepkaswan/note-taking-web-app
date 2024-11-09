"use client";

import { Search } from "@/components/ui/Icons";
import { useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
      <input
        type="search"
        className="h-[44px] min-w-[315px] rounded-lg border bg-transparent px-[44px] py-3 text-preset-5 text-neutral-950"
        placeholder="Search by title, content, or tags..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams?.get("q") ?? ""}
      />
    </div>
  );
}
