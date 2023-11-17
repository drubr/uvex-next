import Link from "next/link";
import Image from "next/image";
import { useGetProduct } from "@/hooks/useGetProduct";
import { Dispatch, SetStateAction, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Variant } from "@/interfaces";

export default function VariantSelection({
  productId,
  selectedVariant,
  setSelectedVariant,
}: {
  productId: string;
  selectedVariant: Variant;
  setSelectedVariant: Dispatch<SetStateAction<Variant>>;
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

  if (!product || !product.variants) return null;

  return (
    product.variants.length > 0 && (
      <ul className="flex min-h-[3.875rem] items-center gap-2">
        {product.variants.map((variant, index) => (
          <li
            key={product.id + index}
            onClick={() => setSelectedVariant(variant)}
          >
            <Link
              href={
                pathname +
                "?" +
                createQueryString(
                  "product",
                  `${product.title.replaceAll(" ", "")}`,
                ) +
                "?" +
                createQueryString(
                  "variant",
                  `${variant.option.replaceAll(" ", "")}`,
                )
              }
              className={`flex items-center justify-center border p-2 ${
                variant.option === selectedVariant.option
                  ? "border-black"
                  : "border-gray-200"
              }`}
              scroll={false}
            >
              {variant.images
                ? variant.images && (
                    <Image
                      key={index}
                      src={variant.images[0]}
                      width={44}
                      height={44}
                      alt={`${variant.images[0]} preview`}
                    />
                  )
                : variant.option}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}
