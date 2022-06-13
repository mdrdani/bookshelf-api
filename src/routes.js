const { createBook, showBook, detailBook } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: createBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showBook,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: detailBook,
  },
];

module.exports = routes;
