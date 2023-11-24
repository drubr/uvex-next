import ProductTabs from "@/components/ProductPage/ProductTabs";
import ProductImageGallery from "@/components/ProductPage/ProductImageGallery";
import ProductBuyConfiguration from "@/components/ProductPage/ProductBuyConfiguration";
import { getProduct, getVariant } from "@/lib";

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const product = await getProduct(params.id[0]);
  const variant = await getVariant(searchParams.variant);

  /**
   * @Todo: Make this page async
   */

  /**
   * Product Detail Domain possibilities
   * http://localhost:3000/product/2?variant=arctic-blue-matt
   * http://localhost:3000/product/2?variant=arctic-blue-matt&thumbnail=3&tab=details
   * http://localhost:3000/product/2/arctic-blue-matt
   * */

  return (
    <div className="mt-4 grid gap-16">
      <section className="mx-auto grid w-full max-w-screen-xl items-start gap-8 p-8 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-8">
          <ProductImageGallery product={product} variant={variant} />
          <ProductTabs product={product} variant={variant} />
        </div>

        <div className="sticky top-4 grid gap-2">
          <ProductBuyConfiguration product={product} variant={variant} />
        </div>
      </section>
    </div>
  );
}
