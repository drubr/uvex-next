"use client";

import Link from "next/link";
import ProductVariantSelection from "@/components/ProductCard/ProductVariantSelection";
import { Product, Variant } from "@/interfaces";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductBuyConfiguration({
  product,
  variant,
}: {
  product: Product | undefined;
  variant: Variant | undefined;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (!product) return <div>No product found. :)</div>;

  const onAddToCart = (productId: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    for (const [key] of searchParams.entries()) {
      current.delete(key);
    }

    current.set("product", productId);

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`/checkout${query}`, { scroll: false });
  };

  return (
    <>
      <header>
        <h1 className="text-2xl">{product.title}</h1>
        <small>Product {product.id}</small>
        <div className="mt-4">{variant?.price}</div>
      </header>

      {product.variants.length > 0 && (
        <ProductVariantSelection product={product} selectedVariant={variant} />
      )}

      <div className="mt-8 grid w-full max-w-md">
        <button
          className="bg-black p-4 text-white disabled:bg-black/30"
          disabled={variant?.stock === 0 || !variant}
          onClick={() => onAddToCart(product.id.toString())}
        >
          {variant ? "Add to cart" : "Please select a variant"}
        </button>

        {variant && (
          <Link
            href={`/checkout?product=${product.id}`}
            className="mx-auto w-full animate-fadeUp p-4 text-center delay-700"
          >
            Direct Checkout
          </Link>
        )}
      </div>
    </>
  );
}
