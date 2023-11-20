import { StarIcon } from "@heroicons/react/24/outline";
import { useUrlState } from "@/hooks/useUrlState";
import Link from "next/link";

const tabs = [
  {
    title: "Details",
    value: "details",
  },
  {
    title: "Eigenschaften",
    value: "attributes",
  },
  {
    title: "Bewertungen",
    value: "rating",
  },
];

export default function ProductTabs() {
  const { product, variant, tab, setUrl } = useUrlState();
  const selectedTab = Number(tab) ? Number(tab) : 0;

  console.log(selectedTab);

  if (!product) return <div>No product found. :)</div>;

  return (
    <div className="grid gap-4">
      <header className="flex gap-4">
        {tabs.map((tab, index) => (
          <Link
            key={tab.title}
            href={setUrl("tab", index)}
            className={`${
              index === selectedTab ? "border-orange-400" : "border-transparent"
            } border-b-2 pb-2 transition`}
            scroll={false}
          >
            {tab.title}
          </Link>
        ))}
      </header>

      {selectedTab === 0 && (
        <div>
          {variant?.description ? variant.description : product.description}
        </div>
      )}

      {selectedTab === 1 &&
        product.attributes.map((attribute) => (
          <li key={attribute.key}>
            {attribute.key}: {attribute.value}
          </li>
        ))}

      {selectedTab === 2 && (
        <div className="flex gap-0.5">
          {[...Array(5).keys()].map((rating, index) => (
            <StarIcon
              key={index}
              className={`h-5 w-5 text-amber-400 ${
                index + 1 <= product.rating ? "fill-amber-400" : "fill-none"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
