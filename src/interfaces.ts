export interface Variant {
  id: number;
  option: string;
  price: number;
  stock: number;
  description?: string;
}

interface Attribute {
  key: string;
  value: string;
}

export interface Product {
  id: number;
  title: string;
  variants: Variant[];
  images: string[];
  stock: number; // Total stock for all variants
  isAvailable: boolean; // Indicates whether the product is available or not
  manufacturer: string;
  category: string;
  isNew: boolean;
  description: string;
  attributes: Attribute[];
  rating: number;
}
