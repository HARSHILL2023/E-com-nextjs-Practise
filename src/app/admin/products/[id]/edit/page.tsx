import { notFound, redirect } from "next/navigation";
import EditProductForm from "@/app/admin/products/[id]/edit/EditProductForm";
import { isAdmin } from "@/lib/admin-auth";
import { getProduct } from "@/lib/products";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditProductPage({ params }: Props) {
  if (!(await isAdmin())) {
    redirect("/admin");
  }

  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="text-3xl font-bold">Edit product</h1>
      <p className="mt-2 text-gray-600">Update {product.name}.</p>
      <EditProductForm product={product} />
    </main>
  );
}
