import { Product } from "@/interfaces";

export const formatProductTitle = (productTitle: string) =>
  productTitle.replaceAll(" ", "-");

export const filterProducts = (
  products: Product[],
  filter: string | string[] | undefined,
  sorting: string | string[] | undefined,
) => {
  if (filter === undefined && sorting === undefined) return products;

  let filteredProducts: Product[];
  switch (filter) {
    case "In stock":
      filteredProducts = products.filter((product) => product.stock > 0);
      break;
    default:
      filteredProducts = products;
  }

  if (sorting === undefined) return filteredProducts;

  let finalProducts: Product[];
  switch (sorting) {
    case "Relevance":
      finalProducts = [
        ...filteredProducts.filter((product) => product.isNew),
        ...filteredProducts.filter((product) => !product.isNew),
      ];
      break;
    case "Alphabetical":
      finalProducts = filteredProducts.sort((productA, productB) =>
        productA.title.localeCompare(productB.title),
      );
      break;
    default:
      finalProducts = filteredProducts;
  }

  return finalProducts;
};
