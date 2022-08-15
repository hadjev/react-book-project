const books = require('./all-books.json');

const filteredBooks = books
    .filter((x) => x.saleInfo.saleability !== 'NOT_FOR_SALE')
    .filter((x) => x.volumeInfo.industryIdentifiers !== undefined)
    .map((book) => {
        if (!book.volumeInfo.industryIdentifiers) {
            return;
        }

        return {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            publisher: book.volumeInfo.publisher,
            publishedDate: book.volumeInfo.publishedDate,
            description: book.volumeInfo.description,
            isbn: book.volumeInfo.industryIdentifiers[0].identifier,
            pageCount: book.volumeInfo.pageCount,
            categories: book.volumeInfo.categories,
            imageUrl: book.volumeInfo.imageLinks.thumbnail,
            price: book.saleInfo.listPrice.amount,
            snippet: book.searchInfo.textSnippet,
        };
    });

const mongoose = require('mongoose');
const Book = require('../models/bookModel');

const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/books');
        await Book.deleteMany();
        await Book.create(filteredBooks);
        console.log('Success!!!!');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();
