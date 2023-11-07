import Product from "@/components/Product";
import { products } from "@/data";

export default function CategoryPage() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl">Category Page here</h1>
      </div>

      <section className="border-b bg-gray-100 px-6 py-8">
        <div className="mx-auto grid max-w-screen-xl items-start gap-8">
          <div className="flex justify-between gap-4">
            <button className="bg-black px-6 py-2 text-white">Filter</button>
            <button>Sortieren</button>
          </div>

          {products && (
            <ul className="grid grid-cols-3 gap-4">
              {products.map((product) => (
                <li key={product.id}>
                  <Product product={product} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
