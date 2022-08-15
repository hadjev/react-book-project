const express = require('express');
const router = express.Router();

const {
    getAllBooks,
    getSingleBook,
    createBook,
    updateBook,
    deleteBook,
} = require('../controllers/booksController');

router.route('/').get(getAllBooks).post(createBook);
router.route('/:isbn').get(getSingleBook).put(updateBook).delete(deleteBook);

module.exports = router;
