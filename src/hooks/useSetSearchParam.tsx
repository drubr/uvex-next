import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const useSetSearchParam = (withParamsCleanUp?: boolean) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string, method: "replace" | "append" = "replace") => {
      const params = new URLSearchParams(searchParams);

      if (withParamsCleanUp) {
        for (const [key] of searchParams.entries()) {
          params.delete(key);
        }
      }

      if (method === "replace") {
        params.set(name, value);
      }

      if (method === "append") {
        if (params.getAll("filter").includes(value)) {
          params.delete(name, value);
          return params.toString();
        }

        params.append(name, value);
      }

      return params.toString();
    },
    [searchParams, withParamsCleanUp],
  );

  const setUrl = useCallback(
    (
      name: string,
      value: string | number,
      method: "replace" | "append" = "replace",
    ) => {
      return (
        pathname + "?" + createQueryString(name, `${value.toString()}`, method)
      );
    },
    [createQueryString, pathname],
  );

  return { setUrl };
};
