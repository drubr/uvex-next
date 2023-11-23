"use client";

import type { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { SortingOption } from "@/types";

const options: SortingOption[] = [
  "Relevance",
  "Alphabetical",
  "Price lowest",
  "Price highest",
];

export default function SortingButton({
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
      current.delete("sorting");
    } else {
      current.set("sorting", event.target.value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`, { scroll: false });
  };

  return (
    <select
      name="productListSorting"
      value={selected ?? ""}
      className="bg-transparent"
      onChange={onSelect}
    >
      <option value="">Sorting</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
