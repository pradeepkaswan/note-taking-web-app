"use client";

import Link from "next/link";

import { toast as sonnerToast } from "sonner";
import * as Icons from "@/components/ui/Icons";

interface ToastProps {
  message: string;
  link?: {
    text: string;
    href: string;
  };
}

export const toast = {
  accountDoesNotExist: () => {
    Toast.success({
      message: "Account does not exist",
      link: {
        text: "Sign up",
        href: "/signup",
      },
    });
  },

  saveNote: () => {
    Toast.success({
      message: "Note saved successfully",
    });
  },

  archiveNote: () => {
    Toast.success({
      message: "Note archived.",
      link: {
        text: "Archived Notes",
        href: "/notes/archived",
      },
    });
  },

  deleteNote: () => {
    Toast.success({
      message: "Note permanently deleted.",
    });
  },

  restoreNote: () => {
    Toast.success({
      message: "Note restored to active notes.",
      link: {
        text: "All Notes",
        href: "/notes",
      },
    });
  },

  updateSettings: () => {
    Toast.success({
      message: "Settings updated successfully!",
    });
  },

  changePassword: () => {
    Toast.success({
      message: "Password changed successfully!",
    });
  },

  addTag: () => {
    Toast.success({
      message: "Tag added successfully!",
    });
  },

  removeTag: () => {
    Toast.success({
      message: "Tag removed successfully!",
    });
  },
};

const Toast = {
  success: ({ message, link }: ToastProps) => {
    sonnerToast.custom(() => (
      <div className="flex min-w-[274px] items-center justify-between rounded-lg border border-neutral-200 bg-white p-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="flex-shrink-0">
            <Icons.Checkmark className="size-4 text-green-500" />
          </div>
          <div className="flex-1">
            <p className="text-preset-6 text-neutral-950">{message}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {link && (
            <Link
              href={link.href}
              className="text-preset-6 text-neutral-950 underline underline-offset-2"
            >
              {link.text}
            </Link>
          )}
          <button className="flex-shrink-0 text-neutral-400">
            <Icons.Cross className="size-4" />
          </button>
        </div>
      </div>
    ));
  },
};
