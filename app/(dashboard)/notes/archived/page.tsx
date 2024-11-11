import Link from "next/link";

import NoteList from "@/components/notes/NoteList";
// import { getArchivedNotes } from "@/lib/actions/notes";

export default async function ArchivedNotes() {
  // const notes = await getArchivedNotes();

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
    {
      id: 2,
      title: "Japan Travel Planning",
      tags: ["Travel", "Personal"],
      content:
        "Japan Trip Planning - Spring 2025\n\nItinerary Draft:\nWeek 1: Tokyo\n- Shibuya and Harajuku\n- TeamLab Digital Art Museum\n- Day trip to Mount Fuji\n\nWeek 2: Kyoto & Osaka\n- Traditional temples\n- Cherry blossom viewing\n- Food tour in Osaka\n\nBudget: $3000\nAccommodation: Mix of hotels and traditional ryokans\nJR Pass: 14 days\n\nTODO: Book flights 6 months in advance",
      lastEdited: "2024-10-28T16:45:00Z",
      isArchived: false,
    },
  ];

  return (
    <div className="flex h-full justify-between divide-x divide-neutral-200 rounded-lg bg-white dark:divide-neutral-800 dark:bg-neutral-950 xl:rounded-none">
      <div className="w-full px-4 py-5 dark:bg-neutral-950 md:px-8 md:py-6 xl:w-[290px] xl:pl-8 xl:pr-4 xl:pt-5">
        <h1 className="mb-4 text-preset-1 text-neutral-950 xl:hidden">
          Archived Notes
        </h1>

        <p className="mb-4 text-preset-5 text-neutral-700 dark:text-neutral-200">
          All your archived notes are stored here. You can restore or delete
          them anytime.
        </p>

        {notes && notes.length > 0 ? (
          <NoteList notes={notes} />
        ) : (
          <p className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-preset-5 text-neutral-950 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
            No notes have been archived yet. Move notes here for safekeeping, or{" "}
            <Link
              href="/notes/new"
              className="cursor-pointer underline underline-offset-2"
            >
              create a new note
            </Link>
            .
          </p>
        )}
      </div>
    </div>
  );
}
