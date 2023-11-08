"use client";

import { products } from "@/data";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const tabs = [
  {
    title: "Details",
  },
  {
    title: "Eigenschaften",
  },
  {
    title: "Bewertungen",
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [productDetailTab, setProductDetailTabs] = useState(0);
  const product = products[+params.id - 1];
  const selectedVariant = searchParams.get("variant");
  const variant = product.variants.find(
    (variant) => variant.option === selectedVariant,
  );
  const variantPrice = product.variants.find(
    (variant) => variant.option === selectedVariant,
  )?.price;

  if (!product.isAvailable) router.replace("/category");

  return (
    <div>
      <section className="grid items-start gap-8 p-8 lg:grid-cols-2">
        <div className="grid gap-8">
          <div className="min-h-[50vh] rounded bg-gray-100"></div>
          <div className="grid gap-4">
            <header className="flex gap-4">
              {tabs.map((tab, index) => (
                <button
                  key={tab.title}
                  className={`${
                    index === productDetailTab
                      ? "border-orange-400"
                      : "border-transparent"
                  } border-b-2 pb-2 transition`}
                  onClick={() => setProductDetailTabs(index)}
                >
                  {tab.title}
                </button>
              ))}
            </header>

            {productDetailTab === 0 && (
              <div>
                {variant?.description
                  ? variant.description
                  : product.description}
              </div>
            )}

            {productDetailTab === 1 &&
              product.attributes.map((attribute) => (
                <li key={attribute.key}>
                  {attribute.key}: {attribute.value}
                </li>
              ))}

            {productDetailTab === 2 && <div>{product.rating}</div>}
          </div>
        </div>

        <div className="sticky top-0 grid gap-2">
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
      </section>
    </div>
  );
}
