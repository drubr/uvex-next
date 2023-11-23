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

export const convertSearchParamsToString = (params: {
  [_: string]: string | string[] | undefined;
}): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach((val) => searchParams.append(key, val));
      } else {
        searchParams.append(key, value);
      }
    }
  });

  return searchParams.toString();
};

export const calculateCartSummary = (products: Product[]) => {
  const productTotal = products
    .reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.variants[0].price,
      0,
    )
    .toFixed(2);
  const shippingTotal = 0.0;
  const total = Number(productTotal + shippingTotal).toFixed(2);

  return {
    productTotal,
    shippingTotal,
    total,
  };
};
