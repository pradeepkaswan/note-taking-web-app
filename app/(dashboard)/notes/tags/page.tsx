import { Tag } from "@/app/lib/definitions";
import TagList from "@/components/TagList";
// import { getTags } from "@/lib/actions/notes";

export default async function TagsPage() {
  // const tags = await getTags();
  const tags: Tag[] = [];

  return (
    <div className="h-full rounded-lg bg-white px-4 py-5 xl:hidden">
      <div className="mb-4">
        <h2 className="text-preset-1 text-neutral-950">Tags</h2>
      </div>
      <TagList tags={tags} />
    </div>
  );
}
