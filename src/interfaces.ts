export interface Variant {
  id: number;
  option: string;
  price: number;
  stock: number;
}

interface Attribute {
  key: string;
  value: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  variants: Variant[];
  images: string[];
  stock: number; // Total stock for all variants
  isAvailable: boolean; // Indicates whether the product is available or not
  manufacturer: string;
  category: string;
  isNew: boolean;
  attributes: Attribute[];
}
