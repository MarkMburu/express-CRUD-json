const mongoose = require('mongoose');

const { Schema } = mongoose;
// isbn, title, authors, publisher, year, pages
const bookSchema = new Schema({
  isbn: { type: String, required: true },
  title: { type: String, required: true },
  publisher: { type: String, required: true },
  authors: { type: String, required: true },
  pages: { type: Number, required: true },
  year: { type: Date, required: true },
}, {
  timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
