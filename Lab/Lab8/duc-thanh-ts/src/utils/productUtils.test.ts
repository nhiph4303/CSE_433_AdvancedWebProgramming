import {
  calculateInventoryValue,
  filterByCategory,
  validateProductPrice,
} from "./productUtils";
import type { ProductInfo } from "./productUtils";

describe("productUtils", () => {
  const mockProducts: ProductInfo[] = [
    { id: 1, title: "Product A", price: 100, stock: 2, categoryId: 1 },
    { id: 2, title: "Product B", price: 200, stock: 3, categoryId: 2 },
    { id: 3, title: "Product C", price: 150, stock: 1, categoryId: 1 },
  ];

  describe("calculateInventoryValue", () => {
    it("should return the correct total value (price * stock sum) using toBe()", () => {
      // 100*2 + 200*3 + 150*1 = 200 + 600 + 150 = 950
      const total = calculateInventoryValue(mockProducts);
      expect(total).toBe(950);
    });

    it("should return 0 for an empty array using toBe()", () => {
      const total = calculateInventoryValue([]);
      expect(total).toBe(0);
    });
  });

  describe("filterByCategory", () => {
    it("should return a subset of products matching the given ID using toEqual()", () => {
      const result = filterByCategory(mockProducts, 1);
      const expected = [
        { id: 1, title: "Product A", price: 100, stock: 2, categoryId: 1 },
        { id: 3, title: "Product C", price: 150, stock: 1, categoryId: 1 },
      ];
      // toEqual performs a deep comparison
      expect(result).toEqual(expected);
    });
  });

  describe("validateProductPrice", () => {
    it("should return true if the price is greater than 0", () => {
      expect(validateProductPrice(200)).toBe(true);
    });

    it("should throw an error if price is 0 or less using toThrow()", () => {
      expect(() => validateProductPrice(0)).toThrow();
      expect(() => validateProductPrice(-50)).toThrow("Invalid price: Price must be greater than 0");
    });
  });
});
