import {settings} from '../components/variables.js'

//скрипт для валидации форм
// Функция, которая добавляет класс с ошибкой
const showItemError = (form, formItem, errorMessage, settings) => {
  // Находим элемент ошибки внутри самой функции
  const formError = form.querySelector(`.${formItem.id}-error`);
  formItem.classList.add(settings.inputErrorClass);
  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  // Показываем сообщение об ошибке
  formError.classList.add(settings.errorClass);
};

// Функция, удаления класса с ошибкой
const hideItemError = (form, formItem, settings) => {
  const formError = form.querySelector(`.${formItem.id}-error`);
  formItem.classList.remove(settings.inputErrorClass);
  formError.classList.remove(settings.errorClass);//скрыли сообщение об ошибке
  formError.textContent = ''; //очистили ошибку
};

// Функция, которая проверяет валидность поля
const isValid = (form, formItem) => {
  if (formItem.validity.patternMismatch) {
    formItem.setCustomValidity(formItem.dataset.errorMessage);
  } else {
    formItem.setCustomValidity("");
  }
  if (!formItem.validity.valid) {
    showItemError(form, formItem, formItem.validationMessage, settings);
  } else {
    hideItemError(form, formItem, settings);
  }
};

//функция принимает массив полей ввода и возвращает true, если поле не валидно
const hasInvalidInput = (inputList) => {
  return inputList.some((formItem) => {
    return !formItem.validity.valid;
  })
};

//функция активации кнопки сохранить/создать
function toggleButtonState(inputList, buttonElement, settings) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
}
//добавления слушателя всем полям внутри формы
const setEventListeners = (form, settings) => {
  const inputList = Array.from(form.querySelectorAll(settings.inputSelector));
  const buttonElement = form.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, settings);
  form.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, settings), 0 })
  });
  inputList.forEach((formItem) => {
    formItem.addEventListener('input', () => {
      isValid(form, formItem, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
});
};

//функция перебирает все формы
const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, settings);
  });
};

export {enableValidation}
