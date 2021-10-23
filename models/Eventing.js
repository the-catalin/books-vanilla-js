export class Eventing {
  events = {};

  on = (eventName, callback) => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = eventName => {
    const handlers = this.events[eventName];

    if (!handlers || !handlers.length) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  };
}
