import { BookView } from './BookView.js';
import { CollectionView } from './CollectionView.js';

export class BookListView extends CollectionView {
  template() {
    return `
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl mb-10 font-extrabold tracking-tight text-gray-900">Browse the books</h2>

        <div id="preloader" style="display: none">
          <div class="flex justify-center items-center pt-24">
            <div class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
    
        <div id="content" class="grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-8">
        </div>

        <div id="no-results" style="display:none">No books found.</div>
      </div>
    </div>
    `;
  }

  renderItem(model, itemParent) {
    new BookView(itemParent, model);
  }
}
