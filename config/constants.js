export class Constants {
  static openLibraryCover(imageName) {
    return `http://covers.openlibrary.org/b/id/${imageName}-M.jpg`;
  }

  static openLibraryLink(bookKey) {
    return `https://openlibrary.org${bookKey}`;
  }

  static booksUrl = 'http://openlibrary.org/search.json?title=the+lord+of+the+rings';
}
