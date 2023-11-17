import { Product } from "@/interfaces";
import { useState } from "react";
import ImageBox from "@/components/ProductCard/ImageBox";
import VariantSelection from "@/components/ProductCard/VariantSelection";
import TextBox from "@/components/ProductCard/TextBox";

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
      <ImageBox productId={productId} selectedVariant={selectedVariant} />

      <div className="grid gap-4">
        <TextBox productId={productId} selectedVariant={selectedVariant} />

        <VariantSelection
          productId={productId}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
          page="Category"
        />
      </div>
    </button>
  );
}
