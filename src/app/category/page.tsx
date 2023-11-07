import Product from "@/components/Product";
import { products } from "@/data";

export default function CategoryPage() {
  return (
    <div className="grid gap-8 p-8">
      <h1 className="text-2xl">Category Page here</h1>
      <section>
        {products && (
          <ul className="grid-row-h grid grid-cols-3 gap-4">
            {products.map((product) => (
              <li key={product.id}>
                <Product product={product} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
