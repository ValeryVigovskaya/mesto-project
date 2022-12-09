//ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup__edit');
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popup__add');
const popupImg = document.querySelector('#popup_with_img');
const closeButton = popupEdit.querySelector('.popup__toggle-image');
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
const elementsList = document.querySelector('.elements__list'); //добавили переменную,  в которую добавляется шаблон
const createButton = document.querySelector('#create_button');
const saveButton = document.querySelector('#save_button');
const closePopupAdd = popupAdd.querySelector('.popup__toggle-image');
const closeButtonImg = document.querySelector('.popup__figure-toggle-image');
//реализация сохранения редактирования профиля
// Находим форму в DOM
const formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
const textInput = document.querySelector('#name');
const jobInput = document.querySelector('#description');
const insertImg = document.querySelector('.popup__image');
const insertName = document.querySelector('.popup__caption');
const formElementAdd = document.querySelector('#form_add');

// Находим поля формы в DOM
const nameInput = document.querySelector('#title');
const linkInput = document.querySelector('#link');


//СОЗДАНИЕ ФУНКЦИЙ
//универсальные функции открытия и закрытия
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//открытие и закрытие попапа редактирования
editButton.addEventListener('click', function () {
  openPopup(popupEdit);
})

closeButton.addEventListener('click', function () {
  closePopup(popupEdit);
})



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  textInput.value;
  jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  let username = document.querySelector('.profile__username');
  let description = document.querySelector('.profile__description');
  // Вставьте новые значения с помощью textContent

  username.textContent = textInput.value;
  description.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

// реализация сохранения при изменении данных пользователя
saveButton.addEventListener('click', function () {
  closePopup(popupEdit);
})


//Шесть карточек «из коробки
// функция получения данных для создания карточки
function createElement(link, name) {
  const elementTemplate = elementsList.querySelector('#element-template').content; //шаблон элемента из html
  const elementsClone = elementTemplate.querySelector('.element').cloneNode(true); //клонируем блок
  const deleteButton = elementsClone.querySelector('#delete_button');  //добавили взаимодействие на кнопку удаления картинок

  elementsClone.querySelector('.element__image').src = link;
  elementsClone.querySelector('.element__image').alt = name;
  elementsClone.querySelector('.element__caption').textContent = name;
  elementsClone.querySelector('.element__like').addEventListener('click', function (evt) { //добавили изменение цвета лайка при клике
    evt.target.classList.toggle('element__like_active');
  });
  elementsClone.querySelector('.element__image').addEventListener('click', function (evt) {
    createNewPopupImage(link, name)
    evt.target.classList.toggle('.element__image');
  });
  deleteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    elementsClone.remove();
  });

  return elementsClone;
};

//функция, которая будет вставлять разметку карточки в DOM.

function insertElement() {  //методом перебора массива добавляем в разметку карточки
  initialCards.forEach(item => {
    elementsList.append(createElement(item.link, item.name));
  })
}
insertElement();


//открытие и закрытие попапа добавления нового фото

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

closePopupAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});

// реализация работы кнопки добавления нового фото

createButton.addEventListener('click', () => {
  closePopup(popupAdd);
});



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmitTwo(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameInput.value;
  linkInput.value;
  let link = initialCards.unshift[0];
  let name = initialCards.unshift[0];
  link = linkInput.value;
  name = nameInput.value;
  elementsList.prepend(createElement(link, name));
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementAdd.addEventListener('submit', handleFormSubmitTwo);


//функция закрытия попапа с картинкой

closeButtonImg.addEventListener('click', function () {
  closePopup(popupImg);
});

//функция изменения полей и открытия попапа

function createNewPopupImage(link, name) {
  openPopup(popupImg);
  insertImg.src = link;
  insertImg.alt = name;
  insertName.textContent = name;
}
