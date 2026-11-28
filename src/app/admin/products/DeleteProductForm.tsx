"use client";

import { useState, useTransition } from "react";
import { deleteProductAction } from "@/app/admin/actions";

type Props = {
  productId: string;
  productName: string;
};

export default function DeleteProductForm({ productId, productName }: Props) {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (!window.confirm(`Delete "${productName}"?`)) {
          return;
        }

        const formData = new FormData(event.currentTarget);

        startTransition(async () => {
          const result = await deleteProductAction(productId, formData);
          setMessage(result.message);
        });
      }}
    >
      <input type="hidden" name="productId" value={productId} />
      <button
        type="submit"
        disabled={isPending}
        className="font-medium text-red-700 underline disabled:opacity-60"
      >
        {isPending ? "Deleting..." : "Delete"}
      </button>
      {message && (
        <p role="alert" className="mt-2 text-sm text-red-700">
          {message}
        </p>
      )}
    </form>
  );
}
