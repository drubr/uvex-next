import { StarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useGetProductVariant } from "@/hooks/useGetProductVariant";
import { useGetProduct } from "@/hooks/useGetProduct";

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

export default function ProductTabs({ productId }: { productId: string }) {
  const product = useGetProduct(productId);
  const variant = useGetProductVariant(productId);
  const [selectedTab, setSelectedTabs] = useState(0);

  if (!product) return <div>No product found. :)</div>;

  if (!variant) return <div>No variant found. :)</div>;

  return (
    <div className="grid gap-4">
      <header className="flex gap-4">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            className={`${
              index === selectedTab ? "border-orange-400" : "border-transparent"
            } border-b-2 pb-2 transition`}
            onClick={() => setSelectedTabs(index)}
          >
            {tab.title}
          </button>
        ))}
      </header>

      {selectedTab === 0 && (
        <div>
          {variant.description ? variant.description : product.description}
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
