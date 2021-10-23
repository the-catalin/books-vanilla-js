// abstract class
export class View {
  constructor(parent, model) {
    this.parent = parent;
    this.model = model;
    this.bindModel();
  }

  // abstract method
  template() {
    throw new Error('You must provide a template');
  }

  bindModel() {
    this.model.on('change', () => {
      this.render();
    });
  }

  render() {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
