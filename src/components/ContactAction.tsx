"use client";

import { useRouter } from "next/navigation";

export default function ContactAction() {
  const router = useRouter();

  function handleSubmit() {
    router.push("/");
  }

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="mt-6 rounded-lg bg-sky-700 px-4 py-2 font-semibold text-white"
    >
      Submit and Return Home
    </button>
  );
}
