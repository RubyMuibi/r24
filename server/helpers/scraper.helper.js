const logger = require("@/utils/logger.util");
const Parser = require("rss-parser");
const { findArticle, addArticle } = require("@/managers/articles.manager");

let parser = new Parser();

async function scrape(url, category) {
  try {
    let feed = await parser.parseURL(url);

    for (let item of feed.items) {
      const title = item.title;
      const source = item.link;
      const savedAt = new Date();

      const articleData = {
        title,
        category: category,
        source,
        savedAt,
        upvotes: 0,
      };

      const existingArticle = await findArticle(articleData.source);

      if (!existingArticle) {
        addArticle(articleData);
      }
    }
  } catch (error) {
    logger.error(`scrape helepr: Error scraping articles :- ${error}`);
  }
}

module.exports = scrape;