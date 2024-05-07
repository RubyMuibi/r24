const Article = require("@/models/article.model");

exports.findAll = async () => {
  try {
    const articles = await Article.find();
    return articles;
  } catch (error) {
    throw new Error(`findAll: Error fetching articles:- ${error}`);
  }
};

exports.findArticleBySource = async (source) => {
  try {
    const article = await Article.findOne({ source: source });
    return article;
  } catch (error) {
    throw new Error(
      `findArticleBySource: Error finding article by source:- ${error}`
    );
  }
};

exports.create = async (articleData) => {
  try {
    const article = new Article(articleData);
    await article.save();
    return article;
  } catch (error) {
    throw new Error(`create: Error adding article:  ${error}`);
  }
};
