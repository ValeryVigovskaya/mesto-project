
export default class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
  }

  _showItemError(form, formItem, errorMessage, settings) {
    const formError = this._form.querySelector(`.${formItem.id}-error`);
    formItem.classList.add(this._settings.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._settings.errorClass);
  };

  _hideItemError(form, formItem, settings) {
    const formError = this._form.querySelector(`.${formItem.id}-error`);
    formItem.classList.remove(this._settings.inputErrorClass);
    formError.classList.remove(this._settings.errorClass);
    formError.textContent = '';
  };

  _isValid(form, formItem, settings) {
    if (formItem.validity.patternMismatch) {
      formItem.setCustomValidity(formItem.dataset.errorMessage);
    } else {
      formItem.setCustomValidity("");
    }
    if (!formItem.validity.valid) {
      this._showItemError(form, formItem, formItem.validationMessage, settings);
    } else {
      this._hideItemError(form, formItem, settings);
    }
  };

  _hasInvalidInput(inputList) {
    return inputList.some((formItem) => {
      return !formItem.validity.valid;
    })
  };

  _toggleButtonState(inputList, buttonElement, settings) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(this._settings.inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }
  }

  _setEventListeners(form, settings) {
    const inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    const buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement, settings);
    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonState(inputList, buttonElement, settings), 0
      })
    });
    inputList.forEach((formItem) => {
      formItem.addEventListener('input', () => {
        this._isValid(form, formItem, settings);
        this._toggleButtonState(inputList, buttonElement, settings);
      });
    });
  };

  enableValidation(settings) {
    const formList = Array.from(document.querySelectorAll(this._settings.formSelector));
    formList.forEach((form) => {
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners(form, settings);
    });
  };
}
