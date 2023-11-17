import { useGetProduct } from "@/hooks/useGetProduct";
import { useRouter } from "next/navigation";
import { Variant } from "@/interfaces";

export default function TextBox({
  productId,
  selectedVariant,
}: {
  productId: string;
  selectedVariant: Variant;
}) {
  const product = useGetProduct(productId);
  const router = useRouter();

  if (!product) return null;

  return (
    <header className="grid gap-2">
      <div>
        <div>{product.manufacturer}</div>
        <h2
          className="font-bold"
          onClick={() =>
            router.push(
              `product/${product.id}?variant=${selectedVariant.title.replaceAll(
                " ",
                "-",
              )}`,
            )
          }
        >
          {product.title}
        </h2>
        <div>
          {product.category.split("/")[product.category.split("/").length - 1]}
        </div>
      </div>
      <div className="font-bold">{product.variants[0].price} €</div>
    </header>
  );
}
