"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { ShowPassword } from "./Icons";
import { HidePassword } from "./Icons";
import { useState } from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full cursor-pointer rounded-lg border border-neutral-300 bg-transparent px-4 py-3 text-preset-5 text-neutral-950 ring-offset-neutral-500 placeholder:text-neutral-500 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

const PasswordInput: React.FC<{ name: string }> = ({ name }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  console.log(showPassword);

  return (
    <div className="relative flex flex-col">
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 transform text-neutral-500"
      >
        {showPassword ? (
          <HidePassword className="size-5 text-black" />
        ) : (
          <ShowPassword className="size-5" />
        )}
      </button>
      <Input
        type={showPassword ? "text" : "password"}
        name={name}
        autoComplete="true"
      />
    </div>
  );
};

export { Input, PasswordInput };
