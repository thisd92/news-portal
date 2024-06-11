import Image from "next/image";
import { FeaturedNewsProps } from "./types";
import { generateSlug } from "@/utils/generateSlug";
import Link from "next/link";

function FeaturedNews({ article }: FeaturedNewsProps) {
  const slug = generateSlug(article.title);
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
      <Link href={`/new/${slug}`}>
        <img
          src={article.image}
          alt={article.title}
          className="mb-4 rounded-md"
          width={800}
          height={800}
        />
      </Link>
      <p className="text-lg text-gray-700 line-clamp-3">
        {article.description}
      </p>
    </div>
  );
}

export default FeaturedNews;
