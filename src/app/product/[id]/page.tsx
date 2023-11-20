"use client";

import { useRouter } from "next/navigation";
import ProductTabs from "@/components/ProductDetailPage/ProductTabs";
import ProductImageGallery from "@/components/ProductDetailPage/ProductImageGallery";
import ProductBuyConfiguration from "@/components/ProductDetailPage/ProductBuyConfiguration";
import { useUrlState } from "@/hooks/useUrlState";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { product } = useUrlState();

  if (!product || !product.isAvailable) router.replace("/category");

  /**
   * Product Detail Domain possibilities
   * http://localhost:3000/product/2?variant=arctic-blue-matt
   * http://localhost:3000/product/2?variant=arctic-blue-matt&thumbnail=3&tab=details
   * http://localhost:3000/product/2/arctic-blue-matt
   * */

  return (
    <div className="mt-4">
      <section className="mx-auto grid w-full max-w-screen-xl items-start gap-8 p-8 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-8">
          <ProductImageGallery />
          <ProductTabs />
        </div>

        <div className="sticky top-4 grid gap-2">
          <ProductBuyConfiguration productId={params.id} />
        </div>
      </section>
    </div>
  );
}
