import AppBottomNav from "@/components/shared/AppBottomNav";
import AppSidebar from "@/components/shared/AppSidebar";
import AppHeader from "@/components/shared/AppHeader";
import { Plus } from "@/components/ui/Icons";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-screen">
      <AppSidebar />
      <div className="flex flex-1 flex-col">
        <AppHeader />
        <main className="flex-1">{children}</main>
      </div>
      <AppBottomNav />
      <CreateNoteButton />
    </div>
  );
}

function CreateNoteButton() {
  return (
    <button className="absolute bottom-[72px] right-4 flex size-12 items-center justify-center rounded-full bg-blue-500 text-white drop-shadow-md xl:hidden">
      <Plus className="size-8" />
    </button>
  );
}
