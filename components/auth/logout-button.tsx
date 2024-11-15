"use client";

import { useActionState } from "react";
import { logout } from "@/app/(auth)/actions";

import { Logout } from "../ui/Icons";

const initialState = {
  errors: {},
};

export function LogoutButton() {
  const [, action] = useActionState(logout, initialState);

  return (
    <form action={action}>
      <button type="submit" className="flex items-center gap-2 p-2">
        <Logout className="size-5 shrink-0" />
        <span className="text-preset-4 text-neutral-700">Logout</span>
      </button>
    </form>
  );
}
