"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Info } from "../ui/Icons";
import { forgotPasswordAction } from "@/app/(auth)/actions";

const initialForgotPasswordState = {
  error: {},
};

export function ForgotPasswordForm() {
  const [state, action] = useActionState(
    forgotPasswordAction,
    initialForgotPasswordState,
  );

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
      {state.error?.email && (
        <span className="flex text-red-500">
          <Info className="-mt-[1px] mr-2 size-4" />
          <p className="text-preset-6">{state.error.email}</p>
        </span>
      )}

      <Button
        type="submit"
        className="w-full text-preset-3 font-medium text-white"
      >
        Send Reset Link
      </Button>
    </form>
  );
}
