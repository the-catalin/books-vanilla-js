export class Model {
  constructor(attributes, events) {
    this.attributes = attributes;
    this.events = events;
  }

  get(key) {
    return this.attributes.get(key);
  }

  set(update) {
    this.attributes.set(update);

    this.trigger('change');
  }

  on(event, callback) {
    return this.events.on(event, callback);
  }

  trigger(event) {
    return this.events.trigger(event);
  }
}
