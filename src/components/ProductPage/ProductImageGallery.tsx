"use client";

import Image from "next/image";
import Link from "next/link";
import { Product, Variant } from "@/interfaces";
import { useUrlState } from "@/hooks/useUrlState";

export default function ProductImageGallery({
  product,
  variant,
}: {
  product?: Product | undefined;
  variant: Variant | undefined;
}) {
  const { thumbnail, setUrl } = useUrlState();
  const images = variant?.images ? variant.images : product?.images;

  const currentThumbnail =
    images?.length && Number(thumbnail) <= images?.length
      ? Number(thumbnail)
      : 0;

  if (!product || !images) return <div>No product found. :)</div>;

  return (
    <div className="grid min-h-[50vh] gap-8 rounded">
      <Image
        width={480}
        height={480}
        src={images[currentThumbnail]}
        className="mx-auto object-contain"
        alt={product.title}
        draggable={false}
        priority
      />

      <ul className="flex w-full max-w-full gap-8">
        {images.map((image, index) => (
          <li
            key={index}
            className={`inline-flex cursor-pointer items-center justify-center border p-4 transition ${
              index === currentThumbnail
                ? "border-orange-400"
                : "border-transparent"
            }`}
          >
            <Link href={setUrl("thumbnail", index)} scroll={false}>
              <Image
                width={128}
                height={128}
                src={image}
                className="object-contain"
                alt={`${product.title} thumbnail ${index}`}
                loading="lazy"
                draggable={false}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
