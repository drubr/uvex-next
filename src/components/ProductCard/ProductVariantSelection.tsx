import Link from "next/link";
import Image from "next/image";
import { useGetProduct } from "@/hooks/useGetProduct";
import { Dispatch, SetStateAction, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Variant } from "@/interfaces";
import { formatVariantTitle } from "@/helpers";

export default function ProductVariantSelection({
  productId,
  selectedVariant,
  setSelectedVariant,
  page,
}: {
  productId: string;
  selectedVariant?: Variant;
  setSelectedVariant?: Dispatch<SetStateAction<Variant>>;
  page: "Category" | "Product";
}) {
  const product = useGetProduct(productId);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /** OR
   * const { useUpdateSearchParams } = useUpdateSearchParams();
   * const { useCleanSearchParams } = useCleanSearchParams();
   * */

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete("product");
      params.delete("variant");

      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const setProductUrl = useCallback(
    (productTitle: string, variantTitle: string) => {
      return (
        pathname +
        "?" +
        createQueryString("product", `${formatVariantTitle(productTitle)}`) +
        "?" +
        createQueryString("variant", `${formatVariantTitle(variantTitle)}`)
      );
    },
    [createQueryString, pathname],
  );

  if (!product || !product.variants) return null;

  const productHref = (variant: Variant) => {
    return page === "Category"
      ? setProductUrl(product.title, variant.title)
      : `/product/${product.id}?variant=${formatVariantTitle(variant.title)}`;
  };

  return (
    product.variants.length > 0 && (
      <ul className="flex min-h-[3.875rem] items-center gap-2">
        {product.variants.map((variant, index) => (
          <li
            key={product.id + index}
            onClick={() => {
              setSelectedVariant ? setSelectedVariant(variant) : null;
            }}
          >
            <Link
              href={productHref(variant)}
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
