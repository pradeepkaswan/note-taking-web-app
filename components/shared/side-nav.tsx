import Link from "next/link";

import { Logo } from "@/components/ui/Icons";
import TagList from "@/components/TagList";
import NavLinks from "./nav-links";

export default function SideNav() {
  const tags = ["React", "Next.js", "Tailwind CSS", "TypeScript"];

  return (
    <aside className="hidden h-screen w-[272px] flex-col border-r bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950 xl:flex">
      <div className="mb-4 py-3">
        <Link href="/">
          <Logo className="shrink-0 dark:text-white" />
        </Link>
      </div>

      <NavLinks />

      <hr className="my-4 dark:border-neutral-800" />

      <TagList tags={tags} />
    </aside>
  );
}
