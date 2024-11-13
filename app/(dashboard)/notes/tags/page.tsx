import TagList from "@/components/TagList";
// import { getTags } from "@/lib/actions/notes";

export default async function TagsPage() {
  // const tags = await getTags();
  const tags = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "GraphQL",
    "MySQL",
    "SQLite",
    "SQL Server",
    "MongoDB",
    "Redis",
    "Firebase",
    "Remix",
    "HTMX",
  ];

  return (
    <div className="rounded-lg bg-white px-4 py-5 xl:hidden">
      <TagList tags={tags} />
    </div>
  );
}
