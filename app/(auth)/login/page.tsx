import Link from "next/link";

import GoogleButton from "@/components/GoogleButton";
import { LoginForm } from "@/components/auth/LoginForm";

export default async function LoginPage() {
  return (
    <>
      <h1 className="mb-2 mt-4 text-preset-1 text-neutral-950 dark:text-white">
        Welcome to Note
      </h1>
      <p className="mb-4 text-preset-5 text-neutral-600 dark:text-neutral-300">
        Please log in to continue
      </p>

      <LoginForm />

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
