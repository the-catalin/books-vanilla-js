import { Constants } from './config/constants.js';
import { Utils } from './config/utils.js';
import { Book } from './models/Book.js';
import { Collection } from './models/Collection.js';
import { Search } from './models/Search.js';
import { BookListView } from './views/BookListView.js';
import { SearchView } from './views/SearchView.js';

const booksModel = new Collection(jsonObj => {
  return Book.buildBook(jsonObj);
});
const booksElement = document.getElementById('content');
new BookListView(booksElement, booksModel);

const searchModel = Search.buildSearch();
const searchElement = document.getElementById('search');
new SearchView(searchElement, searchModel);

searchModel.on('change', () => {
  const searchText = searchModel.get('search');

  const url = Constants.booksUrl + Utils.friendlyUrl(searchText);

  booksModel.fetch(url);
});

searchModel.set({ search: 'The Lord of The Rings' });
