import Link from "next/link";
import { NewsCardProps } from "./types";
import { Suspense } from "react";
import Image from "next/image";
import { generateSlug } from "@/utils/generateSlug";

function NewsCard({ article }: NewsCardProps) {
  const slug = generateSlug(article.title);
  return (
    <Link
      href={`/new/${slug}`}
      className="border border-gray-200 p-4 rounded-md transition duration-300 hover:shadow-lg block mb-4"
    >
      <img
        src={article.image}
        alt={article.title}
        className="mb-4 rounded-md"
        width={200}
        height={200}
      />
      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
      <p className="text-gray-600 line-clamp-3">{article.description}</p>
    </Link>
  );
}

export { NewsCard };
