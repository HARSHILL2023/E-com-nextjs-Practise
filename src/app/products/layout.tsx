
import Link from "next/link";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-6 ">
      <h1 className="text-3xl font-bold text-blue-600">
        Our Products
      </h1>

      <p className="text-gray-500 mt-2">
        Explore our latest collection.
      </p>

      <div className="flex gap-8 mt-6">

        <aside className="w-1/4 bg-gray-100 p-5 rounded-lg space-y-5 text-black">

          <div>
            <h2 className="font-bold mb-3">Categories</h2>
            <div className="flex flex-col gap-2">
              <Link href="/products/electronics">Electronics</Link>
              <Link href="/products/clothing">Clothing</Link>
              <Link href="/products/accessories">Accessories</Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-3">Brands</h2>
            <div className="flex flex-col gap-2">
              <Link href="/products/apple">Apple</Link>
              <Link href="/products/samsung">Samsung</Link>
              <Link href="/products/sony">Sony</Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold mb-3">Price</h2>
            <p>Under ₹1,000</p>
            <p>₹1,000 - ₹5,000</p>
            <p>Above ₹5,000</p>
          </div>

        </aside>

        <main className="flex-1">
          {children}
        </main>

      </div>
    </section>
  );
}
