const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: String,
  authors: [],
  publisher: String,
  publishedDate: String,
  description: String,
  isbn: String,
  pageCount: Number,
  categories: [],
  imageUrl: String,
  price: Number,
  snippet: String,
  stars: Number,
  reviews: Number,
});

module.exports = model("Book", bookSchema);
