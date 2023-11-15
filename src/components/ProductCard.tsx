import { Product } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";

interface ProductProps {
  product: Product;
}
export default function ProductCard({ product }: ProductProps) {
  return (
    <Link href={`product/${product.id}`}>
      <button
        disabled={!product.isAvailable}
        className="grid w-full gap-2 bg-white p-4 text-left disabled:opacity-40"
      >
        <div className="relative flex h-64 w-full items-center justify-center">
          <Image
            width={250}
            height={250}
            src={product.images[0]}
            className="object-contain"
            alt={product.title}
            loading="lazy"
          />
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
        <div>
          <div>{product.title}</div>
          <div>{product.variants[0].price}</div>
          {product.variants.length > 0 && (
            <ul className="flex gap-2">
              {product.variants.map((variant, index) => (
                <li key={product.id + index}>
                  <Link
                    href={`/product/${product.id}?variant=${variant.option}`}
                    className="flex items-center justify-center border p-2"
                  >
                    {variant.option}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </button>
    </Link>
  );
}
