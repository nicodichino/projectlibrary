//Creacion de las rutas que van a usar los libros

const express = require('express');
const router = express.Router();
const passport = require('passport');
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/books');

router.get('/', getAllBooks);
router.get('/:libraryId/books/:bookId', getBookById);
router.post('/:libraryId/books', passport.authenticate('jwt', { session: false }), createBook);
router.put(
  '/:libraryId/books/:bookId',
  passport.authenticate('jwt', { session: false }),
  updateBook
);
router.delete(
  '/:libraryId/books/:bookId',
  passport.authenticate('jwt', { session: false }),
  deleteBook
);

module.exports = router;

