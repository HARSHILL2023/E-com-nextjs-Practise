
"use client";

import { useState } from "react";

type Props = {
  productId: string;
  productName: string;
  price: number;
};

export default function AddToCart({
  productId,
  productName,
  price,
}: Props) {
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    setAdded(true);
  }

  return (
    <div className="mt-5">
      <button
        onClick={handleAddToCart}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        {added ? "Added to Cart ✓" : "Add to Cart"}
      </button>

      {added && (
        <p className="mt-3 rounded-lg bg-green-50 p-3 text-sm text-green-700">
          {productName} added successfully!
        </p>
      )}
    </div>
  );
}
