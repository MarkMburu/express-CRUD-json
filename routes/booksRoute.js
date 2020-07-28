/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
const router = require('express').Router();
const Book = require('../models/book_model');

router.route('/').get((req, res) => {
  Book.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const { isbn } = req.body;
  const { title } = req.body;
  const { publisher } = req.body;
  const { authors } = req.body;
  const  pages  = Number(req.body.pages);
  const year = Date.parse(req.body.year);

  const newBook = new Book({
    isbn,
    title,
    publisher,
    authors,
    pages,
    year,
  });

  newBook.save()
    .then(() => res.json('Book added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
router.route('/:id').get((req, res) => {
  Book.findById(req.params.id)
    .then((Book) => res.json(Book))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
router.route('/update/:id').patch((req, res) => {
  Book.findById(req.params.id)
    .then((Book) => {
      Book.isbn = req.body.isbn;
      Book.title = req.body.title;
      Book.publisher = req.body.publisher;
      Book.authors = req.body.authors;
      Book.pages = Number(req.body.pages);
      Book.year = Date.parse(req.body.year);
      Book.save()
        .then(() => res.json('Book updated'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
