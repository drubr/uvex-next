import { Product } from "@/interfaces";
import { useState } from "react";
import ProductImageBox from "@/components/ProductCard/ProductImageBox";
import ProductVariantSelection from "@/components/ProductCard/ProductVariantSelection";
import ProductTextBox from "@/components/ProductCard/ProductTextBox";

interface ProductProps {
  product: Product;
}
export default function ProductCard({ product }: ProductProps) {
  const productId = product.id.toString();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  return (
    <button
      disabled={!product.isAvailable}
      className="grid w-full gap-2 bg-white p-4 text-left disabled:opacity-40"
    >
      <ProductImageBox
        productId={productId}
        selectedVariant={selectedVariant}
      />

      <div className="grid gap-4">
        <ProductTextBox
          productId={productId}
          selectedVariant={selectedVariant}
        />

        <ProductVariantSelection
          productId={productId}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
          page="Category"
        />
      </div>
    </button>
  );
}
