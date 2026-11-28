import Navbar from "@/components/navbar";


export default function Home() {
  return (
    
    <main className="min-h-screen bg-white text-black">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to ShopSphere
        </h1>

        <p className="mt-4 text-gray-600">
          Discover amazing products at great prices.
        </p>

        <button className="mt-6 rounded-lg bg-black px-6 py-3 text-white">
          Explore Products
        </button>
      </section>

      <section className="px-8 py-12 text-center">
        <h2 className="text-2xl font-bold">
          Featured Products
        </h2>

        <p className="mt-3 text-gray-600">
          Explore our collection of quality products.
        </p>
      </section>
    </main>
  );
}
