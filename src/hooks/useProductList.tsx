import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { products } from "@/data";

/** @Todo: Clean up hooks and hook usage */

export const useProductList = () => {
  // const products = await getProducts();
  const searchParams = useSearchParams();
  const [productList, setProductList] = useState(products);
  const filter = searchParams.get("filter");
  const sorting = searchParams.get("sorting");

  useEffect(() => {
    if (filter === null) setProductList(products);

    if (filter === "In stock")
      setProductList((prevState) =>
        prevState.filter((product) => product.isAvailable),
      );
  }, [filter]);

  useEffect(() => {
    if (sorting === "Alphabetical")
      setProductList((prevState) =>
        prevState.sort((productA, productB) =>
          productA.title.localeCompare(productB.title),
        ),
      );
  }, [sorting]);

  return { productList: productList, filter: filter, sorting: sorting };
};
