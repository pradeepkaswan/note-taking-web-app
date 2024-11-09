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
    <div className="flex flex-col items-center justify-center bg-neutral-100 px-4">
      {children}
    </div>
  );
}
