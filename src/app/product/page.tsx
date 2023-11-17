"use client";

import { useGetAllProducts } from "@/hooks/useGetAllProducts";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function ProductPage() {
  const prodcuts = useGetAllProducts();
  return (
    <div className="p-8">
      <h1 className="text-2xl">All products</h1>
      <section>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {prodcuts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
