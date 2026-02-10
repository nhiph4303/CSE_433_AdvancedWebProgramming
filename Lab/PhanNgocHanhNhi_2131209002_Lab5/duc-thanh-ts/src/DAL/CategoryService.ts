import type { CategoryData } from "../models/CategoryData";

export const mockCategories: CategoryData[] = [
  {
    id: 1,
    categoryName: "Laptop",
    description: "Máy tính xách tay các loại",
    createdAt: "2025-01-10",
    createdById: 101,
  },
  {
    id: 2,
    categoryName: "Máy bộ",
    description: "PC văn phòng và Gaming",
    createdAt: "2025-01-12",
    createdById: 101,
  },
  {
    id: 3,
    categoryName: "Màn hình",
    description: "Màn hình LCD, LED, 4K",
    createdAt: "2025-01-15",
    createdById: 102,
  },
  {
    id: 4,
    categoryName: "Gear",
    description: "Chuột, phím, tai nghe",
    createdAt: "2025-01-20",
    createdById: 103,
  },
  {
    id: 5,
    categoryName: "Camera",
    description: "Camera giám sát an ninh",
    createdAt: "2025-01-22",
    createdById: 101,
  },
];
