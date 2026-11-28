import BackButton from "@/components/BackButton";
import MainNav from "@/components/MainNav";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <MainNav />
        <h1 className="text-4xl font-bold text-slate-950">Product Details</h1>
        <p className="mt-4 text-xl text-slate-600">
          Product ID: <strong className="text-slate-950">{id}</strong>
        </p>
        <BackButton />
      </div>
    </main>
  );
}
