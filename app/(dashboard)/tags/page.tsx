import { redirect } from "next/navigation";

import { type Tag } from "@/app/_lib/db/schema";
import { getCurrentSession } from "@/app/_lib/server/session";
import TagList from "@/components/tags/TagList";

export default async function TagsPage() {
  const { session, user } = await getCurrentSession();

  if (session === null || user === null) {
    return redirect("/login");
  }

  const tags: Tag[] = [
    {
      id: "1",
      name: "Design",
    },
    {
      id: "2",
      name: "Development",
    },
    {
      id: "3",
      name: "Marketing",
    },
    {
      id: "4",
      name: "Productivity",
    },
  ];

  return (
    <div className="h-full rounded-lg bg-white px-4 py-5 dark:bg-neutral-950 xl:hidden">
      <div className="mb-4">
        <h2 className="text-preset-1 text-neutral-950 dark:text-white">Tags</h2>
      </div>
      <TagList tags={tags} />
    </div>
  );
}
