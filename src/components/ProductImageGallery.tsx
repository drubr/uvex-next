import Image from "next/image";
import { useState } from "react";
import { useGetProduct } from "@/hooks/useGetProduct";

export default function ProductImageGallery({
  productId,
}: {
  productId: string;
}) {
  const product = useGetProduct(productId);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  if (!product) return <div>No product found. :)</div>;

  return (
    <div className="grid min-h-[50vh] gap-8 rounded">
      <Image
        width={480}
        height={480}
        src={product.images[selectedThumbnail]}
        className="mx-auto object-contain"
        alt={product.title}
        draggable={false}
        priority
      />

      <ul className="flex w-full max-w-full gap-8">
        {product.images.map((image, index) => (
          <li
            key={index}
            className={`inline-flex cursor-pointer items-center justify-center border p-4 transition ${
              index === selectedThumbnail
                ? "border-orange-400"
                : "border-transparent"
            }`}
            onClick={() => setSelectedThumbnail(index)}
          >
            <Image
              width={128}
              height={128}
              src={image}
              className="object-contain"
              alt={`${product.title} thumbnail ${index}`}
              loading="lazy"
              draggable={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
