import { Article } from "@/components/article/types";
import { Key } from "react";
import { NewsCard } from "@/components/news-card";
import { NewsResponse } from "@/app/api/types";
import FeaturedNews from "@/components/featured-new";

async function fetchArticles() {
  try {
    const response = await fetch("http://localhost:3000/api/news");
    const data: NewsResponse = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}
async function HomePage() {
  const articles = await fetchArticles();
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <>
      <FeaturedNews article={featuredArticle} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {remainingArticles &&
          remainingArticles.map((article: Article, index: Key) => (
            <NewsCard key={index} article={article} />
          ))}
      </div>
    </>
  );
}

export default HomePage;
