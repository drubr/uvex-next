"use client";

import { useGetAllProducts } from "@/hooks/useGetAllProducts";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const products = useGetAllProducts();
  return (
    <div className="p-8">
      <h1 className="text-2xl">All products</h1>
      <section>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} priority={true} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
