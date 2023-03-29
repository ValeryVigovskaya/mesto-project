import Popup from '../components/Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, {
    submitCallBackForm
  }) {
    super(popupSelector)
    this._submitCallBackForm = submitCallBackForm;
    this._popupElement = this._popupItem.querySelector('.popup__form')
    this._submitButton = this._popupElement.querySelector('.popup__button');
    this.formsInputs = this._popupElement.querySelectorAll('.popup__item');
    this._buttonText = 'Сохранить';
    this._loadingText = 'Сохранение...';
  }

  _getInputValues() {
    this._inputValues = {}
    this.formsInputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    })
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallBackForm(this._getInputValues());
    })
  }

  closePopup() {
    super.closePopup();
    this._popupElement.reset();
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = this._loadingText;
    } else {
      this._submitButton.textContent = this._buttonText;
    }
  }

}

