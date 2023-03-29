
const popups = document.querySelectorAll('.popup');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const elementsList = document.querySelector('.elements__list');
const popupEditAvatarButton = document.querySelector('.profile__avatar-hover');
const avatarInput = document.querySelector('#avatar');
const textInput = document.querySelector('#name');
const jobInput = document.querySelector('#description');
const imgInsert = document.querySelector('.popup__image');
const nameInsert = document.querySelector('.popup__caption');
const nameInput = document.querySelector('#title');
const linkInput = document.querySelector('#link');
const formEditProfile = document.querySelector('#editForm');
const formElementAdd = document.querySelector('#addForm');
const formAvatartEdit = document.querySelector('#avatarForm');

const avatar = ('.profile__avatar');
const popupEditAvatar = ('#popup__avatar');
const username = ('.profile__username');
const description = ('.profile__description');
const popupEditSaveButton = ('.popup__button');
const popupAdd = ('#popup__add');
const popupAddSubmitButton = ('.popup__button');
const sectionSelector = ('.elements__list');
const popupEdit = ('#popup__edit');
const popupImg = ('#popup_with_img');
const elementTemplate = ('#element-template');

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active',
}

export {
  settings,
  popups,
  popupEditOpenButton,
  popupEdit,
  popupEditSaveButton,
  popupAddOpenButton,
  popupAdd,
  popupImg,
  elementsList,
  textInput,
  jobInput,
  username,
  description,
  imgInsert,
  nameInsert,
  formElementAdd,
  nameInput,
  linkInput,
  elementTemplate,
  popupAddSubmitButton,
  popupEditAvatar,
  popupEditAvatarButton,
  avatarInput,
  avatar,
  formAvatartEdit,
  sectionSelector,
  formEditProfile
}
