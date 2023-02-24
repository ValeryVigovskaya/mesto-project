//добавили отдельный файл со всеми константами
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const popups = document.querySelectorAll('.popup');
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup__edit');
const popupEditSaveButton = popupEdit.querySelector('.popup__button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popup__add');
const popupImg = document.querySelector('#popup_with_img');
const elementsList = document.querySelector('.elements__list'); //добавили переменную,  в которую добавляется шаблон*/
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

const elementTemplate = document.querySelector('#element-template').content; //шаблон элемента из html

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active',
}

export{settings, popups,initialCards, popupEditOpenButton, popupEdit,
  popupEditSaveButton, popupAddOpenButton, popupAdd,
  popupImg,
   elementsList, formEditProfile, textInput,
  jobInput, username, description, imgInsert, nameInsert,
  formElementAdd, nameInput, linkInput, elementTemplate
}
