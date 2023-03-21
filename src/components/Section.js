/* Отвечает за отрисовку элементов на странице */
import {elementsList} from '../components/variables.js'
export default class Section {
  constructor({ item, renderer }, elementsList) {
    this._renderedItems = item;
    this._renderer = renderer;

    this._container = elementsList;
  }

  setItem(element) {
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems() {
    this.clear();

    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}



