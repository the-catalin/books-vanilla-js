import { Constants } from './config/constants.js';
import { Book } from './models/Book.js';
import { Collection } from './models/Collection.js';
import { Search } from './models/Search.js';
import { BookListView } from './views/BookListView.js';
import { SearchView } from './views/SearchView.js';

const books = new Collection(Constants.booksUrl, json => {
  return Book.buildBook(json);
});

const searchEl = document.getElementById('search');
const searchModel = Search.buildSearch();
const search = new SearchView(searchEl, searchModel);
search.render();
searchModel.on('change', () => {
  console.log('search changed: ' + searchModel.get('searchText'));
  const searchText = searchModel.get('searchText');

  books.fetch(searchText);
});

books.on('change', () => {
  // a good place to see the collection structure:
  console.log(books);

  const content = document.getElementById('content');

  new BookListView(content, books).render();
});
