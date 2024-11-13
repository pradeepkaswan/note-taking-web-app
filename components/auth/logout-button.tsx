"use client";

import { useActionState } from "react";
import { logoutAction } from "@/app/(auth)/actions";

import { Logout } from "../ui/Icons";

const initialState = {
  error: "",
};

export function LogoutButton() {
  const [, action] = useActionState(logoutAction, initialState);

  return (
    <form action={action}>
      <button type="submit" className="flex items-center gap-2 p-2">
        <Logout className="size-5 shrink-0" />
        <span className="text-preset-4 text-neutral-700">Logout</span>
      </button>
    </form>
  );
}
