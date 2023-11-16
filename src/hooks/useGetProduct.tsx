import { Product } from "@/interfaces";
import { products } from "@/data";

export const useGetProduct = (productId: string): Product | undefined => {
  const product = products[+productId - 1];
  return product ? product : undefined;
};
