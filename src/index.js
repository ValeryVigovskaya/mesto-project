import './pages/index.css';

import {
  settings,
  popups, popupEditOpenButton, popupEdit,
  popupAddOpenButton, popupAdd,
  elementsList, formEditProfile, textInput,
  jobInput, username, description,
  formElementAdd, popupAddSubmitButton, nameInput,
  linkInput, popupEditAvatar, popupEditAvatarButton,
  formAvatartEdit, avatarInput, avatar, userSelf
} from '../src/components/variables.js'

import { enableValidation } from '../src/components/validate.js'

enableValidation(settings);

import { openPopup, closePopup } from '../src/components/modal.js'

import { submitEditProfileForm, submitCardForm, editAvatarForm } from '../src/components/utils.js'

import { createElement } from '../src/components/card.js'

import { getUserInfo, getInitialCards } from '../src/components/api.js'


//промисом получили данные с сервера
Promise.all([getUserInfo(), getInitialCards()])
  .then(([user, cards]) => {
    username.textContent = user.name;
    description.textContent = user.about;
    userSelf.id = user._id;
    avatar.src = user.avatar;
    //методом перебора массива добавляем в разметку карточки
    cards.forEach((card) => {
      elementsList.append(createElement(card, userSelf))
    });
  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль, если запрос неуспешный
  });

//перебор массива попапов для закрытия по крестику и оверлею
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__toggle-image') || evt.target.classList.contains('popup__figure-toggle-image')) {
      closePopup(popup)
    }
  })
})

//открытие и закрытие попапа редактирования
popupEditOpenButton.addEventListener('click', function () {
  openPopup(popupEdit);
  textInput.value = username.textContent;
  jobInput.value = description.textContent;
})

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener('submit', submitEditProfileForm);


//открытие и закрытие попапа добавления нового фото
popupAddOpenButton.addEventListener('click', () => {
  nameInput.value = '';
  linkInput.value = '';
  openPopup(popupAdd);
  disableSubmitButton(settings, popupAddSubmitButton);
});

//функция установки неактивного класса кнопки
function disableSubmitButton(settings, popupAddSubmitButton) {
  popupAddSubmitButton.disabled = true;
  popupAddSubmitButton.classList.add(settings.inactiveButtonClass);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementAdd.addEventListener('submit', submitCardForm);

//открытие попапа редактирования аватарки
popupEditAvatarButton.addEventListener('click', () => {
  openPopup(popupEditAvatar);
  avatarInput.value = avatar.src;
})

formAvatartEdit.addEventListener('submit', editAvatarForm);

