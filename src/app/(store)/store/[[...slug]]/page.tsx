import MainNav from "@/components/MainNav";

type OptionalCatchAllPageProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function StoreOptionalCatchAllPage({
  params,
}: OptionalCatchAllPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <MainNav />
        <h1 className="text-4xl font-bold text-slate-950">Store Section</h1>
        {slug?.length ? (
          <p className="mt-4 text-slate-600">
            Additional segments: <strong>{slug.join(" / ")}</strong>
          </p>
        ) : (
          <p className="mt-4 text-slate-600">
            No additional path segments were provided.
          </p>
        )}
      </div>
    </main>
  );
}
