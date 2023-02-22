import {initialCards, popupEditOpenButton, popupEdit, popupEditCloseButton,
  popupEditSaveButton, popupAddOpenButton, popupAdd,
  popupAddCloseButton, popupAddCreateButton, popupImg,
  popupImgCloseButton, elementsList, formEditProfile, textInput,
  jobInput, username, description,
  formElementAdd,
} from './variables.js'

import {enableValidation} from './validate.js'

enableValidation({
  form: '.popup__form',
  formItem: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: '.popup__button_inactive',
  inputErrorClass: '.popup__item_type_error',
  errorClass: '.popup__item-error_active'
});

import {openPopup, closePopup} from './modal.js'

import {submitEditProfileForm, submitCardForm} from './utils.js'

import {createElement} from './card.js'

createElement({
  linkInput: '.element__image',
  nameInput: '.element__image',
  nameInput:'.element__caption',
  elementLike: '.element__like',
  elementLikeActive: '.element__like_active',
})


//открытие и закрытие попапа редактирования
popupEditOpenButton.addEventListener('click', function () {
  textInput.value = username.textContent;
  jobInput.value = description.textContent;
  openPopup(popupEdit);
})

popupEditCloseButton.addEventListener('click', function () {
  closePopup(popupEdit);
})

popupEdit.addEventListener('click', (evt) => {
  if (evt.target === popupEdit) { //проверяем что нажали именно на оверлей, а не глубже
    closePopup(popupEdit);
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') { //проверяем что нажали именно на esc
    closePopup(popupEdit);
  }
});


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener('submit', submitEditProfileForm);

// реализация сохранения при изменении данных пользователя
popupEditSaveButton.addEventListener('click', function () {
  closePopup(popupEdit);
})


//вставдяем разметку карточки в DOM.
//методом перебора массива добавляем в разметку карточки
initialCards.forEach(item => {
  elementsList.append(createElement(item.link, item.name));
})


//открытие и закрытие попапа добавления нового фото

popupAddOpenButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

popupAddCloseButton.addEventListener('click', () => {
  closePopup(popupAdd);
});

// реализация работы кнопки добавления нового фото

popupAddCreateButton.addEventListener('click', () => {
  closePopup(popupAdd);
});

popupAdd.addEventListener('click', (evt) => {
  if (evt.target === popupAdd) { //проверяем что нажали именно на оверлей, а не глубже
    closePopup(popupAdd);
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') { //проверяем что нажали именно на esc
    closePopup(popupAdd);
  }
});

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementAdd.addEventListener('submit', submitCardForm);


//функция закрытия попапа с картинкой

popupImgCloseButton.addEventListener('click', function () {
  closePopup(popupImg);
});

popupImg.addEventListener('click', (evt) => {
  if (evt.target === popupImg) { //проверяем что нажали именно на оверлей, а не глубже
    closePopup(popupImg);
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') { //проверяем что нажали именно на esc
    closePopup(popupImg);
  }
});
