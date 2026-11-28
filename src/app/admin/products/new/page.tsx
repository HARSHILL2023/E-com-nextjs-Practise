import { redirect } from "next/navigation";
import AddProductForm from "@/app/admin/products/new/AddProductForm";
import { isAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function NewProductPage() {
  if (!(await isAdmin())) {
    redirect("/admin");
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="text-3xl font-bold">Add a product</h1>
      <p className="mt-2 text-gray-600">
        Enter the product details below.
      </p>
      <AddProductForm />
    </main>
  );
}
