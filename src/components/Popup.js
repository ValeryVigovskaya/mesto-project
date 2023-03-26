import {
  popups
} from './variables.js'

export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._popupItem = document.querySelector(popupSelector)
  }

  openPopup() {
    this._popupItem.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose)
  }

  closePopup() {
    this._popupItem.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened')
      this.closePopup(openedPopup)
    }
  }

  setEventListeners() {
    popups.forEach(() => {
      this._popupItem.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
          this.closePopup(this._popupItem)
        }
        if (evt.target.classList.contains('popup__toggle-image') || evt.target.classList.contains('popup__figure-toggle-image')) {
          this.closePopup(this._popupItem)
        }
      })
    })
  }
}
