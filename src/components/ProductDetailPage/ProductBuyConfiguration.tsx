import Link from "next/link";
import ProductVariantSelection from "@/components/ProductCard/ProductVariantSelection";
import { Product, Variant } from "@/interfaces";

export default function ProductBuyConfiguration({
  product,
  variant,
}: {
  product?: Product;
  variant?: Variant;
}) {
  if (!product) return <div>No product found. :)</div>;

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
        >
          {variant ? "Add to cart" : "Please select a variant"}
        </button>

        {variant && (
          <Link
            href="/checkout"
            className="mx-auto w-full animate-fadeUp p-4 text-center delay-700"
          >
            Direct Checkout
          </Link>
        )}
      </div>
    </>
  );
}
