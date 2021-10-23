export class Attributes {
  constructor(data) {
    this.data = data;
  }

  get(key) {
    return this.data[key];
  }

  set(update) {
    this.data = {
      ...this.data,
      ...update,
    };
  }
}
