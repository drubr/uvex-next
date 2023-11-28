import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Header({
  categories,
}: {
  categories: {
    id: number;
    title: string;
    link: string;
  }[];
}) {
  return (
    <>
      <header className="grid h-32 items-center justify-end bg-black"></header>
      <div className="flex flex-wrap justify-between gap-4 bg-gray-100 p-6">
        <ul className="flex">
          {categories?.map((category) => (
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
          <Link href="/account?tab=Orders">
            <UserCircleIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
