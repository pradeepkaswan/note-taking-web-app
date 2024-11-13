import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <>
      <h1 className="mb-2 mt-4 text-preset-1">Forgotten your password?</h1>
      <p className="mb-4 text-preset-5 text-neutral-600">
        Enter your email below, and we’ll send you a link to reset it.
      </p>

      <ForgotPasswordForm />
    </>
  );
}
