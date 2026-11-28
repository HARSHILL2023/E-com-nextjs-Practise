import Link from "next/link";
import MainNav from "@/components/MainNav";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <MainNav />
        <h1 className="text-4xl font-bold text-slate-950">Categories</h1>
        <p className="mt-4 text-slate-600">Explore product categories.</p>
        <Link
          href="/categories/electronics"
          className="mt-6 inline-block font-semibold text-sky-700"
        >
          Electronics
        </Link>
      </div>
    </main>
  );
}
