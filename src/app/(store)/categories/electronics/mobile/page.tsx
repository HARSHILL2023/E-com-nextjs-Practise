import MainNav from "@/components/MainNav";

export default function MobileCategoryPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <MainNav />
        <h1 className="text-4xl font-bold text-slate-950">Mobile Devices</h1>
        <p className="mt-4 text-slate-600">
          Phones and mobile accessories.
        </p>
      </div>
    </main>
  );
}
