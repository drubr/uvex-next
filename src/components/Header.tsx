import Link from "next/link";
import MiniCart from "@/components/MiniCart";

export default function Header() {
  return (
    <>
      <header className="grid h-32 items-center justify-end bg-black"></header>
      <div className="flex flex-wrap justify-between gap-4 bg-gray-100 p-6">
        <ul className="flex">
          <li>
            <Link
              href="/category"
              className="rounded bg-transparent p-4 text-black/90 hover:bg-black/10 hover:text-black"
            >
              Category
            </Link>
          </li>
          <li>
            <Link
              href="/product/1"
              className="rounded bg-transparent p-4 text-black/90 hover:bg-black/10 hover:text-black"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="rounded bg-transparent p-4 text-black/90 hover:bg-black/10 hover:text-black"
            >
              Products
            </Link>
          </li>
        </ul>
        <MiniCart />
      </div>
    </>
  );
}
