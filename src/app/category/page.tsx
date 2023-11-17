"use client";

import ProductCard from "@/components/ProductCard";
import FilterButton from "@/components/FilterButton";
import { useProductList } from "@/hooks/useProductList";
import SortingButton from "@/components/SortingButton";

export default function CategoryPage() {
  const { productList, filter, sorting } = useProductList();

  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl">Category Page</h1>
      </div>

      <section className="border-b bg-gray-100 px-6 py-8">
        <div className="mx-auto grid max-w-screen-xl items-start gap-8">
          <div className="flex justify-between gap-4">
            <FilterButton selected={filter} />
            <SortingButton selected={sorting} />
          </div>

          {productList && (
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {productList.map((product, index) => (
                <li key={product.id}>
                  <ProductCard product={product} priority={index < 3} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
