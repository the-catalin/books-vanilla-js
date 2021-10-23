import { View } from './View.js';

export class BookView extends View {
  template() {
    return `
      <a href="${this.model.get('html_link')}" class="group">
        <div class="w-full aspect-w-7 aspect-h-10 bg-gray-200 rounded-lg overflow-hidden">
          <img class="w-full h-full object-center object-cover group-hover:opacity-75"
            src="${this.model.get('cover_url')}">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">
          ${this.model.get('title')}
        </h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
          ${this.model.get('author')}
        </p>
      </a>
    `;
  }
}
