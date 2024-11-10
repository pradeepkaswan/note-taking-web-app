import { Button } from "@/components/ui/Button";

export default function ResetPassword() {
  return (
    <>
      <h1 className="mb-2 mt-4 text-preset-1">Reset Your Password</h1>
      <p className="mb-4 text-preset-5 text-neutral-600">
        Choose a new password to secure your account.
      </p>

      <form className="pt-6 text-left">
        <fieldset className="flex flex-col gap-4">
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="email" className="text-preset-4 text-neutral-950">
              New Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="email@example.com"
              required
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="password"
              className="text-preset-4 text-neutral-950"
            >
              Confirm New Password
            </label>
            <input type="password" name="password" required />
          </div>

          <Button type="submit" className="w-full">
            Reset Password
          </Button>
        </fieldset>
      </form>
    </>
  );
}
