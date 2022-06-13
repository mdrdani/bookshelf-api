const {
  createBook,
  showBook,
  detailBook,
  updateBook,
  deleteBook,
} = require('./handler');

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
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBook,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBook,
  },
];

module.exports = routes;
