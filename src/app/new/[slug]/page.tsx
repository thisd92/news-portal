import { Article as ArticleType } from "@/components/article/types";
import Article from "@/components/article";
import { NewsDetailsProps } from "./types";
import { generateSlug } from "@/utils/generateSlug";
import Link from "next/link";

async function fetchArticleBySlug(slug: string): Promise<ArticleType | null> {
  try {
    const response = await fetch("http://localhost:3000/api/news");
    const data = await response.json();
    const article = data.articles.find(
      (article: ArticleType) => generateSlug(article.title) === slug
    );
    return article;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

async function NewsDetails({ params }: NewsDetailsProps) {
  const { slug } = params;

  const article = await fetchArticleBySlug(slug);
  return (
    <>
      <Link
        href={`/`}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Voltar
      </Link>
      <div className="container mx-auto px-4">
        {article && <Article article={article} />}
      </div>
    </>
  );
}

export default NewsDetails;
