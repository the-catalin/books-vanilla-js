import { Attributes } from './Attributes.js';
import { Eventing } from './Eventing.js';
import { Model } from './Model.js';

export class Search extends Model {
  static buildSearch() {
    const attrs = { search: '' };
    return new Search(new Attributes(attrs), new Eventing());
  }
}
