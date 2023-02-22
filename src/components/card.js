import {popupImg, imgInsert, nameInsert} from './variables.js'
import {openPopup} from './modal.js'  // импортировали функции, которые используются

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

//функция открытия карточки
function createNewPopupImage(link, name) {
  openPopup(popupImg);
  imgInsert.src = link;
  imgInsert.alt = name;
  nameInsert.textContent = name;
};

export {createElement}

