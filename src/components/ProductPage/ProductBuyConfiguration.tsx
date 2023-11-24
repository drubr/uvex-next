"use client";

import Link from "next/link";
import ProductVariantSelection from "@/components/ProductCard/ProductVariantSelection";
import { Product, Variant } from "@/interfaces";
import { useRouter, useSearchParams } from "next/navigation";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

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

        {variant && variant.stock > 0 ? (
          <Link
            href={`/checkout?product=${product.id}`}
            className="mx-auto w-full animate-fadeUp p-4 text-center delay-700"
          >
            Direct Checkout
          </Link>
        ) : (
          <form className="mt-2 flex items-center gap-1">
            <input
              type="email"
              className="w-full rounded border p-4"
              placeholder="E-Mail, Remind me when in stock"
            />

            <button
              type="submit"
              aria-label="Confirm remind me when in stock"
              className="flex h-full items-center justify-center rounded border p-4"
            >
              <EnvelopeIcon className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </>
  );
}
