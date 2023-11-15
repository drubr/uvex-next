"use client";

import { products } from "@/data";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

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
  const [thumbnail, setThumbnail] = useState(0);
  const product = products[+params.id - 1];
  const selectedVariant = searchParams.get("variant");
  const variant = product.variants.find(
    (variant) => variant.option === selectedVariant,
  );

  if (!product.isAvailable) router.replace("/category");

  return (
    <div className="mt-4">
      <section className="mx-auto grid w-full max-w-screen-xl items-start gap-8 p-8 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-8">
          <div className="grid min-h-[50vh] gap-8 rounded">
            <Image
              width={480}
              height={480}
              src={product.images[thumbnail]}
              className="mx-auto object-contain"
              alt={product.title}
              loading="lazy"
            />

            <ul className="flex w-full max-w-full gap-8">
              {product.images.map((image, index) => (
                <li
                  key={index}
                  className={`inline-flex items-center justify-center border p-4 transition ${
                    index === thumbnail
                      ? "border-orange-400"
                      : "border-transparent"
                  }`}
                  onClick={() => setThumbnail(index)}
                >
                  <Image
                    width={128}
                    height={128}
                    src={image}
                    className="object-contain"
                    alt={`${product.title} thumbnail ${index}`}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </div>
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

            {productDetailTab === 2 && (
              <div className="flex gap-0.5">
                {[...Array(5).keys()].map((rating, index) => (
                  <StarIcon
                    key={index}
                    className={`h-5 w-5 text-amber-400 ${
                      index + 1 <= product.rating
                        ? "fill-amber-400"
                        : "fill-none"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="sticky top-4 grid gap-2">
          <header>
            <h1 className="text-2xl">{product.title}</h1>
            <small>Product {product.id}</small>
            <div className="mt-4">{variant?.price}</div>
          </header>

          {product.variants.length > 0 && (
            <ul className="flex gap-2">
              {product.variants.map((variant, index) => (
                <li key={product.id + index}>
                  {variant.stock > 0 ? (
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
                  ) : (
                    <button
                      className="flex items-center justify-center border p-2"
                      disabled
                    >
                      <div className="opacity-30">{variant.option}</div>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}

          <button
            className="mt-8 max-w-md bg-black p-4 text-white"
            disabled={variant?.stock === 0}
          >
            Add to cart
          </button>
        </div>
      </section>
    </div>
  );
}
