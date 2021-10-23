import { Eventing } from './Eventing.js';

export class Collection {
  models = [];
  events = new Eventing();

  constructor(url, deserialize) {
    this.url = url;
    this.deserialize = deserialize;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    fetch(this.url)
      .then(response => response.json())
      .then(response => {
        response.docs.forEach(value => {
          const item = this.deserialize(value);
          this.models.push(item);
        });

        this.trigger('change');
      });
  }
}
