import type {
  ProductDataForHomePage,
  ProductData,
} from "../models/ProductData";

const allProducts: ProductData[] = [
  {
    id: 1,
    thumbnail: "/assets/1.png",
    summary: "Ghế công thái học màu trắng.",
    title: "Ghế Pro White G1",
    price: "1.500.000",
    description: "...",
    stock: 10,
    categoryId: 1,
  },
  {
    id: 2,
    thumbnail: "/assets/1.png",
    summary: "Laptop Dell Vostro mỏng nhẹ.",
    title: "Dell Vostro 3520",
    price: "15.550.000",
    description: "...",
    stock: 5,
    categoryId: 1,
  },
  {
    id: 3,
    thumbnail: "/assets/152319bf915b118cddf8d40ea0dace49.jpg",
    summary: "Ghế Gaming Extreme.",
    title: "Ghế Gaming G2",
    price: "3.550.000",
    description: "...",
    stock: 8,
    categoryId: 2,
  },
  {
    id: 4,
    thumbnail: "/assets/152319bf915b118cddf8d40ea0dace49.jpg",
    summary: "Màn hình LG 24 inch.",
    title: "LG 24MP60G",
    price: "3.250.000",
    description: "...",
    stock: 12,
    categoryId: 3,
  },
  {
    id: 5,
    thumbnail: "/assets/1.png",
    summary: "PC Gaming mạnh mẽ.",
    title: "PC Gaming DT01",
    price: "18.000.000",
    description: "...",
    stock: 4,
    categoryId: 1,
  },
  {
    id: 6,
    thumbnail: "/assets/1.png",
    summary: "Màn hình Dell 27 inch.",
    title: "Dell U2723QE",
    price: "12.500.000",
    description: "...",
    stock: 5,
    categoryId: 1,
  },
];

export function getProductListByCategoryId(
  categoryId: number,
): Promise<ProductDataForHomePage[]> {
  console.log("Fetching for category:", categoryId);
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(allProducts.slice(0, 4));
    }, 200),
  );
}

export function searchProducts(
  query: string,
): Promise<ProductDataForHomePage[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      const q = query.toLowerCase().trim();
      const results = allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q),
      );
      resolve(results);
    }, 300),
  );
}
