"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";

export default function DeleteFromCart({
  productId,
}: {
  productId: string | number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const onDelete = (productId: string | number) => {
    console.log("Delete...");

    const current = new URLSearchParams(Array.from(searchParams.entries()));

    current.delete("product", productId.toString());

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`/checkout/cart${query}`, { scroll: false });
  };

  return (
    <button onClick={() => onDelete(productId)}>
      <TrashIcon className="h-5 w-5" />
    </button>
  );
}
