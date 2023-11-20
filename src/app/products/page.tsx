import { Product } from "@/interfaces";

async function getData() {
  const res = await fetch("http://localhost:3000/products/api");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Products() {
  const data = await getData();
  const products: Product[] = JSON.parse(data.data);

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
