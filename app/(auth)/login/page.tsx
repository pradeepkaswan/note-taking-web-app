import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { Button } from "@/components/ui/Button";
import GoogleButton from "@/components/GoogleButton";
import { Input, PasswordInput } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Info } from "@/components/ui/Icons";

export default async function Login() {
  return (
    <>
      <h1 className="mb-2 mt-4 text-preset-1 text-neutral-950 dark:text-white">
        Welcome to Note
      </h1>
      <p className="mb-4 text-preset-5 text-neutral-600 dark:text-neutral-300">
        Please log in to continue
      </p>

      <form
        action={async (formData) => {
          "use server";
          try {
            await signIn("credentials", formData);
          } catch (error) {
            if (error instanceof AuthError) {
              return redirect(`/login?error=${error.type}`);
            }
            throw error;
          }
        }}
        className="pt-6 text-left"
      >
        <fieldset className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Email Address</Label>
            <Input type="email" name="email" placeholder="email@example.com" />
            <span className="flex items-center gap-2 text-preset-6 text-neutral-600">
              <Info className="size-4" />
              <span>This is a hint text to help user.</span>
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label>Password</Label>
              <span className="cursor-pointer text-preset-6 text-neutral-600 underline underline-offset-[2.5px] hover:text-blue-500">
                Forgot
              </span>
            </div>
            <PasswordInput name="password" />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </fieldset>
      </form>

      <hr className="mt-4 border-neutral-200 dark:border-neutral-800" />

      <p className="mb-4 mt-6 text-center text-preset-5 text-neutral-600 dark:text-neutral-300">
        Or log in with:
      </p>

      <GoogleButton />

      <hr className="my-4 border-neutral-200 dark:border-neutral-800" />

      <p className="text-center text-preset-5 text-neutral-600 dark:text-neutral-300">
        No account yet?{" "}
        <Link
          className="text-neutral-950 hover:text-blue-500 dark:text-white"
          href="/signup"
        >
          Sign Up
        </Link>
      </p>
    </>
  );
}
