import { getCurrentSession } from "@/app/_lib/server/session";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const { session, user } = await getCurrentSession();

  if (session === null || user === null) {
    return redirect("/login");
  }

  return <></>;
}
