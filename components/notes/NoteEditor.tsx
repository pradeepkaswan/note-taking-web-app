"use client";

// import { createNote, updateNote } from "@/app/lib/actions/notes";
import { useState } from "react";
import { Clock, Tag } from "../ui/Icons";
import { Button } from "../ui/Button";

type Props = {
  initialData?: {
    id: number;
    title: string;
    content: string;
    tags: string[];
  };
};

export default function NoteEditor({ initialData }: Props) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [tags, setTags] = useState<string[]>(initialData?.tags || []);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();

      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }

      setTagInput("");
    }
  };

  return (
    <form className="flex h-full w-full flex-col">
      <div className="flex-1 divide-y">
        <div className="mb-4">
          <div className="mb-4">
            <input
              type="text"
              className="w-full border-none p-0 text-preset-1"
              value={title || "Untitled Note"}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="flex">
            <label
              className="flex w-[115px] items-center gap-[6px] whitespace-nowrap text-neutral-700"
              htmlFor="tags"
            >
              <Tag className="size-4" />
              <span className="text-preset-5">Tags</span>
            </label>

            <div className="flex gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-2 rounded bg-neutral-200 px-[6px] py-0.5 text-preset-6"
                >
                  {tag}
                </span>
              ))}
            </div>

            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              placeholder="Add tags separated by commas (e.g. Work, Planning)"
              className="w-full border-none text-preset-5 text-neutral-400"
            />
          </div>

          <div className="flex">
            <label
              className="flex w-[115px] items-center gap-[6px] text-neutral-700"
              htmlFor="date"
            >
              <Clock className="size-4" />
              <span className="whitespace-nowrap text-preset-5">
                Last edited
              </span>
            </label>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              placeholder="Not yet saved"
              className="w-full border-none text-preset-5 text-neutral-400"
              readOnly
            />
          </div>
        </div>

        <div className="pt-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full border-none text-preset-5 text-neutral-700"
            placeholder="Start typing your note here…"
          />
        </div>
      </div>

      <hr className="my-4" />

      <div>
        <Button type="submit" className="mr-4">
          Save Note
        </Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </form>
  );
}
