const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: String,
    authors: [],
    publisher: String,
    publishedDate: String,
    description: String,
    isbn: String,
    pageCount: Number,
    imageUrl: String,
    price: Number,
    stars: Number,
    reviews: Number,
});

module.exports = model('Book', bookSchema);
