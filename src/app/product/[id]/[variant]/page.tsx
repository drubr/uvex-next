"use client";

import ProductImageGallery from "@/components/ProductDetailPage/ProductImageGallery";
import ProductTabs from "@/components/ProductDetailPage/ProductTabs";
import ProductBuyConfiguration from "@/components/ProductDetailPage/ProductBuyConfiguration";
import { products } from "@/data";
import { formatProductTitle } from "@/helpers";

export default function Page({ params }: { params: { variant: string } }) {
  const variant = products.find((product) =>
    product.variants.find(
      (variant) =>
        formatProductTitle(variant.title) ===
        formatProductTitle(params.variant),
    ),
  );

  if (!variant) return <div>No product found :)</div>;

  const variantId = variant.id.toString();

  return (
    <div className="mt-4">
      <section className="mx-auto grid w-full max-w-screen-xl items-start gap-8 p-8 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-8">
          <ProductImageGallery />
          <ProductTabs />
        </div>

        <div className="sticky top-4 grid gap-2">
          <ProductBuyConfiguration productId={variantId} />
        </div>
      </section>
    </div>
  );
}
