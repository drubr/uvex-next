import { Product } from "@/interfaces";
import Link from "next/link";
import { calculateCartSummary } from "@/helpers";

export default function CartSummary({ products }: { products: Product[] }) {
  const { productTotal, shippingTotal, total } = calculateCartSummary(products);

  return (
    <div className="grid gap-4 bg-gray-100 p-4">
      <header className="border-b pb-4">
        <h2>Summary</h2>
      </header>

      <div className="grid gap-4">
        <div>
          <div className="flex justify-between gap-2">
            <div>Subtotal</div>
            <div>{productTotal} €</div>
          </div>

          <div className="flex justify-between gap-2">
            <div>Shipping</div>
            <div>{shippingTotal} €</div>
          </div>
        </div>

        <hr />

        <div className="flex justify-between gap-2 font-bold">
          <div>Total</div>
          <div>{total} €</div>
        </div>
      </div>

      <footer className="flex">
        <Link
          href="/checkout/login"
          className="w-full bg-black px-4 py-3 text-center text-white"
        >
          To Checkout
        </Link>
      </footer>
    </div>
  );
}
