import Link from "next/link";
import { useGetProduct } from "@/hooks/useGetProduct";
import { useGetProductVariant } from "@/hooks/useGetProductVariant";
import ProductVariantSelection from "@/components/ProductCard/ProductVariantSelection";

export default function ProductBuyConfiguration({
  productId,
}: {
  productId: string;
}) {
  const product = useGetProduct(productId);
  const variant = useGetProductVariant(productId);

  if (!product) return <div>No product found. :)</div>;

  return (
    <>
      <header>
        <h1 className="text-2xl">{product.title}</h1>
        <small>Product {product.id}</small>
        <div className="mt-4">{variant?.price}</div>
      </header>

      {product.variants.length > 0 && (
        <ProductVariantSelection
          productId={productId}
          selectedVariant={variant}
          page="Product"
        />
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
