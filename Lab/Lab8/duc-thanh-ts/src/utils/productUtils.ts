export type ProductInfo = {
  id: number;
  title: string;
  price: number;
  stock: number;
  categoryId: number;
};

// 1. Calculate Total Inventory Value
export const calculateInventoryValue = (products: ProductInfo[]): number => {
  if (!products || products.length === 0) {
    return 0;
  }
  return products.reduce((total, product) => total + product.price * product.stock, 0);
};

// 2. Filter Products by Category
export const filterByCategory = (
  products: ProductInfo[],
  categoryId: number
): ProductInfo[] => {
  return products.filter((product) => product.categoryId === categoryId);
};

// 3. Data Validation
export const validateProductPrice = (price: number): boolean => {
  if (price > 0) {
    return true;
  }
  throw new Error("Invalid price: Price must be greater than 0");
};
