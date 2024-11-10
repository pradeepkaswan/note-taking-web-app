import Link from "next/link";

import GoogleButton from "@/components/GoogleButton";
import { Button } from "@/components/ui/Button";
import { signIn } from "@/auth";

export default function Signup() {
  return (
    <>
      <h1 className="mb-2 mt-4 text-preset-1">Create your Account</h1>
      <p className="mb-4 text-preset-5 text-neutral-600">
        Sign up to start organizing your notes and boost your productivity.
      </p>

      <form
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
        className="pt-6 text-left"
      >
        <fieldset className="flex flex-col gap-4">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="email" className="text-preset-4 text-neutral-950">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              required
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="password"
              className="text-preset-4 text-neutral-950"
            >
              Password
            </label>
            <input type="password" name="password" required />
          </div>

          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </fieldset>
      </form>

      <hr className="mt-4" />

      <p className="mb-4 mt-6 text-center text-preset-5 text-neutral-600">
        Or log in with:
      </p>

      <GoogleButton />

      <hr className="my-4" />

      <p className="text-center text-preset-5 text-neutral-600">
        Already have an account?{" "}
        <Link className="text-neutral-950" href="/login">
          Login
        </Link>
      </p>
    </>
  );
}
