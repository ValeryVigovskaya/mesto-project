/*   */
import Popup from '../components/Popup.js'
import { submitCardForm, submitEditProfileForm, handleSubmit, editAvatarForm } from "./utils.js"
import { formEditProfile, formElementAdd, formAvatartEdit } from './variables.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCardForm, submitEditProfileForm, editAvatarForm, formsInputs) {
    super(popupSelector)
    this._popup = popupSelector;
    this.submitCardForm = submitCardForm;
    this.submitEditProfileForm = submitEditProfileForm;
    this.editAvatarForm = editAvatarForm;
    this.formsInputs = document.querySelectorAll('.popup__item');
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
    formEditProfile.addEventListener('submit', this.submitEditProfileForm);
    formElementAdd.addEventListener('submit', this.submitCardForm);
    formAvatartEdit.addEventListener('submit', this.editAvatarForm);

  }

  closePopup(popup) {
    super.closePopup();
    evt.target.reset();
  }
}
