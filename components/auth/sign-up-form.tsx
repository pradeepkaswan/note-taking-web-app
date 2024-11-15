"use client";

import { useActionState, useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import * as Icons from "@/components/ui/Icons";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { signup } from "@/app/(auth)/actions";
import { toast } from "@/components/ui/Toast";

export function SignUpForm() {
  const [state, action, pending] = useActionState(signup, undefined);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    if (state?.message) {
      toast.success({
        message: state.message,
      });
    }
  }, [state?.message]);

  return (
    <form action={action} className="pt-6 text-left">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="form-login.email">Email Address</Label>
          <Input
            type="email"
            id="form-login.email"
            name="email"
            autoComplete="username"
            placeholder="email@example.com"
            className={`${state?.errors?.email && "border-red-500"}`}
          />
          {state?.errors?.email && (
            <span className="flex text-red-500">
              <Icons.Info className="-mt-[1px] mr-2 size-4" />
              <p className="text-preset-6">{state.errors.email}</p>
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="form-login.password">Password</Label>
          <div className="relative flex flex-col">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 transform text-neutral-500"
            >
              {showPassword ? (
                <Icons.HidePassword className="size-5 text-black" />
              ) : (
                <Icons.ShowPassword className="size-5 text-neutral-500" />
              )}
            </button>
            <Input
              type={showPassword ? "text" : "password"}
              id="form-login.password"
              name="password"
              autoComplete="current-password"
              className={`${state?.errors?.password && "border-red-500"}`}
            />
          </div>
          {state?.errors?.password && (
            <span className="flex text-red-500">
              <Icons.Info className="-mt-[1px] mr-2 size-4" />
              <p className="text-preset-6">{state.errors.password}</p>
            </span>
          )}
        </div>

        <Button type="submit" disabled={pending} className="w-full">
          {pending ? "..." : "Sign up"}
        </Button>
      </div>
    </form>
  );
}
