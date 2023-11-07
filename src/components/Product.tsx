import { Product } from "@/interfaces";
import Link from "next/link";

interface ProductProps {
  product: Product;
}
export default function Product({ product }: ProductProps) {
  return (
    <Link href={`product/${product.id}`}>
      <button
        disabled={!product.isAvailable}
        className="grid w-full gap-2 bg-white p-4 text-left disabled:opacity-40"
      >
        <div className="relative h-64 w-full">
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
        </div>
      </button>
    </Link>
  );
}
