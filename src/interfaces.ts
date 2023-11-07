export interface Variant {
  id: number;
  option: string;
  price: number;
  stock: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  variants: Variant[];
  images: string[];
  stock: number; // Total stock for all variants
  productAvailability: boolean; // Indicates whether the product is available or not
}
