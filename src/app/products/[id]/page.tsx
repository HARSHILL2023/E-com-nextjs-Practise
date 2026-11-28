import AddToCart from "@/components/Cart";
import Size from "@/components/ProductVariant";

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
  category: "Electronics",
  description:
    "Experience powerful performance, stunning display, and a sleek design with our premium smartphone.",
  variants: ["Small", "Medium", "Large", "XL"],
};

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;

  const search = params.search || "No search";
  const page = params.page || "1";
  const sort = params.sort || "default";

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Our Products
        </h1>
        <p className="text-gray-500 mt-2">
          Explore our latest collection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
          <span className="text-7xl">📱</span>
        </div>

        <div>
          <p className="text-sm text-blue-600 font-semibold mb-2">
            {product.category}
          </p>

          <h2 className="text-3xl font-bold text-gray-900">
            {product.name}
          </h2>

          <p className="text-gray-500 mt-3 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-5">
            <span className="text-3xl font-bold text-gray-900">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
          </div>

          <p className="text-green-600 text-sm font-medium mt-3">
            In Stock
          </p>

          <div className="mt-7">
            <h3 className="font-semibold text-gray-900 mb-3">
              Select Size
            </h3>
            <Size variants={product.variants} />
          </div>

          <AddToCart
            productId={product.id}
            productName={product.name}
            price={product.price}
          />

          <p className="text-sm text-gray-400 mt-4">
            Free delivery on eligible orders.
          </p>
        </div>
      </div>

      <div className="mt-12 p-5 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-3">Search Parameters</h3>
        <p>Search: {search}</p>
        <p>Page: {page}</p>
        <p>Sort: {sort}</p>
      </div>
    </main>
  );
}
