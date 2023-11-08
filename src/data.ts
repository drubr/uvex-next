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
    isAvailable: true, // Product is available
    manufacturer: "uvex sports",
    category: "/wintersport/skihelme",
    isNew: false,
    attributes: [
      { key: "Type", value: "Helmet" },
      { key: "Category", value: "Racing sport" },
      { key: "Weight", value: "550g" },
    ],
  },
  {
    id: 2,
    title: "Next Example Product",
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
    stock: 33,
    isAvailable: true,
    manufacturer: "uvex sports",
    category: "/wintersport/skihelme",
    isNew: true,
    attributes: [
      { key: "Type", value: "Helmet" },
      { key: "Category", value: "Racing sport" },
      { key: "Weight", value: "550g" },
    ],
  },
  {
    id: 3,
    title: "Example product – 3",
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
    stock: 33,
    isAvailable: true,
    manufacturer: "uvex sports",
    category: "/wintersport/skihelme",
    isNew: true,
    attributes: [
      { key: "Type", value: "Helmet" },
      { key: "Category", value: "Racing sport" },
      { key: "Weight", value: "550g" },
    ],
  },
  {
    id: 4,
    title: "New in: Example prodcut",
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
    stock: 33,
    isAvailable: true,
    manufacturer: "uvex sports",
    category: "/wintersport/skihelme",
    isNew: true,
    attributes: [
      { key: "Type", value: "Helmet" },
      { key: "Category", value: "Racing sport" },
      { key: "Weight", value: "550g" },
    ],
  },
  {
    id: 5,
    title: "Another Product Title",
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
    stock: 33,
    isAvailable: false,
    manufacturer: "uvex sports",
    category: "/wintersport/skihelme",
    isNew: false,
    attributes: [
      { key: "Type", value: "Helmet" },
      { key: "Category", value: "Racing sport" },
      { key: "Weight", value: "550g" },
    ],
  },
];
