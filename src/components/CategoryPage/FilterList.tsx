import FilterPanel from "@/components/CategoryPage/FilterPanel";
import { SearchParamValue } from "@/types";
import { filters } from "@/data";

export default function FilterList({
  appliedFilters,
}: {
  appliedFilters: SearchParamValue;
}) {
  return (
    <ul className="grid py-4">
      {filters.map((filter, index) => (
        <li key={filter[0].category} className="select-none">
          <hr />
          <FilterPanel
            category={filter[0].category}
            filters={filter[1]}
            appliedFilters={appliedFilters}
          />
        </li>
      ))}
    </ul>
  );
}
