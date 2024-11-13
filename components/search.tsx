"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import * as Icons from "@/components/ui/Icons";
import { Input } from "@/components/ui/Input";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((query) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    replace(`${pathname}/search?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0 text-neutral-500">
      <Icons.Search className="absolute left-4 top-3 z-10 mr-2 flex size-5 cursor-pointer peer-focus:text-neutral-800" />
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        type="text"
        placeholder={placeholder}
        className="peer min-w-[300px] pl-[44px] pr-4 text-preset-5"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
