import Link from "next/link";
import { Tag } from "./ui/Icons";
import { Tag as ITag } from "@/app/lib/types";

export default function TagList({ tags }: { tags: ITag[] }) {
  return (
    <>
      {tags && tags.length > 0 && (
        <ul className="flex flex-col gap-1 divide-y overflow-y-scroll dark:divide-neutral-800 xl:divide-none">
          {tags.map((tag) => (
            <li
              key={tag.id}
              className="py-[10px] text-neutral-700 dark:text-neutral-200 xl:px-3"
            >
              <Link href={`/tags/${tag}}`} className="flex items-center gap-2">
                <Tag className="size-5" />
                <span className="text-preset-4">{tag.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
