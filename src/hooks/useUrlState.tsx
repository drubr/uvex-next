import { usePathname } from "next/navigation";
import { useGetAllSearchParams } from "@/hooks/useGetAllSearchParams";
import { useSetSearchParam } from "@/hooks/useSetSearchParam";
import { products } from "@/data";
import { formatProductTitle } from "@/helpers";

/**
 * Use this hook if you want to read the state of a page based on the URL
 * */
export const useUrlState = () => {
  const pathname = usePathname();
  const searchParams = useGetAllSearchParams();
  const urlProductId =
    pathname.split("/")[pathname.split("/").indexOf("product") + 1];
  const { setURL } = useSetSearchParam();

  return {
    pathname: pathname,
    searchParams: searchParams,
    productId: urlProductId,
    product: products[+urlProductId - 1]
      ? products[+urlProductId - 1]
      : undefined,
    variant: products[+urlProductId - 1]?.variants.find(
      (variant) =>
        formatProductTitle(variant.title) ===
        formatProductTitle(
          searchParams.find((param) => param.key === "variant")?.value ?? "",
        ),
    ),
    thumbnail: searchParams.find((param) => param.key === "thumbnail")?.value,
    tab: searchParams.find((param) => param.key === "tab")?.value,
    getProductById: (productId: string) => products[+productId - 1],
    setUrl: setURL,
  };
};
