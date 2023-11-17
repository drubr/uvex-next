import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { products } from "@/data";

export const useProductList = () => {
  const searchParams = useSearchParams();
  const [productList, setProductList] = useState(products);
  const filter = searchParams.get("filter");

  useEffect(() => {
    if (filter === null) setProductList(products);

    if (filter === "In stock")
      setProductList((prevState) =>
        prevState.filter((product) => product.isAvailable),
      );
  }, [filter]);

  return { productList: productList, filter: filter };
};
