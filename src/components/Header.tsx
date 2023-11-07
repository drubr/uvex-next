import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="grid h-32 items-center justify-end bg-black"></header>
      <ul className="flex bg-gray-100 p-6">
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
      </ul>
    </>
  );
}
