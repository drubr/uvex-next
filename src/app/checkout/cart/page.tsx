"use client";

import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CartPage() {
  const { products, total, deleteProduct } = useCart();
  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl">Cart</h1>
      </div>

      <section className="grid gap-4 px-8">
        <table className="w-full">
          <thead className="sticky top-0 border-b bg-white pb-4 text-left">
            <tr>
              <th className="p-4 pl-0">Products</th>
              <th className="p-4">Price</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Sum</th>
              <th className="p-4"></th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="flex gap-8 p-4 text-start">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={128}
                    height={128}
                  />
                  <h2>{product.title}</h2>
                </td>
                <td className="p-4">{product.variants[0].price} €</td>
                <td className="p-4">
                  <input
                    type="text"
                    defaultValue={1}
                    className="w-auto border px-4 py-2"
                  />
                </td>
                <td className="p-4">{product.variants[0].price} €</td>
                <td className="inline-flex justify-start gap-4">
                  <Link href={`/product/${product.id}`}>
                    <PencilIcon className="h-5 w-5" />
                  </Link>

                  <button onClick={() => deleteProduct(product.id.toString())}>
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className="border-t">
              <td className="w-full pt-4">
                <button className="ml-auto block bg-black px-4 py-3 text-white">
                  Refresh cart
                </button>
              </td>
            </tr>
          </tfoot>
        </table>

        <div>
          <h2>Summary</h2>
          <div>{total}</div>
        </div>
      </section>
    </>
  );
}
