import Link from "next/link";
import data from "@/data.json";

import { Tag } from "./ui/Icons";


function getUniqueTags(data: { notes: { tags: string[] }[] }) {
  const uniqueTags: string[] = [...new Set(data.notes.flatMap(note => note.tags))]

  return uniqueTags
}

export default function TagList() {
  const tags = getUniqueTags(data)

  return (
    <>
      {tags.length > 0 && (
        <>
          <div className="mb-4 xl:mb-2 xl:px-2">
            <h2 className="text-preset-1 text-neutral-950 xl:text-preset-4 xl:text-neutral-500">
              Tags
            </h2>
          </div>

          <ul className="flex flex-col gap-1 divide-y">
            {tags.map((tag) => (
              <li key={tag} className="py-[10px] text-neutral-700 xl:px-3">
                <Link
                  href={`/tags/${tag}}`}
                  className="flex items-center gap-2"
                >
                  <Tag className="size-5" />
                  <span className="text-preset-4">{tag}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
