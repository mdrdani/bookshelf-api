const { createBook, showBook } = require('./handler');

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
];

module.exports = routes;
