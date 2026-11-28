"use client";

import { useActionState } from "react";
import { startAdminSession, type AccessActionState } from "@/app/admin/actions";

const initialState: AccessActionState = { message: "" };

export default function AccessForm() {
  const [state, formAction, isPending] = useActionState(
    startAdminSession,
    initialState,
  );

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <div>
        <label htmlFor="token" className="mb-1 block font-medium">
          Admin token
        </label>
        <input
          id="token"
          name="token"
          type="password"
          autoComplete="current-password"
          required
          className="w-full rounded border px-3 py-2"
        />
      </div>
      {state.message && (
        <p role="alert" className="text-sm text-red-700">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-blue-600 px-4 py-2 font-semibold text-white disabled:opacity-60"
      >
        {isPending ? "Checking..." : "Continue"}
      </button>
    </form>
  );
}
