"use client";

import type { Note } from "@prisma/client";
import { useState } from "react";

export default function Header() {
  const [searchResults, setSearchResults] = useState<Note[]>([]);

  const handleSearch = async (query: string) => {
    const response = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const { notes } = await response.json();
    setSearchResults(notes);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title, content, tags..."
        onChange={handleSearchChange}
      />
    </div>
  );
}
