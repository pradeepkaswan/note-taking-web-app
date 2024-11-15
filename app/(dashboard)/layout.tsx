import BottomNav from "@/components/layout/bottom-nav";
import SideNav from "@/components/layout/side-nav";
import Header from "@/components/layout/header";
import { Plus } from "@/components/ui/Icons";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-screen">
      <SideNav />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
      <BottomNav />
      <FloatingActionButton />
    </div>
  );
}

function FloatingActionButton() {
  return (
    <button className="fixed bottom-[72px] right-4 flex size-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-[0px_7px_11px_0px_rgba(202,207,216,0.70)] dark:shadow-[0px_7px_11px_0px_rgba(0,0,0,0.70)] md:bottom-[106px] md:size-16 xl:hidden">
      <Plus className="size-8" />
    </button>
  );
}
