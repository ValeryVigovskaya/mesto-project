import Popup from '../components/Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._img = this._popupItem.querySelector('.popup__image');
    this._description = this._popupItem.querySelector('.popup__caption');
  }

  openPopup(data) {
    super.openPopup();
    this._img.src = data.link;
    this._description.alt = data.name;
    this._description.textContent = data.name;
  };
}






