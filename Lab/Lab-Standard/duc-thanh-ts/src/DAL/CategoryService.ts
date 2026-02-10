import type { CategoryData } from "../models/CategoryData";
import type { Column } from "../models/TableTypes";

export const baseCategoryColumns: Column[] = [
  { header: "ID", accessor: "id" },
  { header: "Tên Danh Mục", accessor: "categoryName" },
  { header: "Mô tả", accessor: "description" },
  { header: "Ngày tạo", accessor: "createdAt" },
  { header: "Người tạo", accessor: "createdById" },
];

const mockCategories: CategoryData[] = [
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

export function getCategoryList(): Promise<CategoryData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCategories);
    }, 500);
  });
}

export function getCategoryDetail(id: number): Promise<CategoryData | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const category = mockCategories.find((c) => c.id === id);
      resolve(category || null);
    }, 500);
  });
}

export function addCategory(newCategory: CategoryData): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Add successfully!", newCategory);
      mockCategories.push(newCategory);
      resolve(true);
    }, 500);
  });
}
