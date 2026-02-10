import type { ProductDataForHomePage } from "../models/ProductData";

export function getProductListByCategoryId(
  categoryId: number,
): Promise<ProductDataForHomePage[]> {
  console.log(categoryId);
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            thumbnail: "/assets/1.png",
            summary: "Ghế công thái học",
            title: "Ghế công thái học màu trắng",
            price: "1.500.000",
          },
          {
            id: 2,
            thumbnail: "/assets/1.png",
            summary: "Ghế công thái học 2",
            title: "Ghế công thái học màu trắng",
            price: "1.550.000",
          },
          {
            id: 3,
            thumbnail: "/assets/152319bf915b118cddf8d40ea0dace49.jpg",
            summary: "Ghế công thái học 3",
            title: "Ghế công thái học màu đen",
            price: "3.550.000",
          },
          {
            id: 4,
            thumbnail: "/assets/152319bf915b118cddf8d40ea0dace49.jpg",
            summary: "Ghế công thái học 4",
            title: "Ghế công thái học màu đen",
            price: "3.550.000",
          },
        ]),
      100,
    ),
  );
}
