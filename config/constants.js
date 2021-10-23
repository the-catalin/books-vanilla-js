export class Constants {
  static openLibraryCover(imageName) {
    return `https://covers.openlibrary.org/b/id/${imageName}-M.jpg`;
  }

  static openLibraryLink(bookKey) {
    return `https://openlibrary.org${bookKey}`;
  }

  static booksUrl = 'https://openlibrary.org/search.json?title=';
}
