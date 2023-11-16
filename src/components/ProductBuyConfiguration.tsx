import Link from "next/link";
import { useGetProduct } from "@/hooks/useGetProduct";
import { useGetProductVariant } from "@/hooks/useGetProductVariant";
import { useGetSelectedProductVariant } from "@/hooks/useGetSelectedProductVariant";

export default function ProductBuyConfiguration({
  productId,
}: {
  productId: string;
}) {
  const product = useGetProduct(productId);
  const variant = useGetProductVariant(productId);
  const selectedVariant = useGetSelectedProductVariant();

  if (!product) return <div>No product found. :)</div>;

  if (!variant) return <div>No variant found. :)</div>;

  if (!selectedVariant) return <div>Please select a variant. :)</div>;

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
                  href={`/product/${product.id}?variant=${variant.option}`}
                  className={`flex items-center justify-center border p-2 ${
                    selectedVariant === variant.option
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                  scroll={false}
                >
                  {variant.option}
                </Link>
              ) : (
                <button
                  className="flex items-center justify-center border p-2"
                  disabled
                >
                  <div className="opacity-30">{variant.option}</div>
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
