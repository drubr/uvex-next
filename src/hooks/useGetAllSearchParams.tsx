import { useSearchParams } from "next/navigation";

export const useGetAllSearchParams = () => {
  const searchParams = useSearchParams();

  return searchParams;
};
