import { Product as IProduct } from "@/interfaces";

export const products: IProduct[] = [
  {
    id: 1,
    title: "Example Product",
    variants: [
      {
        id: 1,
        option: "Small",
        description: "This is a variant description",
        price: 19.99,
        stock: 10,
      },
      { id: 2, option: "Medium", price: 24.99, stock: 15 },
      { id: 3, option: "Large", price: 29.99, stock: 0 },
    ],
    images: [
      "/product/uvex-invictus-MIPS-0.jpg",
      "/product/uvex-invictus-MIPS-1.jpg",
      "/product/uvex-invictus-MIPS-2.jpg",
      "/product/uvex-invictus-MIPS-3.jpg",
    ],
    stock: 33, // Total stock for all variants (10 + 15 + 8)
    isAvailable: true, // Product is available
    manufacturer: "uvex sports",
    category: "/wintersport/skihelme",
    isNew: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    attributes: [
      { key: "Type", value: "Helmet" },
      { key: "Category", value: "Racing sport" },
      { key: "Weight", value: "550g" },
    ],
    rating: 4,
  },
  {
    id: 2,
    title: "Next Example Product",
    variants: [
      { id: 1, option: "Small", price: 19.99, stock: 10 },
      { id: 2, option: "Medium", price: 24.99, stock: 15 },
      { id: 3, option: "Large", price: 29.99, stock: 8 },
    ],
    images: [
      "/product/uvex-invictus-MIPS-0.jpg",
      "/product/uvex-invictus-MIPS-1.jpg",
      "/product/uvex-invictus-MIPS-2.jpg",
      "/product/uvex-invictus-MIPS-3.jpg",
    ],
    stock: 33,
    isAvailable: true,
    manufacturer: "uvex sports",
    category: "/wintersport/skihelme",
    isNew: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    attributes: [
      { key: "Type", value: "Helmet" },
      { key: "Category", value: "Racing sport" },
      { key: "Weight", value: "550g" },
    ],
    rating: 1,
  },
  {
    id: 3,
    title: "Example product – 3",
    variants: [
      { id: 1, option: "Small", price: 19.99, stock: 10 },
      { id: 2, option: "Medium", price: 24.99, stock: 15 },
      { id: 3, option: "Large", price: 29.99, stock: 8 },
    ],
    images: [
      "/product/uvex-invictus-MIPS-0.jpg",
      "/product/uvex-invictus-MIPS-1.jpg",
      "/product/uvex-invictus-MIPS-2.jpg",
      "/product/uvex-invictus-MIPS-3.jpg",
    ],
    stock: 33,
    isAvailable: true,
    manufacturer: "uvex sports",
    category: "/wintersport/skihelme",
    isNew: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    attributes: [
      { key: "Type", value: "Helmet" },
      { key: "Category", value: "Racing sport" },
      { key: "Weight", value: "550g" },
    ],
    rating: 5,
  },
  {
    id: 4,
    title: "New in: Example prodcut",
    variants: [
      { id: 1, option: "Small", price: 19.99, stock: 10 },
      { id: 2, option: "Medium", price: 24.99, stock: 15 },
      { id: 3, option: "Large", price: 29.99, stock: 8 },
    ],
    images: [
      "/product/uvex-invictus-MIPS-0.jpg",
      "/product/uvex-invictus-MIPS-1.jpg",
      "/product/uvex-invictus-MIPS-2.jpg",
      "/product/uvex-invictus-MIPS-3.jpg",
    ],
    stock: 33,
    isAvailable: true,
    manufacturer: "uvex sports",
    category: "/wintersport/skihelme",
    isNew: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    attributes: [
      { key: "Type", value: "Helmet" },
      { key: "Category", value: "Racing sport" },
      { key: "Weight", value: "550g" },
    ],
    rating: 2,
  },
  {
    id: 5,
    title: "Another Product Title",
    variants: [
      { id: 1, option: "Small", price: 19.99, stock: 10 },
      { id: 2, option: "Medium", price: 24.99, stock: 15 },
      { id: 3, option: "Large", price: 29.99, stock: 8 },
    ],
    images: [
      "/product/uvex-invictus-MIPS-0.jpg",
      "/product/uvex-invictus-MIPS-1.jpg",
      "/product/uvex-invictus-MIPS-2.jpg",
      "/product/uvex-invictus-MIPS-3.jpg",
    ],
    stock: 33,
    isAvailable: false,
    manufacturer: "uvex sports",
    category: "/wintersport/skihelme",
    isNew: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    attributes: [
      { key: "Type", value: "Helmet" },
      { key: "Category", value: "Racing sport" },
      { key: "Weight", value: "550g" },
    ],
    rating: 3,
  },
];

/**
 * export async function getProducts(): Promise<IProduct[]> {
 *   const res = await fs.readFile(
 *     process.cwd() + "/public/products.json",
 *     "utf8",
 *   );
 *   return JSON.parse(res);
 * }
 * */
