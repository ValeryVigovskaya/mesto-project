//добавили отдельный файл со всеми константами
const popups = document.querySelectorAll('.popup');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup__edit');
const popupEditSaveButton = popupEdit.querySelector('.popup__button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popup__add');
const popupAddSubmitButton = popupAdd.querySelector('.popup__button');

const elementsList = document.querySelector('.elements__list'); //добавили переменную,  в которую добавляется шаблон
const popupEditAvatar = document.querySelector('#popup__avatar');
const popupAvatarSubmitButton = popupEditAvatar.querySelector('.popup__button');
const popupEditAvatarButton = document.querySelector('.profile__avatar-hover');
const avatarInput = popupEditAvatar.querySelector('#avatar');
const avatar = document.querySelector('.profile__avatar');
const formAvatartEdit = popupEditAvatar.querySelector('.popup__form');
//реализация сохранения редактирования профиля
const formEditProfile = popupEdit.querySelector('.popup__form');
const textInput = popupEdit.querySelector('#name');
const jobInput = popupEdit.querySelector('#description');
const username = document.querySelector('.profile__username');
const description = document.querySelector('.profile__description');
const imgInsert = document.querySelector('.popup__image');
const nameInsert = document.querySelector('.popup__caption');
const formElementAdd = popupAdd.querySelector('.popup__form');
const nameInput = popupAdd.querySelector('#title');
const linkInput = popupAdd.querySelector('#link');
const userSelf = document.querySelector('.profile');

const sectionSelector = ('.elements__list');
const popupImg = ('#popup_with_img');
const elementTemplate = ('#element-template'); //шаблон элемента из html

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active',
}

export {
  settings, popups, popupEditOpenButton, popupEdit,
  popupEditSaveButton, popupAddOpenButton, popupAdd,
  popupImg,
  elementsList, formEditProfile, textInput,
  jobInput, username, description, imgInsert, nameInsert,
  formElementAdd, nameInput, linkInput, elementTemplate, popupAddSubmitButton,
  popupEditAvatar, popupEditAvatarButton, avatarInput, avatar, popupAvatarSubmitButton,
  formAvatartEdit, userSelf, sectionSelector
}
