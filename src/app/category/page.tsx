"use client";

import ProductList from "@/components/CategoryPage/ProductList";

export default function CategoryPage() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl">Category Page</h1>
      </div>

      <section className="border-b bg-gray-100 px-6 py-8">
        <ProductList />
      </section>
    </>
  );
}
