// abstract class
export class View {
  constructor(parent, model) {
    this.parent = parent;
    this.model = model;
    this.render();
    this.bindModel();
  }

  // abstract method
  template() {
    throw new Error('You must provide a template');
  }

  // abstract method
  attachElements() {}

  eventsMap() {
    return {};
  }

  bindModel() {
    this.model.on('change', () => {
      this.render();
    });
  }

  bindEvents(fragment) {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render() {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);

    this.attachElements();
  }
}
