import { Variant } from "@/interfaces";
import { useSearchParams } from "next/navigation";
import { products } from "@/data";
import { formatVariantTitle } from "@/helpers";

export function useGetProductVariant(productId: string): Variant | undefined {
  const searchParams = useSearchParams();
  const product = products[+productId - 1];
  const selectedVariant = searchParams.get("variant");

  if (!product) return undefined;

  const variant = product.variants.find(
    (variant) => formatVariantTitle(variant.title) === selectedVariant,
  );

  return variant ? variant : undefined;
}
