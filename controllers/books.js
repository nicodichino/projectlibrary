//Creando los controladores de los libros

const { Book, Library } = require('../models');

const getAllBooks = async (req, res) => {
  const { libraryId } = req.query;
  try {
    const books = await Book.findAll({ where: { LibraryId: libraryId } });
    res.json(books);
  } catch (error) {
    console.error('Error retrieving books:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getBookById = async (req, res) => {
  const { libraryId, bookId } = req.params;
  try {
    const book = await Book.findOne({ where: { id: bookId, LibraryId: libraryId } });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error('Error retrieving book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createBook = async (req, res) => {
  const { isbn, title, author, year, libraryId } = req.body;
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const book = await Book.create({ isbn, title, author, year, LibraryId: libraryId });
    res.json(book);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateBook = async (req, res) => {
  const { libraryId, bookId } = req.params;
  const { title, author, year } = req.body;
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const book = await Book.findOne({ where: { id: bookId, LibraryId: libraryId } });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    book.title = title;
    book.author = author;
    book.year = year;
    await book.save();
    res.json(book);
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteBook = async (req, res) => {
  const { libraryId, bookId } = req.params;
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const book = await Book.findOne({ where: { id: bookId, LibraryId: libraryId } });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    book.deleted = true;
    await book.save();
    res.json({ message: 'Book deleted' });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
}