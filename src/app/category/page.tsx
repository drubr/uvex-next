"use client";

import Product from "@/components/Product";
import { products } from "@/data";
import FilterButton from "@/components/FilterButton";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const searchParams = useSearchParams();
  const [productList, setProductList] = useState(products);
  const search = searchParams.get("filter");
  console.log(search);

  useEffect(() => {
    if (search === null) setProductList(products);

    if (search === "In stock")
      setProductList((prevState) =>
        prevState.filter((product) => product.isAvailable),
      );
  }, [search]);

  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl">Category Page here</h1>
      </div>

      <section className="border-b bg-gray-100 px-6 py-8">
        <div className="mx-auto grid max-w-screen-xl items-start gap-8">
          <div className="flex justify-between gap-4">
            <FilterButton selected={search} />
            <button>Sortieren</button>
          </div>

          {productList && (
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {productList.map((product) => (
                <li key={product.id}>
                  <Product product={product} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
