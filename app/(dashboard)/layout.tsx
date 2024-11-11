import type { Metadata } from "next";

import MenuBar from "@/components/shared/MenuBar";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";
import { Plus } from "@/components/ui/Icons";

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
      <PlusButton />
      <div className="w-full">
        <Header />
          {children}

        <MenuBar />
      </div>
    </div>
  );
}

function PlusButton() {
  return (
    <button className="absolute bottom-[72px] right-4 flex size-12 items-center justify-center rounded-full bg-blue-500 text-white drop-shadow-md xl:hidden">
      <Plus className="size-8" />
    </button>
  );
}