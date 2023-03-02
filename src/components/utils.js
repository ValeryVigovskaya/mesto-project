import {
  popupEdit, popupAdd, textInput, jobInput, username, popupAvatarSubmitButton,
  popupEditSaveButton, popupAddSubmitButton, popupEditAvatar, avatarInput, avatar,
  description, elementsList, nameInput, linkInput, userSelf
} from './variables.js'
import { createElement } from './card.js'
import { closePopup } from './modal.js'
import { patchEditProfile, postNewCard, patchAvatarEdit } from './api.js'
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitEditProfileForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  renderLoading(true, popupEditSaveButton);
  // Получите значение полей jobInput и nameInput из свойства value
  patchEditProfile(textInput.value, jobInput.value)
    .then((res) => {
      username.textContent = res.name;
      description.textContent = res.about;
      evt.target.reset();
      closePopup(popupEdit);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль, если запрос неуспешный
    })
    .finally(() => {
      renderLoading(false, popupEditSaveButton);
    });
  // Вставьте новые значения с помощью textContent

}
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitCardForm(evt) {
  evt.preventDefault();
  renderLoading(true, popupAddSubmitButton);
  postNewCard(nameInput.value, linkInput.value)
    .then((card) => {
      closePopup(popupAdd);
      elementsList.prepend(createElement(card, userSelf));
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль, если запрос неуспешный
    })
    .finally(() => {
      renderLoading(false, popupAddSubmitButton);
    });
  evt.target.reset();

}

//функция изменения кнопки сохранить
function renderLoading(isLoading, popupButton) {
  if (isLoading) {
    popupButton.textContent = 'Сохранение...';
  } else {
    popupButton.textContent = 'Сохранить' || 'Создать';
  }
}

//функция редактирования аватарки
function editAvatarForm(evt) {
  evt.preventDefault();// Эта строчка отменяет стандартную отправку формы.
  renderLoading(true, popupAvatarSubmitButton);
  patchAvatarEdit(avatarInput.value)
    .then((res) => {
      avatar.src = res.avatar;
      evt.target.reset();
      closePopup(popupEditAvatar);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль, если запрос неуспешный
    })
    .finally(() => {
      renderLoading(false, popupAvatarSubmitButton);
    });
}

export { submitEditProfileForm, submitCardForm, editAvatarForm }
