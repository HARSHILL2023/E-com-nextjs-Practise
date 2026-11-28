import AccessForm from "@/app/admin/AccessForm";
import { isAdmin } from "@/lib/admin-auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (await isAdmin()) {
    redirect("/admin/products");
  }

  return (
    <main className="mx-auto max-w-lg px-6 py-12">
      <h1 className="text-3xl font-bold">Admin access</h1>
      <p className="mt-2 text-gray-600">
        Enter the admin token configured by the site owner.
      </p>
      <AccessForm />
    </main>
  );
}
