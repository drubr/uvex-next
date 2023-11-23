"use client";

import { Product } from "@/interfaces";
import { useState } from "react";
import ProductImageBox from "@/components/ProductCard/ProductImageBox";
import ProductVariantSelection from "@/components/ProductCard/ProductVariantSelection";
import ProductTextBox from "@/components/ProductCard/ProductTextBox";

interface ProductProps {
  product: Product;
  priority: boolean;
}
export default function ProductCard({ product, priority }: ProductProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  /** @Todo: Add slight appear effect with CSS or framer-motion (check compatibility) */

  return (
    <button
      disabled={!product.isAvailable}
      className="grid w-full gap-2 bg-white p-4 text-left disabled:opacity-40"
    >
      <ProductImageBox
        product={product}
        selectedVariant={selectedVariant}
        priority={priority}
      />

      <div className="grid gap-4">
        <ProductTextBox product={product} selectedVariant={selectedVariant} />

        <ProductVariantSelection
          product={product}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
        />
      </div>
    </button>
  );
}
