import { Attributes } from './Attributes.js';
import { Eventing } from './Eventing.js';
import { Model } from './Model.js';

export class Nav extends Model {
  static buildNav() {
    const attrs = { collapsed: true };
    return new Nav(new Attributes(attrs), new Eventing());
  }
}
