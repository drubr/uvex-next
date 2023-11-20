import { usePathname } from "next/navigation";
import { useGetAllSearchParams } from "@/hooks/useGetAllSearchParams";
import { useGetProduct } from "@/hooks/useGetProduct";
import { useGetProductVariant } from "@/hooks/useGetProductVariant";
import { useGetSelectedProductVariant } from "@/hooks/useGetSelectedProductVariant";
import { useSetSearchParam } from "@/hooks/useSetSearchParam";

export const useUrlState = () => {
  const pathname = usePathname();
  const searchParams = useGetAllSearchParams();
  const productId =
    pathname.split("/")[pathname.split("/").indexOf("product") + 1];
  const { setURL } = useSetSearchParam();

  return {
    pathname: pathname,
    searchParams: searchParams,
    productId: productId,
    product: useGetProduct(productId),
    variant: useGetProductVariant(productId),
    selectedVariant: useGetSelectedProductVariant(),
    thumbnail: searchParams.find((param) => param.key === "thumbnail")?.value,
    tab: searchParams.find((param) => param.key === "tab")?.value,
    setUrl: setURL,
  };
};
