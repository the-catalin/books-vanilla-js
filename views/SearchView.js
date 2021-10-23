import { View } from './View.js';

export class SearchView extends View {
  eventsMap() {
    return {
      'click:.submit': this.onSubmitClick.bind(this),
    };
  }

  onSubmitClick() {
    const input = this.parent.querySelector('input');

    const searchText = input.value;

    this.model.set({ searchText });
  }

  template() {
    return `
    <div class="max-w-2xl mx-auto py-16 pb-0 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl mb-10 font-extrabold tracking-tight text-gray-900">Search books</h2>
    </div>

    <div class="max-w-2xl mx-auto pb-0 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <input
        type="text"
        id="text"
        value="The Lord of The Rings"
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        class="submit inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
      >
        Search
      </button>
    </div>
    `;
  }
}
