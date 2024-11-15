import { redirect } from "next/navigation";
import { getCurrentSession } from "./_lib/server/session";

export default async function HomePage() {
  const { session, user } = await getCurrentSession();

  if (session === null || user === null) {
    return redirect("/login");
  }

  redirect("/notes");
}
