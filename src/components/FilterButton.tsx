"use client";

import type { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { FilterOption } from "@/types";

const options: FilterOption[] = ["In stock"];

export default function FilterButton({
  selected,
  withCleanUp,
}: {
  selected: string | string[] | undefined;
  withCleanUp?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (withCleanUp) {
      for (const [key] of searchParams.entries()) {
        current.delete(key);
      }
    }

    const value = event.target.value.trim();

    if (!value) {
      current.delete("filter");
    } else {
      current.set("filter", event.target.value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: false });
  };

  return (
    <div className="relative flex items-center gap-2">
      <select
        name="productListFilter"
        className="bg-black p-2 text-white"
        value={selected ?? ""}
        onChange={onSelect}
      >
        <option value="">Filter</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute -right-2 top-0 h-full w-2 bg-black"></div>
    </div>
  );
}
