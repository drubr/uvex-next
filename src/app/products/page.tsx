import { getData, getProduct } from "@/data";

export default async function ProductsPage() {
  const { products } = await getData();
  const product = await getProduct("1");

  console.log(product);

  return (
    <div className="p-8">
      <h1 className="text-2xl">All products</h1>
      <section>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
