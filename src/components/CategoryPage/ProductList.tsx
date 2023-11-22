import { useProductList } from "@/hooks/useProductList";
import FilterButton from "@/components/FilterButton";
import SortingButton from "@/components/SortingButton";
import ProductCard from "@/components/ProductCard";

export default function ProductList() {
  const { productList, filter, sorting } = useProductList();

  return (
    <div className="mx-auto grid max-w-screen-xl items-start gap-8">
      <div className="flex justify-between gap-4">
        <FilterButton selected={filter} />
        <SortingButton selected={sorting} />
      </div>

      {productList && (
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {productList.map((product, index) => (
            <li key={product.id}>
              <ProductCard product={product} priority={index < 3} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
