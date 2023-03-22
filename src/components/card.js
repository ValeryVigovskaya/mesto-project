import { popupImg, imgInsert, nameInsert, elementTemplate } from './variables.js'
//import { openPopup } from './modal.js'  // импортировали функции, которые используются
//import { deleteLikeCard, putLikeCard, deleteCard } from './api.js'

import { api } from './api.js'


/*
//переписываю функцию с полученными из запросов данными
function createElement(card, user) { //все значения будут записываться в новую переменную card, user использую для получения id пользователя
  const elementsClone = elementTemplate.querySelector('.element').cloneNode(true); //клонируем блок
  const elementsCloneDeleteButton = elementsClone.querySelector('.element__delete');///добавили взаимодействие на кнопку удаления картинок
  elementsClone.querySelector('.element__image').src = card.link;
  elementsClone.querySelector('.element__image').alt = card.name;
  elementsClone.querySelector('.element__caption').textContent = card.name;
  const like = elementsClone.querySelector('.element__like');
  const likeAmout = elementsClone.querySelector('.element__amount-likes');
  likeAmout.textContent = card.likes.length; //записываем длину массива лайков

  //перебераю массив лайков и при этом сравниваю айди лайка и айди пользователя лайкнувшего
  card.likes.forEach(() => {
    if(card.likes._id === user._id){
      like.classList.add('element__like_active'); //добавила активный класс, так как пользователь уже лайкнул
    }
  })

  like.addEventListener('click', function (evt) { //добавили изменение цвета лайка при клике
    if (!evt.target.classList.contains('element__like_active')) {//проверяю есть ли активный класс
      putLikeCard(card._id)
        .then((data) => {
          evt.target.classList.toggle('element__like_active')
          likeAmout.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err); // выводим ошибку в консоль, если запрос неуспешный
        });
    } else {
      deleteLikeCard(card._id)
        .then((data) => {
          evt.target.classList.remove('element__like_active')
          likeAmout.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err); // выводим ошибку в консоль, если запрос неуспешный
        });
    }
  })
  elementsClone.querySelector('.element__image').addEventListener('click', function (evt) {
    createNewPopupImage(card); //вызов функции попапа с картинкой
    evt.target.classList.toggle('.element__image');
  });

  if (user.id !== card.owner._id) {   //добавила условие, если айди совпадают у карточки и юзера, то кнопка удаления активна
    elementsCloneDeleteButton.classList.add('element__delete_inactive');
  }
  elementsCloneDeleteButton.addEventListener('click', (e) => {//вызвали функцию запроса удаления карточки
    deleteCard(card._id)
      .then(() => {
        e.stopPropagation();
        elementsClone.remove();
      })
      .catch((err) => {
        console.log(err); // выводим ошибку в консоль, если запрос неуспешный
      });
  });
  return elementsClone;
};

//функция открытия карточки
function createNewPopupImage(card) {
  openPopup(popupImg);
  imgInsert.src = card.link;
  imgInsert.alt = card.name;
  nameInsert.textContent = card.name;
};

export { createElement }
*/

// console.log(elementTemplate);

export default class Card {
  constructor(data, user, selector, {handleCardDelete}) {
    this._name = data.name;
    this._cardId = data._id;
    this._link = data.link;
    this._like = data.likes;
    //console.log(this._like);


    // this._like = card.like;

    console.log(this._likeAmout);

    this._elementTemplate = selector;
    this._id = data.owner._id;
    this.id = user;
    this._handleCardDelete = handleCardDelete;
    this._card = data.card;


  }
  _createElement() {
    const elementsClone = document.querySelector(this._elementTemplate).content.querySelector('.element').cloneNode(true);
    return elementsClone;
  }
  generate() {
    // this._countLikes();

    this._element = this._createElement();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__caption').textContent = this._name;
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._likeAmout = this._element.querySelector('.element__amount-likes');

    this._likeAmout.textContent = this._like.length;
    // console.log(this._likeAmout);
    // console.log(this._like.length);
    this._setDeleteBtnState()
    this._setEventListeners();
    return this._element;

  }

  _setDeleteBtnState() {
    if (this.id !== this._id) {
      this._deleteButton.classList.add('element__delete_inactive');
    }
  }

  //   _handleAddLike(data) {
  //   this._element.querySelector('.element__like').classList.toggle('element__like_active');
  //   this._likeAmout.textContent = data.likes.length;
  // }

  // _handleRemoveLike(data) {
  //   this._element.querySelector('.element__like').classList.remove('element__like_active');
  //   this._likeAmout.textContent = data.likes.length;
  // }

  // _countLikes() {
  //     if(card.likes._id === user._id){
  //       this._element.classList.add('element__like_active');
  //     }
  //   }

  _setEventListeners() {
  //   this._element.querySelector('.element__like').addEventListener('click', () => {
  //     if (!evt.target.classList.contains('element__like_active')) {
  //           this._handleAddLike()
  //         } else {
  //           this._handleRemoveLike()
  //         }
  //     });

      this._deleteButton.addEventListener('click', () => this._handleCardDelete(this._element, this._cardId));
  //     this._element.querySelector('.element__image').addEventListener('click', function (evt) {
  //       handleCardClick(card);
  //       this._element.querySelector('.element__image').classList.toggle('.element__image');
  //     });
    }
}

export function handleCardClick(card) {
  imgInsert.src = card.link;
  imgInsert.alt = card.name;
  nameInsert.textContent = card.name;
};

