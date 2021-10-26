import { Eventing } from './Eventing.js';

export class Collection {
  models = [];
  events = new Eventing();

  constructor(deserialize) {
    this.deserialize = deserialize;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(url) {
    this.models = [];
    this.trigger('loading');

    fetch(url)
      .then(response => response.json())
      .then(response => {
        response.docs.forEach(value => {
          const item = this.deserialize(value);
          this.models.push(item);
        });

        this.trigger('change');
        this.trigger('loaded');
      });
  }
}
