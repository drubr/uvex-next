import { usePathname } from "next/navigation";
import { useGetAllSearchParams } from "@/hooks/useGetAllSearchParams";
import { useSetSearchParam } from "@/hooks/useSetSearchParam";

/**
 * Use this hook if you want to read the state of a page based on the URL
 * */
export const useUrlState = () => {
  const pathname = usePathname();
  const searchParams = useGetAllSearchParams();
  const { setUrl } = useSetSearchParam();

  return {
    pathname: pathname,
    searchParams: searchParams,
    productId: pathname.split("/")[pathname.split("/").indexOf("product") + 1],
    product: searchParams.find((param) => param.key === "product")?.value,
    variant: searchParams.find((param) => param.key === "variant")?.value,
    thumbnail: searchParams.find((param) => param.key === "thumbnail")?.value,
    tab: searchParams.find((param) => param.key === "tab")?.value,
    setUrl: setUrl,
  };
};
