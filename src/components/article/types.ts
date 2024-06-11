export interface Article {
  title: string;
  description: string;
  image?: string;
  content?: string;
  author?: string;
  publishedAt?: string;
}

export interface ArticleProps {
  article: Article;
}
