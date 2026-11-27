import MainNav from "@/components/MainNav";

export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <MainNav />
        <h1 className="text-4xl font-bold text-slate-950">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-slate-600">
          This demo storefront displays application routing concepts only.
        </p>
      </div>
    </main>
  );
}
