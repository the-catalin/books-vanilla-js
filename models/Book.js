import { Constants } from '../config/constants.js';
import { Attributes } from '../models/Attributes.js';
import { Eventing } from '../models/Eventing.js';
import { Model } from '../models/Model.js';

export class Book extends Model {
  static buildBook(jsonBook) {
    const attrs = this.format(jsonBook);
    return new Book(new Attributes(attrs), new Eventing());
  }

  static format(book) {
    const cover_url = Constants.openLibraryCover(book.cover_i);
    const title = book.title;
    let author = '';
    if (book.author_name) {
      author = book.author_name[0];
    }
    const html_link = Constants.openLibraryLink(book.key);

    return {
      cover_url,
      title,
      author,
      html_link,
    };
  }
}
