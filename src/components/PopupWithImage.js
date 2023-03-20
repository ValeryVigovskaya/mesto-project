import { popupAdd, popupAddSubmitButton, nameInput, linkInput, settings } from './variables.js'
import { disableSubmitButton } from './utils.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popup = popupSelector;
  }

  openPopup(popupAdd) {
    nameInput.value = '';
    linkInput.value = '';
    disableSubmitButton(settings, popupAddSubmitButton);
  };
}






