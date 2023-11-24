import { SearchParamValue } from "@/types";
import Link from "next/link";

export default function FilterOverlay({
  filterSidebarState,
}: {
  filterSidebarState: SearchParamValue;
}) {
  if (filterSidebarState === undefined) return null;
  if (typeof filterSidebarState === "object") return null;

  return (
    <Link
      href="/category"
      className="absolute inset-0 z-40 bg-black/30"
      scroll={false}
    ></Link>
  );
}
