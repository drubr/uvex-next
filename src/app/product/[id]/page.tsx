import { products } from "@/data";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products[+params.id - 1];

  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="min-h-[50vh] rounded bg-gray-100"></div>
      <div>
        <h1 className="text-2xl">{product.title}</h1>
        <small>Product {product.id}</small>
      </div>
    </div>
  );
}
