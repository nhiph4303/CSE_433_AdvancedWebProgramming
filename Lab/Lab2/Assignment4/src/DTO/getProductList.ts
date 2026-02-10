import type { Product } from "./Product";
import { ProductListData } from "../DAO/ProductListData";

export function getProductList(): Product[] {
  return ProductListData;
}
