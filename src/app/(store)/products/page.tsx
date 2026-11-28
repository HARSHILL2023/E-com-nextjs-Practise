import MainNav from "@/components/MainNav";

type ProductsPageProps = {
  searchParams: Promise<{
    search?: string;
    page?: string;
    sort?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <MainNav />
        <h1 className="text-4xl font-bold text-slate-950">Products</h1>
        <p className="mt-4 text-slate-600">
          Browse the Marketly product collection.
        </p>

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
          <p className="mb-3">
            <strong>Search:</strong> {params.search ?? "Not provided"}
          </p>
          <p className="mb-3">
            <strong>Page:</strong> {params.page ?? "Not provided"}
          </p>
          <p>
            <strong>Sort:</strong> {params.sort ?? "Not provided"}
          </p>
        </div>
      </div>
    </main>
  );
}
