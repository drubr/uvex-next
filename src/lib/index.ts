import { Product } from "@/interfaces";
import { promises as fs } from "fs";

/** Use this method to fetch all the data of the page
 * To adjust the data file, go to `./public/data.json`
 *
 * In component usage:
 * - Mark your page/ component as 'async' `export default async function SomePage() {}`
 * - Fetch data inside like:
 *
 * `export default async function SomePage() {
 *    const data = await getData()
 * }`
 *
 * You can also destructure your data
 *
 * `export default async function SomePage() {
 *    const { products } = await getData()
 * }`
 *
 * Make sure you adjust the return type of data.json in this method below when you add new data sections to the data.json file
 *
 * The file will be server side rendered
 * */
export async function getData(): Promise<{ products: Product[] }> {
  if (process.env.NODE_ENV === "development") {
    const res = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
    return JSON.parse(res);
  } else {
    const res = await fetch("https://xevu-next.vercel.app/data.json");
    return res.json();
  }
}

export async function getProduct(
  productId: string,
): Promise<Product | undefined> {
  const { products } = await getData();
  return products.find((product) => product.id.toString() === productId);
}

/**
 * When no arguments are passed in `await getProducts()`,
 * it will return all products in `./public/data.json`
 * */
export async function getProducts(
  productIds?: string | string[],
): Promise<Product[]> {
  const { products } = await getData();

  if (productIds === undefined) return products;

  const productIdArray =
    productIds === undefined
      ? []
      : typeof productIds === "string"
      ? Array(productIds)
      : [...productIds];

  return products.filter((product) =>
    productIdArray.find((productId) => productId === product.id.toString()),
  );
}
