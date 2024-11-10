import { Logo } from "@/components/ui/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | Note-taking web app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="mx-4 w-[540px] rounded-xl border border-neutral-200 bg-white px-4 py-12 text-center shadow-lg dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-none md:px-8">
        <div className="flex justify-center pb-2">
          <Logo />
        </div>
        {children}
      </div>
    </div>
  );
}
