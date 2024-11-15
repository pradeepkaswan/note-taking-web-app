"use client";

import { ComponentProps, forwardRef } from "react";

import { cn } from "@/app/_lib/utils";

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full cursor-pointer rounded-lg border border-neutral-300 bg-transparent px-4 py-3 text-preset-5 text-neutral-950 ring-neutral-500 ring-offset-2 drop-shadow-sm placeholder:text-neutral-500 hover:bg-neutral-50 focus-visible:border-neutral-950 focus-visible:outline-none focus-visible:ring-2 disabled:bg-neutral-50 disabled:text-neutral-300 dark:border-neutral-600 dark:hover:bg-neutral-800",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
