import { Button } from "@/components/ui/Button";

export default function ForgotPassword() {
  return (
    <>
      <h1 className="mb-2 mt-4 text-preset-1">Forgotten your password?</h1>
      <p className="mb-4 text-preset-5 text-neutral-600">
        Enter your email below, and we’ll send you a link to reset it.
      </p>

      <form className="flex flex-col gap-4 pt-6 text-left">
        <div className="flex flex-col gap-[6px]">
          <label htmlFor="email" className="text-preset-4 text-neutral-950">
            Email Address
          </label>
          <input
            type="password"
            name="password"
            placeholder="email@example.com"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full text-preset-3 font-medium text-white"
        >
          Send Reset Link
        </Button>
      </form>
    </>
  );
}
