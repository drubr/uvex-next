import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useGetAllSearchParams } from "@/hooks/useGetAllSearchParams";

export const useSetSearchParam = (withParamsCleanUp?: boolean) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);

      if (withParamsCleanUp) {
        for (const [key] of searchParams.entries()) {
          params.delete(key);
        }
      }

      params.set(name, value);

      return params.toString();
    },
    [searchParams, withParamsCleanUp],
  );

  const setURL = useCallback(
    (name: string, value: string | number) => {
      return pathname + "?" + createQueryString(name, `${value.toString()}`);
    },
    [createQueryString, pathname],
  );

  return {
    setURL,
    params: useGetAllSearchParams(),
  };
};
