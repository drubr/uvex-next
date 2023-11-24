"use client";

import { SearchParamValue } from "@/types";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Product } from "@/interfaces";
import FilterList from "@/components/CategoryPage/FilterList";
import { useSearchParams } from "next/navigation";

export default function FilterSidebar({
  products,
  appliedFilters,
  filterSidebarState,
}: {
  products: Product[];
  appliedFilters: SearchParamValue;
  filterSidebarState: SearchParamValue;
}) {
  const searchParams = useSearchParams();
  if (filterSidebarState !== "open") return null;

  const appliedFiltersLink = new URLSearchParams(searchParams)
    .toString()
    .replace("filterSidebar=open&", "");

  return (
    <div className="absolute bottom-0 right-0 top-0 z-50 h-full min-w-[16rem] bg-white p-4">
      <header className="flex items-center justify-between gap-2">
        <Link href="/category" scroll={false}>
          Reset all filters
        </Link>

        <Link href="/category" scroll={false}>
          <XMarkIcon className="h-4 w-4" />
        </Link>
      </header>

      <FilterList appliedFilters={appliedFilters} />

      <footer>
        <Link
          href={`/category/?${appliedFiltersLink}`}
          className="flex w-full justify-center bg-black px-4 py-3 text-white"
        >
          Show products {products.length}
        </Link>
      </footer>
    </div>
  );
}
