"use client";

import { useRouter } from "next/navigation";
import ProductTabs from "@/components/ProductDetailPage/ProductTabs";
import ProductImageGallery from "@/components/ProductDetailPage/ProductImageGallery";
import ProductBuyConfiguration from "@/components/ProductDetailPage/ProductBuyConfiguration";
import { useGetProduct } from "@/hooks/useGetProduct";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const product = useGetProduct(params.id);

  if (!product || !product.isAvailable) router.replace("/category");

  /** https://xevu-next.vercel.app/product/2?variant=white-matt-–-pink&thumbnail=3&tab=details */

  return (
    <div className="mt-4">
      <section className="mx-auto grid w-full max-w-screen-xl items-start gap-8 p-8 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-8">
          <ProductImageGallery productId={params.id} />
          <ProductTabs productId={params.id} />
        </div>

        <div className="sticky top-4 grid gap-2">
          <ProductBuyConfiguration productId={params.id} />
        </div>
      </section>
    </div>
  );
}
