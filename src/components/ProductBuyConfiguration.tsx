import Link from "next/link";
import { useGetProduct } from "@/hooks/useGetProduct";
import { useGetProductVariant } from "@/hooks/useGetProductVariant";
import { useGetSelectedProductVariant } from "@/hooks/useGetSelectedProductVariant";
import Image from "next/image";
import { formatVariantTitle } from "@/helpers";

export default function ProductBuyConfiguration({
  productId,
}: {
  productId: string;
}) {
  const product = useGetProduct(productId);
  const variant = useGetProductVariant(productId);
  const selectedVariant = useGetSelectedProductVariant();

  if (!product) return <div>No product found. :)</div>;

  return (
    <>
      <header>
        <h1 className="text-2xl">{product.title}</h1>
        <small>Product {product.id}</small>
        <div className="mt-4">{variant?.price}</div>
      </header>

      {product.variants.length > 0 && (
        <ul className="flex gap-2">
          {product.variants.map((variant, index) => (
            <li key={product.id + index}>
              {variant.stock > 0 ? (
                <Link
                  href={`/product/${product.id}?variant=${formatVariantTitle(
                    variant.title,
                  )}`}
                  className={`flex items-center justify-center border p-2 ${
                    selectedVariant === formatVariantTitle(variant.title)
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                  scroll={false}
                >
                  {variant.images ? (
                    <Image
                      key={index}
                      src={variant.images[0]}
                      width={44}
                      height={44}
                      alt={`${variant.images[0]} thumbnail`}
                    />
                  ) : (
                    variant.title
                  )}
                </Link>
              ) : (
                <button
                  className="flex items-center justify-center border p-2"
                  disabled
                >
                  <div className="opacity-30">{variant.title}</div>
                </button>
              )}
            </li>
          ))}
        </ul>
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
