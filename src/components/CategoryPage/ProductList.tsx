import SortingButton from "@/components/SortingButton";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/interfaces";
import Link from "next/link";
import { SearchParamValue } from "@/types";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export default function ProductList({
  products,
  filter,
  sorting,
  filterSidebarState,
}: {
  products: Product[];
  filter: SearchParamValue;
  sorting: SearchParamValue;
  filterSidebarState: SearchParamValue;
}) {
  return (
    <div
      className={`grid max-w-screen-xl items-start gap-8 ${
        filterSidebarState === "open" ? "" : "mx-auto w-full"
      }`}
    >
      <div className="flex justify-between gap-4">
        <div className="flex gap-2">
          <Link
            href="/category?filterSidebar=open"
            className="flex items-center gap-2 bg-black p-2 text-white"
            scroll={false}
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5" /> Filter
          </Link>
        </div>
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
