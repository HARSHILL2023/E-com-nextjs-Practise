import MainNav from "@/components/MainNav";

type CatchAllPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function ShopCatchAllPage({params,}: CatchAllPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <MainNav />
        <h1 className="text-4xl font-bold text-slate-950">Shop Categories</h1>
        <p className="mt-4 text-slate-600">
          Matching path segments:
        </p>
        <p className="mt-2 font-semibold text-sky-700">{slug.join(" / ")}</p>
      </div>
    </main>
  );
}
