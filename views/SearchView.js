import { View } from './View.js';

export class SearchView extends View {
  eventsMap() {
    return {
      'submit:#form': this.onSubmitForm.bind(this),
    };
  }

  onSubmitForm(event) {
    event.preventDefault();
    const input = this.parent.querySelector('input');
    const search = input.value;
    this.model.set({ search });
  }

  template() {
    return `
      <form id="form" class="pb-0 mt-4 relative">
        <span class="absolute inset-y-0 left-0 top-2 flex items-center pl-2">
          <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
            <svg fill="none" class="w-6 h-6"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.82555 0.333313C10.4056 0.333313 13.3176 3.24531 13.3176 6.82531C13.3176 8.51434 12.6694 10.0548 11.6087 11.211L13.6958 13.2938C13.8912 13.4891 13.8918 13.8051 13.6965 14.0004C13.5992 14.0991 13.4705 14.1478 13.3425 14.1478C13.2152 14.1478 13.0872 14.0991 12.9892 14.0018L10.8768 11.8953C9.7656 12.7852 8.35667 13.318 6.82555 13.318C3.24555 13.318 0.332886 10.4053 0.332886 6.82531C0.332886 3.24531 3.24555 0.333313 6.82555 0.333313ZM6.82555 1.33331C3.79689 1.33331 1.33289 3.79665 1.33289 6.82531C1.33289 9.85398 3.79689 12.318 6.82555 12.318C9.85355 12.318 12.3176 9.85398 12.3176 6.82531C12.3176 3.79665 9.85355 1.33331 6.82555 1.33331Z" fill="#C1C1C1"/></svg>
          </button>
        </span>
        <input
          type="text"
          id="search-input"
          placeholder="Search..."
          value="${this.model.get('search')}"
          class="shadow appearance-none rounded-xl bg-gray-800 text-gray-300 w-52 h-12 py-2 px-3 pl-9 leading-tight focus:outline-none focus:shadow-outline"
        />
        
      </form>
    `;
  }
}
