import { BookView } from './BookView.js';
import { CollectionView } from './CollectionView.js';

export class BookListView extends CollectionView {
  template() {
    return `
    <div>
      <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:max-w-7xl px-4 sm:px-6 lg:px-8">

        <div id="preloader" style="display: none">
          <div class="flex justify-center items-center pt-24">
            <div class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
    
        <div id="content" class="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
        </div>

        <div id="no-results" style="display:none" class="text-white">No books found.</div>
      </div>
    </div>
    `;
  }

  renderItem(model, itemParent) {
    new BookView(itemParent, model);
  }
}
