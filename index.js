const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const url = process.env.MONGO_URL;
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// connecting to mongodb atlas asynchoronously
(async () => {
  try {
    await mongoose.connect(url, dbOptions);
    console.log('connected to the database');
  } catch (err) {
    console.log(`error:  ${err}`);
  }
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Running on localhost',
  });
});

// page not found error handler
const notFound = (req, res, next) => {
  const error = new Error(`Page Not found -${req.originalUrl}`);
  res.status(404);
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
  });
};
module.exports = {
  notFound,
  errorHandler,
};

const BooksRouter = require('./routes/booksRoute');

app.use('/api/books/', BooksRouter);
const CartRouter = require('./routes/cartRoute');

app.use('/api/cart/', CartRouter);

app.listen(port, () => console.log(`Listening on Port ${port}`));
