import { Constants } from './config/constants.js';
import { Utils } from './config/utils.js';
import { Book } from './models/Book.js';
import { Collection } from './models/Collection.js';
import { Nav } from './models/Nav.js';
import { Search } from './models/Search.js';
import { BookListView } from './views/BookListView.js';
import { NavView } from './views/NavView.js';
import { SearchView } from './views/SearchView.js';

/*
 * Navigation
 */
const navModel = Nav.buildNav();
const navElement = document.getElementById('nav');
new NavView(navElement, navModel);

/*
 * Books collection
 */
export const booksModel = new Collection(jsonObj => {
  return Book.buildBook(jsonObj);
});
const booksElement = document.getElementById('content');
new BookListView(booksElement, booksModel);

// /*
//  * Search
//  */
const searchModel = Search.buildSearch();
const searchElement = document.getElementById('search');
new SearchView(searchElement, searchModel);

searchModel.on('change', () => {
  const searchText = searchModel.get('search');

  const url = Constants.booksUrl + Utils.friendlyUrl(searchText);

  booksModel.fetch(url);
});

// Optional: initialize search search
searchModel.set({ search: 'The Lord of The Rings' });
