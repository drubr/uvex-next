"use client";

import ProductCard from "@/components/ProductCard";
import FilterButton from "@/components/FilterButton";
import { useProductList } from "@/hooks/useProductList";

export default function CategoryPage() {
  const { productList, filter } = useProductList();

  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl">Category Page</h1>
      </div>

      <section className="border-b bg-gray-100 px-6 py-8">
        <div className="mx-auto grid max-w-screen-xl items-start gap-8">
          <div className="flex justify-between gap-4">
            <FilterButton selected={filter} />
            <button>Sortieren</button>
          </div>

          {productList && (
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {productList.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
