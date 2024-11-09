import { Search } from "@/components/ui/Icons";

export default function SearchBar() {
  return (
    <div className="flex">
      <Search className="mr-2" />
      <input
        className="px-4 py-3 rounded-lg bg-transparent border"
        type="text"
        placeholder="Search by title, content, or tags..."
      />
    </div>
  );
}
