// abstract class
export class CollectionView {
  templateElement;

  constructor(parent, collection) {
    this.parent = parent;
    this.collection = collection;

    this.render();
    this.bindModel();
    this.bindPreloader();
    this.hide();
  }

  // abstract method
  template() {}

  // abstract method
  renderItem(model, itemParent) {}

  show() {
    this.parent.style.display = 'block';
  }
  hide() {
    this.parent.style.display = 'none';
  }

  render() {
    this.parent.innerHTML = '';

    this.templateElement = document.createElement('template');
    this.templateElement.innerHTML = this.template();

    this.parent.append(this.templateElement.content);
  }

  bindPreloader() {
    this.collection.on('loading', () => {
      this.parent.querySelector('#preloader').style.display = 'block';
    });

    this.collection.on('loaded', () => {
      this.parent.querySelector('#preloader').style.display = 'none';
    });
  }

  bindModel() {
    this.collection.on('change', () => {
      this.renderCollection();
    });
    this.collection.on('loading', () => {
      this.show();
      this.render();
    });
  }

  renderCollection() {
    this.parent.innerHTML = '';

    this.templateElement = document.createElement('template');
    this.templateElement.innerHTML = this.template();

    for (let model of this.collection.models) {
      const itemParent = document.createElement('template');
      this.renderItem(model, itemParent.content);
      this.templateElement.content.querySelector('#content').append(itemParent.content);
    }

    if (!this.collection.models.length) {
      this.templateElement.content.querySelector('#no-results').style.display = 'block';
    } else {
      this.templateElement.content.querySelector('#no-results').style.display = 'none';
    }

    this.parent.append(this.templateElement.content);
  }
}
