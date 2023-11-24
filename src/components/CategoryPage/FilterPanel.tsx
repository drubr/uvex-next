import Link from "next/link";
import { useUrlState } from "@/hooks/useUrlState";
import { Filter, SearchParamValue } from "@/types";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function FilterPanel({
  category,
  filters,
  appliedFilters,
}: {
  category: string;
  filters: Filter[];
  appliedFilters: SearchParamValue;
}) {
  const { setUrl } = useUrlState();
  const [collapsed, setCollapsed] = useState(true);

  const appliedFiltersArray =
    appliedFilters === undefined
      ? []
      : typeof appliedFilters === "string"
      ? Array(appliedFilters)
      : [...appliedFilters];

  return (
    <div className="grid gap-1 py-3">
      <header
        className="flex cursor-pointer items-center justify-between gap-2 rounded bg-white py-2 hover:bg-gray-100"
        onClick={() => setCollapsed((prevState) => !prevState)}
      >
        <h3>{category}</h3>
        <div>
          {collapsed && <PlusIcon className="h-5 w-5" />}
          {!collapsed && <MinusIcon className="h-5 w-5" />}
        </div>
      </header>

      {!collapsed && (
        <ul className="grid gap-2">
          {filters.map((filter) => (
            <li key={filter.key}>
              <Link href={setUrl("filter", filter.value, "append")}>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={appliedFiltersArray.includes(filter.value)}
                    onChange={() => {}}
                  ></input>
                  {filter.value}
                </label>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
