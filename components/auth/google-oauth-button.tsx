import { Button } from "@/components/ui/Button";
import { Google } from "@/components/ui/Icons";

export default function GoogleOAuthButton() {
  return (
    <form
      action={`${process.env.NEXT_PUBLIC_URL}/api/login/google`}
      method="GET"
    >
      <Button
        type="submit"
        variant="border"
        className="flex h-12 w-full items-center gap-2 rounded-xl dark:text-white"
      >
        <div className="flex-shrink-0">
          <Google className="h-6 w-6" />
        </div>
        <span className="text-preset-3">Google</span>
      </Button>
    </form>
  );
}
