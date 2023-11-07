import { products } from "@/data";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="min-h-[50vh] rounded bg-gray-100"></div>
      <div>
        <h1 className="text-2xl">{products[0].title}</h1>
        <small>Product {params.id}</small>
      </div>
    </div>
  );
}
