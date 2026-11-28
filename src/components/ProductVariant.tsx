"use client";

import { useState } from "react";

type Props = {
  variants: string[];
};

export default function Size({ variants }: Props) {
  const [select, setSelect] = useState("Medium");

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-gray-700">
          Choose your size
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {variants.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => setSelect(size)}
            className={`min-w-14 px-5 py-3 rounded-lg border text-sm font-semibold transition-all duration-200
              ${
                select === size
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:bg-blue-50"
              }`}
          >
            {size}
          </button>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-3">
        Select your preferred size before adding to cart of size
      </p>
    </div>
  );
}
