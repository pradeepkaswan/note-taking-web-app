import Link from "next/link";

import { Tag } from "./ui/Icons";

export default function TagList() {
  // const tags = await prisma.tag.findMany();

  const tags = [
    { id: "1", name: "Design" },
    { id: "2", name: "Development" },
    { id: "3", name: "Marketing" },
  ];

  return (
    <>
      {tags.length > 0 && (
        <>
          <div className="mb-4 xl:mb-2 xl:px-2">
            <h2 className="text-preset-1 text-neutral-950 xl:text-preset-4 xl:text-neutral-500">
              Tags
            </h2>
          </div>

          <ul className="flex flex-col gap-1">
            {tags.map((tag) => (
              <li
                key={tag.id}
                className="border-spacing-1 border-b py-[10px] text-neutral-700 xl:border-none xl:px-3"
              >
                <Link
                  href={`/tags/${tag.id}}`}
                  className="flex items-center gap-2"
                >
                  <Tag className="size-5" />
                  <span className="text-preset-4">{tag.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
