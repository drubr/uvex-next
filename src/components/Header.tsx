import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import MiniCart from "@/components/MiniCart";

const categories = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Category",
    link: "/category",
  },
  {
    id: 3,
    title: "Product",
    link: "/product/1",
  },
];

export default function Header() {
  return (
    <>
      <header className="grid h-32 items-center justify-end bg-black"></header>
      <div className="flex flex-wrap justify-between gap-4 bg-gray-100 p-6">
        <ul className="flex">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={category.link}
                className="rounded bg-transparent p-4 text-black/90 hover:bg-black/10 hover:text-black"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/account?tab=Orders" className="pb-1">
            <UserCircleIcon className="h-5 w-5" />
          </Link>

          <MiniCart />
        </div>
      </div>
    </>
  );
}
