import Link from "next/link";
import MainNav from "@/components/MainNav";

export default function ElectronicsPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <MainNav />
        <h1 className="text-4xl font-bold text-slate-950">Electronics</h1>
        <Link
          href="/categories/electronics/mobile"
          className="mt-6 inline-block font-semibold text-sky-700"
        >
          Mobile Devices
        </Link>
      </div>
    </main>
  );
}
