import { notFound } from "next/navigation";
import Image from "next/image";
import AddToCart from "@/components/Cart";
import Size from "@/components/ProductVariant";
import { getProduct, getProducts } from "@/lib/products";

export const revalidate = 60;

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getProducts().slice(0, 3).map((product) => ({ id: product.id }));
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={900}
            height={900}
            unoptimized
            className="h-96 w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-blue-700">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-3 leading-relaxed text-gray-600">
            {product.description}
          </p>
          <p className="mt-5 text-3xl font-bold">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
          <p className="mt-3 text-sm font-medium text-green-700">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Rating: {product.rating} / 5
          </p>

          <div className="mt-7">
            <h2 className="mb-3 font-semibold">Choose a variant</h2>
            <Size variants={product.variants} />
          </div>

          <AddToCart
            productId={product.id}
            productName={product.name}
            price={product.price}
          />
          <p className="mt-4 text-sm text-gray-500">
            Free delivery on eligible orders.
          </p>
        </div>
      </div>
    </main>
  );
}
