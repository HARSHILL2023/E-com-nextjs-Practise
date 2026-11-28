import { redirect } from "next/navigation";

export default function DashboardPage() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    redirect("/login");
  }

  return <main>Dashboard</main>;
}
