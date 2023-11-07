import { Product } from "@/interfaces";
import Link from "next/link";

interface ProductProps {
  product: Product;
}
export default function Product({ product }: ProductProps) {
  return (
    <Link href={`product/${product.id}`} className="grid cursor-pointer gap-2">
      <div className="h-56 w-full rounded bg-gray-100"></div>
      <div>
        <div>{product.title}</div>
        <div>{product.variants[0].price}</div>
      </div>
    </Link>
  );
}
