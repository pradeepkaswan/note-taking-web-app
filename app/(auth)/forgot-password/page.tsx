import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

// const initialForgotPasswordState = {
//   message: "",
// };

export default function ForgotPasswordPage() {
  return (
    <>
      <h1 className="mb-2 mt-4 text-preset-1">Forgotten your password?</h1>
      <p className="mb-4 text-preset-5 text-neutral-600">
        Enter your email below, and we’ll send you a link to reset it.
      </p>

      <form className="flex flex-col gap-4 pt-6 text-left">
        <div className="flex flex-col gap-2">
          <Label htmlFor="form-login.email">Email Address</Label>
          <Input
            type="email"
            id="form-login.email"
            name="email"
            autoComplete="username"
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
