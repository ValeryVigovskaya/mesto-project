//добавили отдельный файл со всеми константами
const popups = document.querySelectorAll('.popup');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');

const elementsList = document.querySelector('.elements__list'); //добавили переменную,  в которую добавляется шаблон
const popupEditAvatar = ('#popup__avatar');
// const popupAvatarSubmitButton = popupEditAvatar.querySelector('.popup__button');
const popupEditAvatarButton = document.querySelector('.profile__avatar-hover');
const avatarInput = document.querySelector('#avatar');
const avatar = ('.profile__avatar');

//реализация сохранения редактирования профиля
const textInput = document.querySelector('#name');
const jobInput = document.querySelector('#description');
const imgInsert = document.querySelector('.popup__image');
const nameInsert = document.querySelector('.popup__caption');
const nameInput = document.querySelector('#title');
const linkInput = document.querySelector('#link');

const username = ('.profile__username');
const description = ('.profile__description');
const userSelf = document.querySelector('.profile');
const popupEditSaveButton = ('.popup__button');
const popupAdd = ('#popup__add');
const popupAddSubmitButton = ('.popup__button');
const formEditProfile = document.querySelector('#editForm');
const formElementAdd = document.querySelector('#addForm');
const formAvatartEdit = document.querySelector('#avatarForm');
const sectionSelector = ('.elements__list');
const popupEdit = ('#popup__edit');
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
  elementsList, textInput,
  jobInput, username, description, imgInsert, nameInsert,
  formElementAdd, nameInput, linkInput, elementTemplate, popupAddSubmitButton,
  popupEditAvatar, popupEditAvatarButton, avatarInput, avatar, //popupAvatarSubmitButton,
  formAvatartEdit, userSelf, sectionSelector, formEditProfile
}
