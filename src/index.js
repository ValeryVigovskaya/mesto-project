import './pages/index.css';

// import {
//   settings,
//   popups, popupEditOpenButton, popupEdit,
//   popupAddOpenButton, popupAdd,
//   elementsList, formEditProfile, textInput,
//   jobInput, username, description,
//   formElementAdd, popupAddSubmitButton, nameInput,
//   linkInput, popupEditAvatar, popupEditAvatarButton,
//   formAvatartEdit, avatarInput, avatar, userSelf
// } from '../src/components/variables.js'

// import { enableValidation } from '../src/components/validate.js'

// enableValidation(settings);

// import { openPopup, closePopup } from '../src/components/modal.js'

// import { submitEditProfileForm, submitCardForm, editAvatarForm } from '../src/components/utils.js'

// import { createElement } from './components/Card.js'

// import { getUserInfo, getInitialCards } from '../src/components/api.js'

import Section from './components/Section.js'
//import {api} from './components/api.js'
import Api from './components/api.js'
import FormValidator from './components/FormValidator.js'
import Popup from './components/Popup.js'
import PopupWithForm from './components/PopupWithForm.js'
import PopupWithImage from './components/PopupWithImage.js'
import Card from './components/card.js'
import { handleCardClick } from './components/card.js'
import {
  settings, popups, popupEditOpenButton, popupEdit,
  popupEditSaveButton, popupAddOpenButton, popupAdd,
  popupImg,
  elementsList, formEditProfile, textInput,
  jobInput, username, description, imgInsert, nameInsert,
  formElementAdd, nameInput, linkInput, elementTemplate, popupAddSubmitButton,
  popupEditAvatar, popupEditAvatarButton, avatarInput, avatar, popupAvatarSubmitButton,
  formAvatartEdit, userSelf, sectionSelector
} from './components/variables.js'
import { data } from 'autoprefixer';

// console.log(elementsList);

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-20',
  headers: {
  authorization: '5677928b-be8e-49ee-ae63-e0ec29ade066',
    'Content-Type': 'application/json'
  }
 });

//  console.log(api.getInitialCards());

Promise.all([api._getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    username.textContent = user.name;
    description.textContent = user.about;
    userSelf.id = user._id;
    avatar.src = user.avatar;
    // console.log(cards);
    const cardNew = new Card(data);


    const sectionNew = new Section (
      {renderer: () => {
        const cardElement = cardNew.generate();
        console.log(cardElement);
        }},
        sectionSelector
    )
    sectionNew.renderItems(cards)
    //cards.forEach(item => {

      /*const cardNew = new Card(item);
      //console.log(cardNew);
      const cardElement = cardNew.generate();
      // console.log(cardElement);
      elementsList.append(cardElement);*/
    //});
  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль, если запрос неуспешный
  });



// const createElement = (card) => {
//   const cardItem = new Card(card, {
//     handleCardClick: card => popupImg.openPopup(card),
//     _handleAddLike: () => _handleAddLike(card, data),
//   })
//   return cardItem;
// }




// const cardList = new Section({

//   renderer: (card, user) => {
//     const cardNew = new Card(card,{handleCardClick: (card) => {popupWithImage.openPopup(card)},
//   },
//   {_handleAddLike:(card)=>{_handleAddLike(card, cardNew)}},


// const createNewCard = data => {
//   const card = new Card(data, userInfo.userId, cardTemplateSelector, {
//     handleCardClick: data => popupImage.open(data),
//     handleCardDelete: () => {
//       currentCard = card;
//       popupWithConfirm.open(data._id);
//     },
//     handleLikeClick: () => handleLikeClick(card, data),
//     cardImageloader: () => cardImageloader(card, cardImageErrorClass)
//   });
//   return card;



//     )

//     }
//   })


  // set cards info
//   section = new Section({
//     items: cardsInfo,
//     renderer: (item) => {
//       const cardElement = createCard(item);
//       section.addItem(cardElement);
//     }
//   },
//   constants.cardsContainerSelector
// );
// section.renderItems();




// const cardList = new Section({
//   data: messageList,
//   renderer: (messageItem) => {
//     const message = messageItem.isOwner
//       ? new UserMessage(messageItem, '.message-template_type_user')
//       : new DefaultMessage(messageItem, '.message-template_type_default');

//     const messageElement = message.generate();

//     cardList.setItem(messageElement);
//     },
//   },
//   cardListSection
// );

// cardList.renderItems();

//промисом получили данные с сервера
// Promise.all([getUserInfo(), getInitialCards()])
//   .then(([user, cards]) => {
//     username.textContent = user.name;
//     description.textContent = user.about;
//     userSelf.id = user._id;
//     avatar.src = user.avatar;
//     //методом перебора массива добавляем в разметку карточки
//     cards.forEach((card) => {
//       elementsList.append(createElement(card, userSelf))
//     });
//   })
//   .catch((err) => {
//     console.log(err); // выводим ошибку в консоль, если запрос неуспешный
//   });

/*//перебор массива попапов для закрытия по крестику и оверлею
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__toggle-image') || evt.target.classList.contains('popup__figure-toggle-image')) {
      closePopup(popup)
    }
  })
})*/

//открытие и закрытие попапа редактирования
// popupEditOpenButton.addEventListener('click', function () {
//   openPopup(popupEdit);
//   textInput.value = username.textContent;
//   jobInput.value = description.textContent;
// })

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formEditProfile.addEventListener('submit', submitEditProfileForm);


//открытие и закрытие попапа добавления нового фото
/*popupAddOpenButton.addEventListener('click', () => {
  nameInput.value = '';
  linkInput.value = '';
  openPopup(popupAdd);
  disableSubmitButton(settings, popupAddSubmitButton);
});*/

//функция установки неактивного класса кнопки
/*function disableSubmitButton(settings, popupAddSubmitButton) {
  popupAddSubmitButton.disabled = true;
  popupAddSubmitButton.classList.add(settings.inactiveButtonClass);
}*/

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formElementAdd.addEventListener('submit', submitCardForm);

//открытие попапа редактирования аватарки
// popupEditAvatarButton.addEventListener('click', () => {
//   openPopup(popupEditAvatar);
//   avatarInput.value = avatar.src;
// })

// formAvatartEdit.addEventListener('submit', editAvatarForm);

