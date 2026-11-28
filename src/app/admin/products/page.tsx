import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteProductForm from "@/app/admin/products/DeleteProductForm";
import { isAdmin } from "@/lib/admin-auth";
import { getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{ deleted?: string }>;
};

export default async function AdminProductsPage({ searchParams }: Props) {
  if (!(await isAdmin())) {
    redirect("/admin");
  }

  const { deleted } = await searchParams;
  const products = getProducts();

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Manage products</h1>
          <p className="mt-2 text-gray-600">Add, edit, or remove products.</p>
        </div>
        <Link
          href="/admin/products/new"
          className="rounded bg-blue-600 px-4 py-2 font-semibold text-white"
        >
          Add product
        </Link>
      </div>

      {deleted === "1" && (
        <p role="status" className="mb-5 text-green-700">
          Product deleted successfully.
        </p>
      )}

      <div className="space-y-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex flex-wrap items-center justify-between gap-4 rounded-lg border p-4"
          >
            <div>
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">
                {product.category} · ₹{product.price.toLocaleString("en-IN")} ·
                {" "}{product.stock} in stock
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={`/admin/products/${product.id}/edit`}
                className="font-medium text-blue-700 underline"
              >
                Edit
              </Link>
              <DeleteProductForm productId={product.id} productName={product.name} />
            </div>
          </article>
        ))}
        {products.length === 0 && (
          <p className="rounded-lg border p-5 text-gray-600">
            There are no products yet.
          </p>
        )}
      </div>
    </main>
  );
}
