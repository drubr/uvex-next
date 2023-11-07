import { Product as IProduct } from "@/interfaces";

export const products: IProduct[] = [
  {
    id: 1,
    title: "Example Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    variants: [
      { id: 1, option: "Small", price: 19.99, stock: 10 },
      { id: 2, option: "Medium", price: 24.99, stock: 15 },
      { id: 3, option: "Large", price: 29.99, stock: 8 },
    ],
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ],
    stock: 33, // Total stock for all variants (10 + 15 + 8)
    productAvailability: true, // Product is available
  },
];
