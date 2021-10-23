// abstract class
export class CollectionView {
  constructor(parent, collection) {
    this.parent = parent;
    this.collection = collection;

    this.bindPreloader();
  }

  // abstract method
  template() {}

  // abstract method
  renderItem(model, itemParent) {}

  render() {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    for (let model of this.collection.models) {
      const itemParent = document.createElement('template');
      this.renderItem(model, itemParent.content);
      templateElement.content.querySelector('#content').append(itemParent.content);
    }

    this.parent.append(templateElement.content);
  }

  bindPreloader() {
    console.log('binding preloader');
    this.collection.on('loading', () => {
      console.log('loading');
      this.parent.querySelector('#preloader').style.display = 'block';
    });

    this.collection.on('loaded', () => {
      console.log('loaded');
      this.parent.querySelector('#preloader').style.display = 'none';
    });
  }
}
