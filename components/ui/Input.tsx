"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full cursor-pointer rounded-lg border border-neutral-300 bg-white px-4 py-3 text-preset-5 text-neutral-950 ring-neutral-500 ring-offset-2 drop-shadow-sm hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2",
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
