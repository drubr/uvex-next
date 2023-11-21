"use client";

import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const { products } = useCart();
  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl">Cart</h1>
      </div>

      <section className="px-8">
        <div>
          {products.map((product, index) => (
            <div key={index}>{product.title}</div>
          ))}
        </div>
      </section>
    </>
  );
}
