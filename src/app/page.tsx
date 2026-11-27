import Image from "next/image";
import MainNav from "@/components/MainNav";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="mx-auto max-w-3xl text-center">
        <MainNav />
        <Image
          src="/images/logo.svg"
          alt="Marketly logo"
          width={120}
          height={120}
          className="mx-auto mb-6"
          priority
        />

        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-700">
          Welcome to
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
          Marketly
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Discover thoughtfully selected everyday essentials in a simple,
          welcoming storefront.
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Featured Products
          </h2>
          <p className="mt-3 text-slate-600">
            Our curated collection is coming soon.
          </p>
        </div>
      </section>
    </main>
  );
}