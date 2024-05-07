const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  source: {
    type: String,
    required: true,
  },

  savedAt: {
    type: Date,
    required: true,
  },

  upvotes: {
    type: Number,
    required: true,
  },
});

const Article = model("articles", articleSchema);
module.exports = Article;
