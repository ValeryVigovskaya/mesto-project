export default class Section {
  constructor({
    items,
    renderer
  }, selector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  addItem(element) {
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems() {
    this.clear();
    this._renderedItems.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
      return element;
    });
  }
}
