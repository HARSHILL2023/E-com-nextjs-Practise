import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/products";

export const revalidate = 60;

export default function ProductsPage() {
  const products = getProducts();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <p className="mt-2 text-gray-600">Browse our product collection.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="overflow-hidden rounded-lg border transition hover:shadow-md"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={900}
              height={600}
              unoptimized
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-blue-700">{product.category}</p>
              <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>
              <p className="mt-2 font-bold">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              <p className="mt-1 text-sm text-gray-600">
                {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {products.length === 0 && (
        <p className="rounded-lg border p-5 text-gray-600">
          There are no products available right now.
        </p>
      )}
    </main>
  );
}