"use client";

import {
  PencilIcon,
  ShoppingBagIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";

export default function MiniCart() {
  const { products, miniCartOpen, toggleMiniCart, total, deleteProduct } =
    useCart();

  return (
    <div className="relative z-50">
      <button
        className="relative"
        aria-label="Cart button with icon"
        onClick={() => toggleMiniCart()}
      >
        <div className="absolute -right-1 -top-1 z-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black p-1 text-xs text-white">
          {products.length}
        </div>
        <ShoppingBagIcon className="z-10 h-5 w-5" />
      </button>

      <div
        className={`absolute right-0 top-8 max-h-[50vh] min-w-[20rem] overflow-hidden overflow-y-scroll rounded border bg-white transition-all ${
          miniCartOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-4 opacity-0"
        }`}
      >
        <header className="sticky top-0 flex flex-wrap items-start justify-between gap-2 border-b bg-white p-2 pl-4">
          <div>Cart</div>
          <button>
            <XMarkIcon className="h-5 w-5" onClick={() => toggleMiniCart()} />
          </button>
        </header>

        <div className="p-4">
          <ul className="grid gap-4">
            {products.map((product, index) => (
              <li key={index}>
                <div className="flex items-start gap-2">
                  <Image
                    src={product.images[0]}
                    alt={product.title + "thumbnail"}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="text-orange-400">{product.title}</h3>
                    <div>{product.variants[0].price} €</div>
                    <div className="flex items-center justify-between gap-1">
                      <label className="inline-flex items-center gap-2">
                        Menge:
                        <input
                          type="text"
                          defaultValue="1"
                          className="inline-flex w-12 border px-2 py-1 text-center"
                        />
                      </label>

                      <div className="flex gap-2">
                        <Link
                          href={`/product/${product.id}`}
                          className="inline-block"
                        >
                          <PencilIcon className="h-5 w-5" />
                        </Link>

                        <button
                          className="flex-1"
                          onClick={() => deleteProduct(product.id.toString())}
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <footer className="sticky bottom-0 grid w-full gap-1 border-t bg-white p-4">
          <div className="flex justify-between gap-2">
            <div>
              <b>{products.length}</b> Products
            </div>
            <div>{total} €</div>
          </div>

          <Link
            href="/checkout/cart"
            className="block bg-black p-2 text-center text-white"
          >
            Go to Cart
          </Link>
        </footer>
      </div>
    </div>
  );
}
