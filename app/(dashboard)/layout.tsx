import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Mentor | Note-taking web app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
