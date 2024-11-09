import * as Icons from "@/components/ui/Icons";

const menuBarItems = [
  { label: "Home", icon: "Home", href: "/notes" },
  { label: "Search", href: "/notes/search" },
  { label: "Archived", href: "/notes/archived" },
  { label: "Tags", href: "/tags" },
  { label: "Settings", href: "/settings" },
];

export default function MenuBar() {
  return (
    <div className="bottom-0 left-0 right-0 h-14 bg-white px-4 py-3 dark:bg-neutral-950">
      <ul>
        {menuBarItems.map((item) => (
          <li key={item.label}>
            <a href={item.href}></a>
          </li>
        ))}
      </ul>
    </div>
  );
}
