import Link from "next/link";

const accountPages = [
  {
    title: "Orders",
    path: "/account?tab=Orders",
  },
  {
    title: "Profile",
    path: "/account?tab=Profile",
  },
];
export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const url = searchParams.tab;

  return (
    <div className="flex gap-4 p-4">
      <div className="w-48 rounded border p-4">
        <ul className="grid gap-2">
          {accountPages.map((page) => (
            <li key={page.title} className="flex items-center gap-2">
              <Link
                href={page.path}
                className={`${
                  page.title === url ? "text-orange-400" : "text-base"
                }`}
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex-1">
        <h1 className="text-2xl">{url}</h1>
      </div>
    </div>
  );
}
