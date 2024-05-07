const { findArticles, addArticle } = require("@/managers/articles.manager");

exports.GET = async (req, res) => {
  try {
    const article = await findArticles();
    res.status(200).json(article);
  } catch (error) {
    res.status(500).send(`GET ARTICLE: Error getting all articles :- ${error}`);
  }
};

exports.POST = async (req, res) => {
  try {
    const { articleData } = req.body;
    const article = await addArticle(articleData);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).send(`POST ARTICLE: Error adding article :- ${error}`);
  }
};