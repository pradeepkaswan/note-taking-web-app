import Link from "next/link";

import GoogleButton from "@/components/GoogleButton";
import { SignUpForm } from "@/components/auth/SignUpForm";

export default function SignupPage() {
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
