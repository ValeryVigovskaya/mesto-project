import Popup from '../components/Popup.js'
export default class PopupWithForm extends Popup {
  constructor(popupSelector, {submitCallBackForm, handleSubmit}) {
    super(popupSelector)
    this._submitCallBackForm = submitCallBackForm;
    this._handleSubmit = handleSubmit;
    this._popupElement = this._popupItem.querySelector('.popup__form')
    this._submitButton = this._popupElement.querySelector('.popup__button');

    this.formsInputs = this._popupElement.querySelectorAll('.popup__item');
  }

  //методом перебора получили инпуты и передали в значение
  _getInputValues() {
    this._inputValues = {}
    this.formsInputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    })
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', this._submitCallBackForm(this._getInputValues()));
  }

  closePopup() {
    super.closePopup();
    this._popupElement.reset();
  }

  _renderLoading(isLoading, buttonText = 'Сохранить', loadingText = 'Сохранение...') {
    if (isLoading) {
      this.submitButton.textContent = loadingText;
    } else {
      this.submitButton.textContent = buttonText;
    }
  }

  _handleSubmit(request, evt, loadingText = "Сохранение..."){
    evt.preventDefault();
    this._submitButton = evt.submitter;
    this._submitButtonTextContent = this.submitButton.textContent;
    this._renderLoading(true, this._submitButton, this._submitButtonTextContent, loadingText);
    request()
    .then(() => {
      this._popup.reset();
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      this._renderLoading(false, this._submitButton, this._submitButtonTextContent);
    });
  }
}
