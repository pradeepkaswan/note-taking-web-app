"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { signIn } from "@/lib/actions/auth";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import * as Icons from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      await signIn({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      });
      router.push("/notes");
      router.refresh();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="pt-6 text-left">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label>Email Address</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="email@example.com"
            required
            className={`${error && "border-red-500"}`}
          />
          {error && (
            <span className="flex text-red-500">
              <Icons.Info className="-mt-[1px] mr-2 size-4" />

              <p className="text-preset-6">
                This is a hint text to help user. {error}
              </p>
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label>Password</Label>
            <Link
              href="/forgot-password"
              className="cursor-pointer text-preset-6 text-neutral-600 underline underline-offset-[2.5px] hover:text-blue-500"
            >
              Forgot
            </Link>
          </div>

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
              id="password"
              type={showPassword ? "text" : "password"}
              className={`${error && "border-red-500"}`}
              name="password"
              autoComplete="true"
              required
            />
          </div>
          {error && (
            <span className="flex text-red-500">
              <Icons.Info className="-mt-[1px] mr-2 size-4" />

              <p className="text-preset-6">
                This is a hint text to help user. {error}
              </p>
            </span>
          )}
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Logging in..." : "Login"}
        </Button>
      </div>
    </form>
  );
}
