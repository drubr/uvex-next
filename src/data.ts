import { Product } from "@/interfaces";
import { Filters } from "@/types";

/**
 * For a static data import, you can import the data dump "products" below into your file/ component
 *
 * If you want to fetch data from Server and for Server Components,
 * you can you the helper functions in `./lib/index.ts`
 *
 * `getData()`, `getProduct()`, `getProducts()`, ...
 *
 * Data file is located in `./public/data.json`
 *
 * So when you want to make changes to your products data,
 * make sure to adjust it in both places – here and in `./public/data.json`
 * */
export const products: Product[] = [
  {
    id: 1,
    title: "Example Product",
    variants: [
      {
        id: 1,
        title: "Small",
        description: "This is a variant description",
        price: 19.99,
        stock: 10,
      },
      { id: 2, title: "Medium", price: 24.99, stock: 15 },
      { id: 3, title: "Large", price: 29.99, stock: 0 },
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
    galleryImages: [],
  },
  {
    id: 2,
    title: "uvex evidnt ATTRACT",
    variants: [
      {
        id: 1,
        title: "purple bash matt",
        price: 19.99,
        stock: 10,
        images: [
          "/product/uvex-evidnt-ATTRACT-00-1.jpg",
          "/product/uvex-evidnt-ATTRACT-00-2.jpg",
          "/product/uvex-evidnt-ATTRACT-00-3.jpg",
          "/product/uvex-evidnt-ATTRACT-00-4.jpg",
        ],
      },
      {
        id: 2,
        title: "white matt – silver",
        price: 24.99,
        stock: 15,
        images: [
          "/product/uvex-evidnt-ATTRACT-01-1.jpg",
          "/product/uvex-evidnt-ATTRACT-01-2.jpg",
          "/product/uvex-evidnt-ATTRACT-01-3.jpg",
          "/product/uvex-evidnt-ATTRACT-01-4.jpg",
        ],
      },
      {
        id: 3,
        title: "white matt – pink",
        price: 29.99,
        stock: 8,
        images: [
          "/product/uvex-evidnt-ATTRACT-02-1.jpg",
          "/product/uvex-evidnt-ATTRACT-02-2.jpg",
          "/product/uvex-evidnt-ATTRACT-02-3.jpg",
          "/product/uvex-evidnt-ATTRACT-02-4.jpg",
        ],
      },
      {
        id: 3,
        title: "arctic blue matt",
        price: 29.99,
        stock: 8,
        images: [
          "/product/uvex-evidnt-ATTRACT-03-1.jpg",
          "/product/uvex-evidnt-ATTRACT-03-2.jpg",
          "/product/uvex-evidnt-ATTRACT-03-3.jpg",
          "/product/uvex-evidnt-ATTRACT-03-4.jpg",
        ],
      },
    ],
    images: [
      "/product/uvex-evidnt-ATTRACT-00-1.jpg",
      "/product/uvex-evidnt-ATTRACT-00-2.jpg",
      "/product/uvex-evidnt-ATTRACT-00-3.jpg",
      "/product/uvex-evidnt-ATTRACT-00-4.jpg",
    ],
    stock: 33,
    isAvailable: true,
    manufacturer: "uvex sports",
    category: "/wintersport/skibrille",
    isNew: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    attributes: [
      { key: "Type", value: "Gogglees" },
      { key: "Category", value: "Snowboarding" },
      { key: "Weight", value: "175g" },
    ],
    rating: 1,
    galleryImages: [
      "/product/uvex-evidnt-ATTRACT-gallery-00.jpg",
      "/product/uvex-evidnt-ATTRACT-gallery-01.jpg",
      "/product/uvex-evidnt-ATTRACT-gallery-02.jpg",
    ],
  },
  {
    id: 3,
    title: "Example product – 3",
    variants: [
      { id: 1, title: "Small", price: 19.99, stock: 10 },
      { id: 2, title: "Medium", price: 24.99, stock: 15 },
      { id: 3, title: "Large", price: 29.99, stock: 8 },
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
    galleryImages: [],
  },
  {
    id: 4,
    title: "New in: Example prodcut",
    variants: [
      { id: 1, title: "Small", price: 19.99, stock: 10 },
      { id: 2, title: "Medium", price: 24.99, stock: 15 },
      { id: 3, title: "Large", price: 29.99, stock: 8 },
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
    galleryImages: [],
  },
  {
    id: 5,
    title: "Another Product Title",
    variants: [
      { id: 1, title: "Small", price: 19.99, stock: 0 },
      { id: 2, title: "Medium", price: 24.99, stock: 0 },
      { id: 3, title: "Large", price: 29.99, stock: 0 },
    ],
    images: [
      "/product/uvex-invictus-MIPS-0.jpg",
      "/product/uvex-invictus-MIPS-1.jpg",
      "/product/uvex-invictus-MIPS-2.jpg",
      "/product/uvex-invictus-MIPS-3.jpg",
    ],
    stock: 0,
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
    galleryImages: [],
  },
];
export const filters: Filters = [
  [
    {
      category: "Availability",
    },
    [
      {
        key: "In stock",
        value: "In stock",
      },
    ],
  ],
];
