const mongoose = require('mongoose');
const Book = require('../models/bookModel');

const data = require('./all-books.json');

const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/books');
        await Book.deleteMany();
        await Book.create(data);
        console.log('Success!!!!');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();
