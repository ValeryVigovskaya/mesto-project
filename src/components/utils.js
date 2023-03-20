import {
  popupEdit, popupAdd, textInput, jobInput,
  username, popupEditAvatar, avatarInput, avatar,
  description, elementsList, nameInput, linkInput, userSelf
} from './variables.js'
import { createElement } from './Card.js'
import { closePopup } from './modal.js'
import { patchEditProfile, postNewCard, patchAvatarEdit } from './api.js'
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
export const submitEditProfileForm = (evt) => {
  function makeRequest() {
    return patchEditProfile(textInput.value, jobInput.value)
      .then((res) => {
        username.textContent = res.name;
        description.textContent = res.about;
        closePopup(popupEdit);
      })
  }
  handleSubmit(makeRequest, evt);
}
// Обработчик «отправки» формы карточки
export const submitCardForm = (evt) => {
  function makeRequest() {
    return postNewCard(nameInput.value, linkInput.value)
      .then((card) => {
        closePopup(popupAdd);
        elementsList.prepend(createElement(card, userSelf));
      })
  }
  handleSubmit(makeRequest, evt);
}

//функция редактирования аватарки
export const editAvatarForm = (evt) => {
  function makeRequest() {
    return patchAvatarEdit(avatarInput.value)
      .then((res) => {
        avatar.src = res.avatar;
        evt.target.reset();
        closePopup(popupEditAvatar);
      })
  }
  handleSubmit(makeRequest, evt);
}

//функция изменения кнопки сохранить
function renderLoading(isLoading, popupButton, buttonText = 'Сохранить', loadingText = 'Сохранение...') {
  if (isLoading) {
    popupButton.textContent = loadingText;
  } else {
    popupButton.textContent = buttonText;
  }
}

function disableSubmitButton(settings, popupAddSubmitButton) {
  popupAddSubmitButton.disabled = true;
  popupAddSubmitButton.classList.add(settings.inactiveButtonClass);
}

//универсальная функция с функцией запроса, объекта события и текста сохранения
function handleSubmit(request, evt, loadingText = "Сохранение...") {
  evt.preventDefault();
  const submitButton = evt.submitter;
  const initialText = submitButton.textContent;
  renderLoading(true, submitButton, initialText, loadingText);
  request()
    .then(() => {
      evt.target.reset();
    })
    .catch((err) => {
      console.error(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, submitButton, initialText);
    });
}


function checkResponse(res) {      //функция проверки ответа сервера
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

function request(url, options) {
  // принимает два аргумента: урл и объект опций, как и `fetch`
  return fetch(url, options).then(checkResponse)
}

export { request, handleSubmit }
