import type { Metadata } from "next";

import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Frontend Mentor | Note-taking web app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="bg-white dark:bg-neutral-950">{children}</div>
        <MenuBar />
      </div>
    </div>
  );
}
