import Link from "next/link";
import Image from "next/image";
import { useGetProduct } from "@/hooks/useGetProduct";
import { Dispatch, SetStateAction } from "react";
import { Variant } from "@/interfaces";
import { formatProductTitle } from "@/helpers";
import { useUrlState } from "@/hooks/useUrlState";

export default function ProductVariantSelection({
  productId,
  selectedVariant,
  setSelectedVariant,
}: {
  productId: string;
  selectedVariant?: Variant;
  setSelectedVariant?: Dispatch<SetStateAction<Variant>>;
}) {
  const { setUrl } = useUrlState();
  const product = useGetProduct(productId);

  /** OR
   * const { useUpdateSearchParams } = useUpdateSearchParams();
   * const { useCleanSearchParams } = useCleanSearchParams();
   * */

  if (!product || !product.variants) return null;

  return (
    product.variants.length > 0 && (
      <ul className="flex min-h-[3.875rem] items-center gap-2">
        {product.variants.map((variant, index) => (
          <li
            key={product.id + index}
            className="relative"
            onClick={() => {
              setSelectedVariant ? setSelectedVariant(variant) : null;
            }}
          >
            {variant.stock <= 0 && (
              <button
                className="absolute inset-0 cursor-not-allowed bg-white/70"
                disabled
              ></button>
            )}

            <Link
              href={setUrl("variant", formatProductTitle(variant.title))}
              className={`flex items-center justify-center border p-2 ${
                variant.title === selectedVariant?.title
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
                  alt={`${variant.images[0]} preview`}
                  draggable={false}
                />
              ) : (
                variant.title
              )}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}
