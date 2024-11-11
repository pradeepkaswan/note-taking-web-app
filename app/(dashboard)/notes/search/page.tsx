import NoteList from "@/components/notes/NoteList";
import SearchBar from "@/components/search/SearchBar";

export default function Search() {
  return (
    <div className="flex flex-col gap-4 px-4 py-5 md:px-8 md:py-6">
      <h1 className="text-preset-1 text-neutral-950">Search</h1>
      <SearchBar />
      <div className="flex flex-col gap-4">
        <p className="text-preset-5">
          All notes matching "string" are diplayed below.
        </p>
        <NoteList
          notes={[
            {
              id: 1,
              title: "React Performance Optimization",
              tags: ["Dev", "React"],
              content:
                "Key performance optimization techniques:\n\n1. Code Splitting\n- Use React.lazy() for route-based splitting\n- Implement dynamic imports for heavy components\n\n2. Memoization\n- useMemo for expensive calculations\n- useCallback for function props\n- React.memo for component optimization\n\n3. Virtual List Implementation\n- Use react-window for long lists\n- Implement infinite scrolling\n\nTODO: Benchmark current application and identify bottlenecks",
              lastEdited: "2024-10-29T10:15:00Z",
              isArchived: false,
            },
          ]}
        />
      </div>
    </div>
  );
}
