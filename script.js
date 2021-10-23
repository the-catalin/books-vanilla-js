import { Constants } from './config/constants.js';
import { Book } from './models/Book.js';
import { Collection } from './models/Collection.js';
import { BookListView } from './views/BookListView.js';

const books = new Collection(Constants.booksUrl, json => {
  return Book.buildBook(json);
});

// a good place to see the collection structure:
console.log(books);

books.fetch();

books.on('change', () => {
  const content = document.getElementById('content');

  new BookListView(content, books).render();
});
