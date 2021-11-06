import { View } from './View.js';
import { Search } from '../models/Search.js';
import { SearchView } from '../views/SearchView.js';
import { booksModel } from '../index.js';
import { Constants } from '../config/constants.js';
import { Utils } from '../config/utils.js';

export class NavView extends View {
  eventsMap() {
    return {
      'click:#menu': this.onMenuClick.bind(this),
    };
  }

  onMenuClick() {
    const collapsed = this.model.get('collapsed');
    this.model.set({ collapsed: !collapsed });
  }

  attachElements() {
    const searchModel = Search.buildSearch();
    const searchElement = document.getElementById('search');
    new SearchView(searchElement, searchModel);

    searchModel.on('change', () => {
      const searchText = searchModel.get('search');

      const url = Constants.booksUrl + Utils.friendlyUrl(searchText);

      booksModel.fetch(url);
    });
  }

  template() {
    return `
      <div class="bg-black">
        <nav class="flex items-center justify-between flex-wrap py-3 max-w-2xl mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="block lg:hidden">
            <button id="menu" class="flex items-center py-2 text-teal-200 hover:text-white hover:border-white">
              <img src="img/menu.png" alt="menu icon" />
            </button>
          </div>
          <div class="flex items-center flex-shrink-0 text-white lg:mr-16 w-36 lg:w-44">
            <span class="font-light text-4xl tracking-tight"><img src="img/aubook-logo.jpg" alt="Aubook logo" /></span>
          </div>
          <div class="block lg:hidden w-8">
            <img src="img/profile.png" alt="profile" />
          </div>
          <div id="links" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            this.model.get('collapsed') ? 'invisible h-0' : 'visible h-auto'
          } lg:visible lg:h-auto">
            <div class="text-lg font-normal lg:flex-grow">
              <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white mr-8">Books</a>
              <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white mr-8">Authors</a>
              <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 text-white">Blogs</a>
            </div>
            <div id="search" class="mr-5"></div>
            <img src="img/profile.png" alt="profile" class="hidden lg:block" />
          </div>
        </nav>
      </div>
    `;
  }
}
