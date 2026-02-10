import type { News } from "./News";
import { NewsListData } from "../DAO/NewsListData";

export function getNewsList(): News[] {
  return NewsListData;
}
