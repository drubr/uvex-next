import { Product } from "@/interfaces";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductProps {
  product: Product;
}
export default function ProductCard({ product }: ProductProps) {
  const router = useRouter();
  return (
    <button
      disabled={!product.isAvailable}
      className="grid w-full gap-2 bg-white p-4 text-left disabled:opacity-40"
      onClick={() => router.push(`product/${product.id}`)}
    >
      <div className="relative flex h-64 w-full items-center justify-center">
        {/* Also possible:
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            More on sizes: https://nextjs.org/docs/pages/api-reference/components/image#sizes
            */}
        <Image
          width={250}
          height={250}
          src={product.images[0]}
          className="object-contain"
          alt={product.title}
          loading="lazy"
          draggable={false}
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
  );
}
