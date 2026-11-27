"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="mt-6 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white"
    >
      Back to Previous Page
    </button>
  );
}
