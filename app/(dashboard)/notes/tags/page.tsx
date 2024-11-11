import TagList from "@/components/TagList";
import { getTags } from "@/lib/actions/notes";

export default async function TagsPage() {
  const tags = await getTags();

  return (
    <div className="px-4 py-5 xl:hidden">
      <TagList tags={tags} />
    </div>
  );
}
