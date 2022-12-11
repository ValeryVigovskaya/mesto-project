//ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ
const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup__edit');
const popupEditCloseButton = popupEdit.querySelector('.popup__toggle-image');
const popupEditSaveButton = popupEdit.querySelector('.popup__button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popup__add');
const popupAddCloseButton = popupAdd.querySelector('.popup__toggle-image');
const popupAddCreateButton = popupAdd.querySelector('.popup__button');
const popupImg = document.querySelector('#popup_with_img');
const popupImgCloseButton = document.querySelector('.popup__figure-toggle-image');
const elementsList = document.querySelector('.elements__list'); //добавили переменную,  в которую добавляется шаблон
//реализация сохранения редактирования профиля
// Находим форму в DOM
const formEditProfile = popupEdit.querySelector('.popup__form');
// Находим поля формы в DOM
const textInput = popupEdit.querySelector('#name');
const jobInput = popupEdit.querySelector('#description');
const username = document.querySelector('.profile__username');
const description = document.querySelector('.profile__description');
const imgInsert = document.querySelector('.popup__image');
const nameInsert = document.querySelector('.popup__caption');
const formElementAdd = popupAdd.querySelector('.popup__form');

// Находим поля формы в DOM
const nameInput = popupAdd.querySelector('#title');
const linkInput = popupAdd.querySelector('#link');


//СОЗДАНИЕ ФУНКЦИЙ
//универсальные функции открытия и закрытия
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//открытие и закрытие попапа редактирования
popupEditOpenButton.addEventListener('click', function () {
  textInput.value = username.textContent;
  jobInput.value = description.textContent;
  openPopup(popupEdit);
})

popupEditCloseButton.addEventListener('click', function () {
  closePopup(popupEdit);
})



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitEditProfileForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  textInput.value;
  jobInput.value;
  // Вставьте новые значения с помощью textContent
  username.textContent = textInput.value;
  description.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener('submit', submitEditProfileForm);

// реализация сохранения при изменении данных пользователя
popupEditSaveButton.addEventListener('click', function () {
  closePopup(popupEdit);
})


//Шесть карточек «из коробки
// функция получения данных для создания карточки
function createElement(link, name) {
  const elementTemplate = document.querySelector('#element-template').content; //шаблон элемента из html
  const elementsClone = elementTemplate.querySelector('.element').cloneNode(true); //клонируем блок
  const elementsCloneDeleteButton = elementsClone.querySelector('.element__delete');  //добавили взаимодействие на кнопку удаления картинок

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
  elementsCloneDeleteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    elementsClone.remove();
  });

  return elementsClone;
};

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



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitCardForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  elementsList.prepend(createElement(linkInput.value, nameInput.value));
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementAdd.addEventListener('submit', submitCardForm);


//функция закрытия попапа с картинкой

popupImgCloseButton.addEventListener('click', function () {
  closePopup(popupImg);
});

//функция изменения полей и открытия попапа

function createNewPopupImage(link, name) {
  openPopup(popupImg);
  imgInsert.src = link;
  imgInsert.alt = name;
  nameInsert.textContent = name;
}
