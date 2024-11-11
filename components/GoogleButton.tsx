

import { Button } from "./ui/Button";
import { Google } from "./ui/Icons";

export default function GoogleButton() {
  return (
    <form
      // action={async () => {
      //   "use server";
      //   try {
      //     await signIn("google");
      //   } catch (error) {
      //     // Signin can fail for a number of reasons, such as the user
      //     // not existing, or the user not having the correct role.
      //     // In some cases, you may want to redirect to a custom error
      //     if (error instanceof AuthError) {
      //       return redirect(`/login?error=${error.type}`);
      //     }

      //     // Otherwise if a redirects happens Next.js can handle it
      //     // so you can just re-thrown the error and let Next.js handle it.
      //     // Docs:
      //     // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
      //     throw error;
      //   }
      // }}
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
