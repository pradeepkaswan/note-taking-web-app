import Link from "next/link";

import { Icon } from "./ui/Icons";
import { Tag } from "@/types/note";

type Props = {
  tags: Tag[];
};

export default function Sidebar({ tags }: Props) {
  return (
    <aside>
      <nav>
        <Link href="/" aria-label="Home">
          <Icon aria-hidden={true} />
          All Notes
        </Link>
        <Link href="/archived" aria-label="Archived Notes">
          <Icon aria-hidden={true} />
          Archived Notes
        </Link>
      </nav>
      <h2>Tags</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link href={`/tags/${tag.id}}`}>{tag.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
