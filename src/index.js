
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
import UserInfo from './components/UserInfo.js'
import Popup from './components/Popup.js'
import PopupWithForm from './components/PopupWithForm.js'
import PopupWithImage from './components/PopupWithImage.js'
import Card from './components/card.js'
import {
  settings, popups, popupEditOpenButton, popupEdit,
  popupEditSaveButton, popupAddOpenButton, popupAdd,
  popupImg,
  elementsList, textInput,
  jobInput, username, description, imgInsert, nameInsert,
  formElementAdd, nameInput, linkInput, elementTemplate, popupAddSubmitButton,
  popupEditAvatar, popupEditAvatarButton, avatarInput, avatar, popupAvatarSubmitButton,
  formAvatartEdit, userSelf, sectionSelector, formEditProfile
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

const userInfo = new UserInfo(username, description, avatar);


Promise.all([api._getUserInfo(), api.getInitialCards(), api.deleteCard])
  .then(([user, cards]) => {
    userInfo.saveInfo(user);
    userInfo.setUserInfo(user.name, user.about);
    userInfo.setUserAvatar(user.avatar);
    const sectionNew = new Section(
      {
        items: cards,
        renderer: (data) => {
          const cardNew = new Card(data, userSelf.id, elementTemplate, {
            handleCardDelete: (cardElement, cardId) => {
              api.deleteCard(cardId)
                .then(() => cardElement.remove())
            },
            handleCardClick: () => {
              popupImage.openPopup(data);
            },
            handleLikeClick: () => {
              if (!event.target.classList.contains('element__like_active')) {
                cardNew._handleAddLike();
              } else {
                cardNew._handleRemoveLike();}
            },
          })
          const cardElement = cardNew.generate();
          return cardElement;
        },
      },
      sectionSelector
    )
    sectionNew.renderItems(cards)

  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль, если запрос неуспешный
  });

  const popupImage = new PopupWithImage(popupImg)
  popupImage.setEventListeners();

  const submitEditProfileForm = new PopupWithForm(popupEdit, {submitCallBackForm: (data) => {
    //submitEditProfileForm.renderLoading(false);
     api.patchEditProfile(data)
      .then((user) => {
        userInfo.setUserInfo(textInput.value, jobInput.value)
        submitEditProfileForm.closePopup(popupEdit);
        //submitEditProfileForm.renderLoading(true)
      })
    }
  });

  submitEditProfileForm.setEventListeners()

popupEditOpenButton.addEventListener('click', function () {
      const data = userInfo.getUserInfo();
      textInput.value = data.name;
      jobInput.value = data.about;
      submitEditProfileForm.openPopup(popupEdit);
    })

//Включаем валидацию форм

// const profileFormValidator = new FormValidator(settings, formEditProfile);
// const cardFormValidator = new FormValidator(settings, formElementAdd);
// const avatarFormValidator = new FormValidator(settings, formAvatartEdit);

// profileFormValidator.enableValidation();
// cardFormValidator.enableValidation();
// avatarFormValidator.enableValidation();


  //function createCard (data) {
   // const cardNew = new Card(data, elementTemplate);
   // const cardElement = cardNew.generate();
   // return cardElement;
  //}


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

// function handleLikeClick(card, data) {
//   const promise = card.isLiked()
//     ? api.dislikeCard(data._id)
//     : api.likeCard(data._id);
//   promise
//     .then(data => {
//       card.setLike(data);
//     })
//     .catch(err => {
//       console.log(`${err}`);
//     });
// }
