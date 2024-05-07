const {
  findAll,
  findArticleBySource,
  create,
} = require("@/data/articles.data");

exports.findArticles = async () => {
  try {
    const articles = await findAll();
    return articles;
  } catch (error) {
    throw new Error(`findAllArticle Error fetching articles :- ${error}`);
  }
};

exports.findArticle = async (source) => {
  try {
    const article = await findArticleBySource(source);
    return article;
  } catch (error) {
    throw new Error(`findArticleBySource Error fetching article :- ${error}`);
  }
};

exports.addArticle = async (articleData) => {
  try {
    const article = await create(articleData);
    await article.save();
    return article;
  } catch (error) {
    throw new Error(`addArticle Error adding article :- ${error}`);
  }
};
