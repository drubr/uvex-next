import FilterButton from "@/components/FilterButton";
import SortingButton from "@/components/SortingButton";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/interfaces";

export default function ProductList({
  products,
  filter,
  sorting,
}: {
  products: Product[];
  filter: string | string[] | undefined;
  sorting: string | string[] | undefined;
}) {
  return (
    <div className="mx-auto grid max-w-screen-xl items-start gap-8">
      <div className="flex justify-between gap-4">
        <FilterButton selected={filter} />
        <SortingButton selected={sorting} />
      </div>

      {products && products.length > 0 && (
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <li key={product.id}>
              <ProductCard product={product} priority={index < 3} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
