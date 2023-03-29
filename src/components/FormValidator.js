
export default class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(settings.inputSelector));
    this._submitButton = this._form.querySelector(settings.submitButtonSelector);
  }

  _showItemError(formItem, errorMessage) {
    const formError = this._form.querySelector(`.${formItem.id}-error`);
    formItem.classList.add(this._settings.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(this._settings.errorClass);
  };

  _hideItemError(formItem) {
    const formError = this._form.querySelector(`.${formItem.id}-error`);
    formItem.classList.remove(this._settings.inputErrorClass);
    formError.classList.remove(this._settings.errorClass);
    formError.textContent = '';
  };

  _isValid(formItem) {
    if (formItem.validity.patternMismatch) {
      formItem.setCustomValidity(formItem.dataset.errorMessage);
    } else {
      formItem.setCustomValidity("");
    }
    if (!formItem.validity.valid) {
      this._showItemError(formItem, formItem.validationMessage);
    } else {
      this._hideItemError(formItem);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    })
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.disabled = true;
      this._submitButton.classList.add(this._settings.inactiveButtonClass);
    } else {
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(this._settings.inactiveButtonClass);
    }
  }

  disableSubmitButton() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._settings.inactiveButtonClass);
  }

  _setEventListeners() {
    this._inputList.forEach((formItem) => {
      formItem.addEventListener('input', () => {
        this._isValid(formItem);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
      this._setEventListeners();
      this._toggleButtonState();
  };
  }
