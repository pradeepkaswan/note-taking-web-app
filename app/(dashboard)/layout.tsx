import BottomNav from "@/components/shared/bottom-nav";
import SideNav from "@/components/shared/side-nav";
import Header from "@/components/shared/header";
import { Plus } from "@/components/ui/Icons";
import { Suspense } from "react";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-screen">
      <SideNav />
      <div className="flex flex-1 flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
      <BottomNav />
      <FloatingActionButton />
    </div>
  );
}

function FloatingActionButton() {
  return (
    <button className="fixed bottom-[72px] right-4 flex size-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg md:bottom-[106px] md:size-16 xl:hidden">
      <Plus className="size-8" />
    </button>
  );
}
