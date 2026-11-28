"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createProductAction,
  type ProductActionState,
} from "@/app/admin/actions";
import {
  productSchema,
  type ProductFormValues,
} from "@/lib/product-schema";

type Field = {
  name: keyof ProductFormValues;
  label: string;
  type: "text" | "number" | "url" | "textarea";
  min?: string;
  step?: string;
};

const fields: Field[] = [
  { name: "name", label: "Product name", type: "text" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "price", label: "Price", type: "number", min: "0.01", step: "0.01" },
  { name: "category", label: "Category", type: "text" },
  { name: "stock", label: "Stock quantity", type: "number", min: "0", step: "1" },
  { name: "imageUrl", label: "Image URL", type: "url" },
];

const emptyValues: ProductFormValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  stock: "",
  imageUrl: "",
};

export default function AddProductForm() {
  const [result, setResult] = useState<ProductActionState>({ message: "" });
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: emptyValues,
  });

  function submitProduct(values: ProductFormValues) {
    const formData = new FormData();

    formData.set("name", values.name);
    formData.set("description", values.description);
    formData.set("price", values.price);
    formData.set("category", values.category);
    formData.set("stock", values.stock);
    formData.set("imageUrl", values.imageUrl);

    startTransition(async () => {
      const actionResult = await createProductAction(formData);
      setResult(actionResult);

      if (actionResult.success) {
        reset();
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit(submitProduct)}
      className="mt-8 space-y-5 rounded-lg border p-6"
      noValidate
    >
      {fields.map((field) => {
        const error =
          errors[field.name]?.message || result.fieldErrors?.[field.name];

        return (
          <div key={field.name}>
            <label htmlFor={field.name} className="mb-1 block font-medium">
              {field.label} *
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                required
                rows={4}
                aria-describedby={`${field.name}-error`}
                aria-invalid={Boolean(error)}
                className="w-full rounded border px-3 py-2"
                {...register(field.name)}
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                min={field.min}
                step={field.step}
                required
                aria-describedby={`${field.name}-error`}
                aria-invalid={Boolean(error)}
                className="w-full rounded border px-3 py-2"
                {...register(field.name)}
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

      {result.message && (
        <p
          role={result.success ? "status" : "alert"}
          className={result.success ? "text-green-700" : "text-red-700"}
        >
          {result.message}
          {result.success && result.productId && (
            <>
              {" "}
              <Link
                href={`/products/${result.productId}`}
                className="underline"
              >
                View product
              </Link>
            </>
          )}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-blue-600 px-5 py-3 font-semibold text-white disabled:opacity-60"
      >
        {isPending ? "Saving..." : "Create product"}
      </button>
    </form>
  );
}
