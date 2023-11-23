import { getProducts } from "@/data";
import ProductList from "@/components/CategoryPage/ProductList";
import { filterProducts } from "@/helpers";

export default async function CategoryPage({
  searchParams,
}: {
  searchParams: { [_: string]: string | string[] | undefined };
}) {
  const products = await getProducts();
  const filter = searchParams.filter;
  const sorting = searchParams.sorting;
  const filteredProducts = filterProducts(products, filter, sorting);

  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl">Category Page</h1>
      </div>

      <section className="border-b bg-gray-100 px-6 py-8">
        <ProductList
          products={filteredProducts}
          filter={filter}
          sorting={sorting}
        />
      </section>
    </>
  );
}
