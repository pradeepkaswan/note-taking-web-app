import Link from "next/link";
import { redirect } from "next/navigation";

import GoogleOAuthButton from "@/components/auth/google-oauth-button";
import { SignUpForm } from "@/components/auth/sign-up-form";
import { getCurrentSession } from "@/app/_lib/server/session";

export default async function SignupPage() {
  const { session, user } = await getCurrentSession();

  if (session !== null || user !== null) {
    return redirect("/");
  }

  return (
    <div>
      <div className="mb-4 mt-4 flex flex-col gap-2">
        <h1 className="text-preset-1 text-neutral-950 dark:text-white">
          Create your Account
        </h1>
        <p className="text-preset-5 text-neutral-600 dark:text-neutral-300">
          Sign up to start organizing your notes and boost your productivity.
        </p>
      </div>

      <SignUpForm />

      <hr className="mt-4 border-neutral-200 dark:border-neutral-800" />

      <p className="text-neutral-60 mb-4 mt-6 text-center text-preset-5 dark:text-neutral-300">
        Or log in with:
      </p>

      <GoogleOAuthButton />

      <hr className="my-4 border-neutral-200 dark:border-neutral-800" />

      <p className="text-center text-preset-5 text-neutral-600 dark:text-neutral-300">
        Already have an account?{" "}
        <Link
          className="text-neutral-950 hover:text-blue-500 dark:text-white dark:hover:text-blue-500"
          href="/login"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
