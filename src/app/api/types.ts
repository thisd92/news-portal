import { Article } from "@/app/components/article/types";

export interface NewsResponse {
  articles: Article[];
  status: string;
  totalResults: number;
}
