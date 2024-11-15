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
  success: ({ message, link }: ToastProps) => {
    Toast.success({ message, link });
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
