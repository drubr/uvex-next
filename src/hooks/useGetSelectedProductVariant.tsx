import { useSearchParams } from "next/navigation";

export function useGetSelectedProductVariant(): string | undefined {
  const searchParams = useSearchParams();
  const selectedVariant = searchParams.get("variant");

  return selectedVariant ? selectedVariant : undefined;
}
