import { generateSlug } from "@/utils/generateSlug";
import { ArticleProps } from "./types";
import Link from "next/link";

function Article({ article }: ArticleProps) {
  

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      {article.image && (
        
          <img
            src={article.image}
            alt={article.title}
            className="mb-4 rounded-md"
          />
      )}
      <p className="text-lg text-gray-700 mb-4">{article.content}</p>
      <div className="flex items-center text-gray-500">
        {article.author && <p>Autor: {article.author}</p>}
        {article.author && article.publishedAt && (
          <span className="mx-2">•</span>
        )}
        {article.publishedAt && (
          <p>
            Data de Publicação:{" "}
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
}

export default Article;
