import FeedComponent from "./Feed.component";
import { get } from "@/api/articles";
import logger from "@/utils/logger.util";

import { useState, useEffect } from "react";

export default function Feed() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await get();
        setArticles(articles);
      } catch (error) {
        logger.error(`Failed to fetch articles ${error}`);
      }
    };
    fetchArticles();
  });
  return (
    <>
      <FeedComponent articles={articles} />
    </>
  );
}
