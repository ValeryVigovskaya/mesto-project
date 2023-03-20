import {popups} from './variables.js'

export default class Popup {
  constructor(popupSelector){
    this._popup = popupSelector;
  }
  openPopup(popup) {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape)
  }
  closePopup(popup) {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
  }
  _handleEscClose (evt){
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened')
      closePopup(openedPopup)
    }
  }
  setEventListeners(){
    popups.forEach((popup) => {
      this._popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
          this.closePopup(this._popup)
        }
        if (evt.target.classList.contains('popup__toggle-image') || evt.target.classList.contains('popup__figure-toggle-image')) {
          this.closePopup(this._popup)
        }
      })
    })
  }
}
