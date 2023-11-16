import { Product } from "@/interfaces";
import { products } from "@/data";

export const useGetAllProducts = (): Product[] => products;
