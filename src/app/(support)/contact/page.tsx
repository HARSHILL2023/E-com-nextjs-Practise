import ContactAction from "@/components/ContactAction";
import MainNav from "@/components/MainNav";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <MainNav />
        <h1 className="text-4xl font-bold text-slate-950">Contact</h1>
        <p className="mt-4 text-slate-600">
          Questions are welcome at support@marketly.example.
        </p>
        <ContactAction />
      </div>
    </main>
  );
}
