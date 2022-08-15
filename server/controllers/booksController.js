const Book = require('../models/bookModel');

const getAllBooks = async (req, res) => {
    const books = await Book.find();

    res.status(200).json({ books, items: books.length });
};

const createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);

        res.status(200).json({
            status: 'success',
            data: {
                book: newBook,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error,
        });
    }
};

const getSingleBook = async (req, res) => {
    const book = await Book.find({ isbn: req.params.isbn });
    console.log(req.params.isbn);
    console.log(book);

    res.status(200).json({ book });
};

const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findOneAndUpdate(
            { isbn: req.params.isbn },
            req.body,
            {
                new: true,
            }
        );

        res.status(200).json({
            status: 'success',
            data: {
                book: updatedBook,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error,
        });
    }
};

const deleteBook = async (req, res) => {
    try {
        await Book.findOneAndDelete({
            isbn: req.params.isbn,
        });

        res.status(200).json({
            status: 'book deleted',
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error,
        });
    }
};

module.exports = {
    getAllBooks,
    getSingleBook,
    createBook,
    updateBook,
    deleteBook,
};
