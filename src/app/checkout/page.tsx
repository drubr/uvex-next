import ProductCard from "@/components/ProductCard";

import { getProducts } from "@/lib";
import Link from "next/link";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: { [_: string]: string | string[] | undefined };
}) {
  const productIds = searchParams.product;
  const products = await getProducts(productIds);

  if (productIds === undefined || products.length === 0)
    return (
      <div className="flex min-h-full flex-col items-center justify-center gap-2 text-gray-400">
        <header className="flex flex-wrap gap-2">
          <h1>No matching product in cart.</h1>
          <p>:)</p>
        </header>
        <Link
          href="/category"
          className="rounded border border-black bg-black px-4 py-3 text-white"
        >
          Explore products
        </Link>
      </div>
    );

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="grid animate-fadeUp grid-cols-[2fr_1fr] gap-8">
        <div className="rounded bg-gray-100 p-8">
          <div className="grid gap-4">
            <div className="rounded-full bg-gray-200 p-4"></div>
            <div className="w-3/4 rounded-full bg-gray-200 p-3"></div>
          </div>
        </div>
        <div className="rounded bg-gray-100 p-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} priority={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
