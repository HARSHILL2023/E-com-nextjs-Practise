
import ProductVariant from "@/components/ProductVariant";
import AddToCart from "@/components/Cart";

type Props = {
  searchParams: Promise<{
    search?: string;
    page?: string;
    sort?: string;
  }>;
};

const product = {
  id: "product-101",
  name: "Premium Smartphone",
  price: 24999,
  originalPrice: 29999,
  category: "Electronics",
  description:
    "Experience powerful performance, stunning display, and a sleek design with our premium smartphone.",
  variants: ["Small", "Medium", "Large", "XL"],
  stock: "In Stock",
};

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;

  const search = params.search || "";
  const page = params.page || "1";
  const sort = params.sort || "default";

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold">Products Page</h1>

        <div className="grid gap-10 rounded-xl bg-white p-8 shadow-sm md:grid-cols-2">
          <div className="flex min-h-80 items-center justify-center rounded-xl bg-gray-100">
            <h2 className="text-2xl font-semibold text-gray-400">
              Product Image
            </h2>
          </div>

          <div>
            <p className="text-sm text-blue-600">{product.category}</p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="mt-4 text-gray-600">
              {product.description}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-2xl font-bold">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              <span className="text-lg text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <p className="mt-3 text-sm font-medium text-green-600">
              {product.stock}
            </p>

            <ProductVariant variants={product.variants} />

            <AddToCart
              productId={product.id}
              productName={product.name}
              price={product.price}
            />
          </div>
        </div>

        <div className="mt-8 rounded-lg border bg-white p-5">
          <h2 className="mb-3 text-xl font-semibold">Search Parameters</h2>
          <p>Search: {search || "No search"}</p>
          <p>Page: {page}</p>
          <p>Sort: {sort}</p>
        </div>
      </div>
    </main>
  );
}
