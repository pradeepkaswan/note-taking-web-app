import { Button } from "@/components/ui/Button";
import { Delete, Archive } from "@/components/ui/Icons";

export default function NoteActions() {
  return (
    <div className="mr-8 hidden min-w-[258px] flex-col space-y-3 pl-4 pt-4 xl:flex">
      <Button
        variant="border"
        className="flex w-full justify-start gap-2 text-preset-4"
      >
        <Archive className="size-5" />
        <span>Archive Note</span>
      </Button>

      <Button
        variant="border"
        className="flex w-full justify-start gap-2 text-preset-4"
      >
        <Delete className="size-5" />
        <span>Delete Note</span>
      </Button>
    </div>
  );
}
