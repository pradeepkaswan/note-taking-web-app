"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Info } from "../ui/Icons";
import { forgotPassword } from "@/app/(auth)/actions";

export function ForgotPasswordForm() {
  const [state, action, pending] = useActionState(forgotPassword, undefined);

  return (
    <form action={action} className="flex flex-col gap-4 pt-6 text-left">
      <div className="flex flex-col gap-2">
        <Label htmlFor="form-forgot.email">Email Address</Label>
        <Input
          type="email"
          id="form-forgot.email"
          name="email"
          autoComplete="username"
          placeholder="email@example.com"
          required
        />
      </div>
      {state?.errors?.email && (
        <span className="flex text-red-500">
          <Info className="-mt-[1px] mr-2 size-4" />
          <p className="text-preset-6">{state.errors.email}</p>
        </span>
      )}

      <Button
        type="submit"
        disabled={pending}
        className="w-full text-preset-3 font-medium text-white"
      >
        Send Reset Link
      </Button>
    </form>
  );
}
