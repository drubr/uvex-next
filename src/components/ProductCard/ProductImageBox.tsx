import Link from "next/link";
import Image from "next/image";
import { useGetProduct } from "@/hooks/useGetProduct";
import { Variant } from "@/interfaces";

export default function ProductImageBox({
  productId,
  selectedVariant,
}: {
  productId: string;
  selectedVariant: Variant;
}) {
  const product = useGetProduct(productId);

  if (!product) return null;

  return (
    <div className="relative flex h-64 w-full items-center justify-center">
      <Link
        href={{
          pathname: `product/${product.id}`,
          query: { variant: selectedVariant.title.replaceAll(" ", "-") },
        }}
      >
        <Image
          width={250}
          height={250}
          src={
            selectedVariant && selectedVariant.images
              ? selectedVariant.images[0]
              : product.images[0]
          }
          className="object-contain"
          alt={product.title}
          loading="lazy"
          draggable={false}
        />
      </Link>

      {!product.isAvailable && (
        <div className="absolute bottom-0 left-0 inline-block bg-black px-2 py-1 text-xs text-white">
          Ausverkauft
        </div>
      )}

      {product.isNew && (
        <div className="absolute bottom-0 left-0 inline-block bg-black px-2 py-1 text-xs text-white">
          Neu
        </div>
      )}
    </div>
  );
}
