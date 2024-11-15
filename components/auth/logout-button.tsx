"use client";

import { useActionState } from "react";
import { logout } from "@/app/(auth)/actions";

import { Logout } from "../ui/Icons";

export function LogoutButton() {
  const [, action] = useActionState(logout, undefined);

  return (
    <form action={action} className="pt-2">
      <button
        type="submit"
        className="flex items-center gap-2 p-2 text-neutral-700 dark:text-neutral-200"
      >
        <Logout className="size-5 shrink-0" />
        <span className="text-preset-4 dark:text-neutral-200">Logout</span>
      </button>
    </form>
  );
}
