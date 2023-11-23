import Link from "next/link";
import { getProducts } from "@/lib";
import CartTable from "@/components/CartPage/CartTable";
import CartSummary from "@/components/CartPage/CartSummary";

export default async function CartPage({
  searchParams,
}: {
  searchParams: { [_: string]: string | string[] | undefined };
}) {
  const productIds = searchParams.product;
  const products = await getProducts(productIds);

  console.log(searchParams);

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
    <>
      <div className="p-8">
        <h1 className="text-2xl">Cart</h1>
      </div>

      <section className="grid gap-4 px-8 xl:grid-cols-[1fr_auto] xl:items-start">
        <CartTable products={products} searchParams={searchParams} />

        <div className="sticky top-4">
          <CartSummary products={products} />
        </div>
      </section>
    </>
  );
}
