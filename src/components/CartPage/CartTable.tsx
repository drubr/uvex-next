import Image from "next/image";
import Link from "next/link";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Product } from "@/interfaces";
import { convertSearchParamsToString, formatProductTitle } from "@/helpers";
import DeleteFromCart from "@/components/CartPage/DeleteFromCart";

export default function CartTable({
  products,
  searchParams,
}: {
  products: Product[];
  searchParams: { [_: string]: string | string[] | undefined };
}) {
  return (
    <div>
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
                <Link
                  href={`/product/${product.id}?variant=${formatProductTitle(
                    product.variants[0].title,
                  )}`}
                >
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={128}
                    height={128}
                  />
                </Link>
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

                <DeleteFromCart productId={product.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="my-4 flex w-full justify-end border-t pt-4">
        <Link
          href={`/checkout/cart?${new URLSearchParams(
            convertSearchParamsToString(searchParams),
          )}`}
          className="bg-black px-4 py-3 text-white"
        >
          Refresh cart
        </Link>
      </div>
    </div>
  );
}
