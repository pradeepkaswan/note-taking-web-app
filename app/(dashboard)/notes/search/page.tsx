import NoteList from "@/components/notes/NoteList";
import SearchBar from "@/components/search/SearchBar";
import Link from "next/link";

export default function Search() {
  const notes = [
    {
      id: 1,
      title: "React Performance Optimization",
      tags: ["Dev", "React"],
      content:
        "Key performance optimization techniques:\n\n1. Code Splitting\n- Use React.lazy() for route-based splitting\n- Implement dynamic imports for heavy components\n\n2. Memoization\n- useMemo for expensive calculations\n- useCallback for function props\n- React.memo for component optimization\n\n3. Virtual List Implementation\n- Use react-window for long lists\n- Implement infinite scrolling\n\nTODO: Benchmark current application and identify bottlenecks",
      lastEdited: "2024-10-29T10:15:00Z",
      isArchived: false,
    },
  ];

  return (
    <div className="flex h-full flex-col gap-4 rounded-lg bg-white px-4 py-5 dark:bg-neutral-950 md:px-8 md:py-6">
      <h1 className="text-preset-1 text-neutral-950 xl:hidden">Search</h1>
      <div className="xl:hidden">
        <SearchBar />
      </div>
      <div className="flex flex-col gap-4 xl:hidden">
        <p className="text-preset-5">
          All notes matching "string" are diplayed below.
        </p>
        {!notes && notes.length > 0 ? (
          <NoteList notes={notes} />
        ) : (
          <p className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-preset-5 text-neutral-950 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
            No notes match your search. Try a different keyword or{" "}
            <Link href="/notes/new" className="underline underline-offset-2">
              create a new note
            </Link>
            .
          </p>
        )}
      </div>
    </div>
  );
}
