//скрипт для валидации форм
// Функция, которая добавляет класс с ошибкой
const showItemError = (form, formItem, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const formError = form.querySelector(`.${formItem.id}-error`);
  formItem.classList.add('popup__item_type_error');
  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  // Показываем сообщение об ошибке
  formError.classList.add('popup__item-error_active');
};

// Функция, удаления класса с ошибкой
const hideItemError = (form, formItem) => {
  const formError = form.querySelector(`.${formItem.id}-error`);
  formItem.classList.remove('popup__item_type_error');
  formError.classList.remove('popup__item-error_active');//скрыли сообщение об ошибке
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
    showItemError(form, formItem, formItem.validationMessage);
  } else {
    hideItemError(form, formItem);
  }
};

//функция принимает массив полей ввода и возвращает true, если поле не валидно
const hasInvalidInput = (inputList) => {
  return inputList.some((formItem) => {
    return !formItem.validity.valid;
  })
};

//функция активации кнопки сохранить/создать
function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add('popup__button_inactive');
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__button_inactive');
  }
}
//добавления слушателя всем полям внутри формы
const setEventListeners = (form) => {
  const inputList = Array.from(form.querySelectorAll('.popup__item'));
  const buttonElement = form.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((formItem) => {
    formItem.addEventListener('input', () => {
      isValid(form, formItem);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//функция перебирает все формы
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form);
  });
};



export {enableValidation}
