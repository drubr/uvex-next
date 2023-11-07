"use client";

import { products } from "@/data";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const searchParams = useSearchParams();
  const product = products[+params.id - 1];
  const selectedVariant = searchParams.get("variant");
  const variantPrice = product.variants.find(
    (variant) => variant.option === selectedVariant,
  )?.price;

  return (
    <div className="grid items-start gap-8 p-8 lg:grid-cols-2">
      <div className="min-h-[50vh] rounded bg-gray-100"></div>
      <div className="grid gap-2">
        <header>
          <h1 className="text-2xl">{product.title}</h1>
          <small>Product {product.id}</small>
          <div className="mt-4">{variantPrice}</div>
        </header>

        {product.variants.length > 0 && (
          <ul className="flex gap-2">
            {product.variants.map((variant, index) => (
              <li key={product.id + index}>
                <Link
                  href={`/product/${product.id}?variant=${variant.option}`}
                  className={`flex items-center justify-center border p-2 ${
                    selectedVariant === variant.option
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                >
                  {variant.option}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
