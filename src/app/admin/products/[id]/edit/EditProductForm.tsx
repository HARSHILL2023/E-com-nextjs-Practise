"use client";

import { useActionState } from "react";
import {
  updateProductAction,
  type ProductActionState,
} from "@/app/admin/actions";
import type { ProductFormValues } from "@/lib/product-schema";
import type { Product } from "@/lib/products";

type Props = {
  product: Product;
};

type Field = {
  name: keyof ProductFormValues;
  label: string;
  value: string | number;
  type: "text" | "number" | "url" | "textarea";
  min?: string;
  step?: string;
};

const emptyState: ProductActionState = { message: "" };

export default function EditProductForm({ product }: Props) {
  const [state, formAction, isPending] = useActionState(
    updateProductAction.bind(null, product.id),
    emptyState,
  );

  const fields: Field[] = [
    { name: "name", label: "Product name", value: product.name, type: "text" },
    {
      name: "description",
      label: "Description",
      value: product.description,
      type: "textarea",
    },
    {
      name: "price",
      label: "Price",
      value: product.price,
      type: "number",
      min: "0.01",
      step: "0.01",
    },
    {
      name: "category",
      label: "Category",
      value: product.category,
      type: "text",
    },
    {
      name: "stock",
      label: "Stock quantity",
      value: product.stock,
      type: "number",
      min: "0",
      step: "1",
    },
    {
      name: "imageUrl",
      label: "Image URL",
      value: product.imageUrl,
      type: "url",
    },
  ];

  return (
    <form action={formAction} className="mt-8 space-y-5 rounded-lg border p-6">
      {fields.map((field) => {
        const error = state.fieldErrors?.[field.name];

        return (
          <div key={field.name}>
            <label htmlFor={field.name} className="mb-1 block font-medium">
              {field.label} *
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                defaultValue={field.value}
                required
                minLength={5}
                rows={4}
                aria-describedby={`${field.name}-error`}
                aria-invalid={Boolean(error)}
                className="w-full rounded border px-3 py-2"
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                defaultValue={field.value}
                min={field.min}
                step={field.step}
                required
                aria-describedby={`${field.name}-error`}
                aria-invalid={Boolean(error)}
                className="w-full rounded border px-3 py-2"
              />
            )}
            {error && (
              <p
                id={`${field.name}-error`}
                role="alert"
                className="mt-1 text-sm text-red-700"
              >
                {error}
              </p>
            )}
          </div>
        );
      })}

      {state.message && (
        <p
          role={state.success ? "status" : "alert"}
          className={state.success ? "text-green-700" : "text-red-700"}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-blue-600 px-5 py-3 font-semibold text-white disabled:opacity-60"
      >
        {isPending ? "Saving..." : "Save changes"}
      </button>
    </form>
  );
}
