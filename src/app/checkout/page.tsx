import ProductCard from "@/components/ProductCard";

import { getProducts } from "@/lib";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: { [_: string]: string | string[] | undefined };
}) {
  const productIds = searchParams.product;
  const products = await getProducts(productIds);

  console.log(productIds);

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
