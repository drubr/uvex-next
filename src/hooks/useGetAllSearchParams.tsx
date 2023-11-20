import { useSearchParams } from "next/navigation";

export const useGetAllSearchParams = () => {
  const searchParams = useSearchParams();

  const params: { key: string; value: string }[] = [];

  for (const [key, value] of searchParams.entries()) {
    params.push({ key: key, value: value });
  }

  return params;
};
