import type { Metadata } from "next";
import prisma from "@/lib/prisma";

import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Frontend Mentor | Note-taking web app",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tags = await prisma.tag.findMany();

  return (
    <div className="flex">
      <Sidebar tags={tags} />
      <div className="w-full">
        <Header />
        {children}
        <MenuBar />
      </div>
    </div>
  );
}
