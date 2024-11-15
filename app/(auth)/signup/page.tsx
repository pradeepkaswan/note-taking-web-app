import Link from "next/link";
import { redirect } from "next/navigation";

import GoogleOAuthButton from "@/components/google-oauth-button";
import { SignUpForm } from "@/components/auth/sign-up-form";
import { getCurrentSession } from "@/app/_lib/server/session";

export default async function SignupPage() {
  const { session } = await getCurrentSession();

  if (session !== null) {
    return redirect("/notes");
  }
  return (
    <>
      <h1 className="mb-2 mt-4 text-preset-1">Create your Account</h1>
      <p className="mb-4 text-preset-5 text-neutral-600">
        Sign up to start organizing your notes and boost your productivity.
      </p>

      <SignUpForm />

      <hr className="mt-4" />

      <p className="mb-4 mt-6 text-center text-preset-5 text-neutral-600">
        Or log in with:
      </p>

      <GoogleOAuthButton />

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
