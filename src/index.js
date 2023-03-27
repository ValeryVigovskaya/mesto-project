import './pages/index.css';

import Section from './components/Section.js'
import Api from './components/api.js'
import FormValidator from './components/FormValidator.js'
import UserInfo from './components/UserInfo.js'
import PopupWithForm from './components/PopupWithForm.js'
import PopupWithImage from './components/PopupWithImage.js'
import Card from './components/card.js'
import {
  settings,
  popupEditOpenButton,
  popupEdit,
  popupAddOpenButton,
  popupAdd,
  popupImg,
  elementsList,
  textInput,
  jobInput,
  username,
  description,
  formElementAdd,
  nameInput,
  linkInput,
  elementTemplate,
  popupEditAvatar,
  popupEditAvatarButton,
  avatarInput,
  avatar,
  formAvatartEdit,
  sectionSelector,
  formEditProfile
} from './components/variables.js'

const userInfo = new UserInfo(username, description, avatar);

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-20',
  headers: {
    authorization: '5677928b-be8e-49ee-ae63-e0ec29ade066',
    'Content-Type': 'application/json'
  }
});

Promise.all([api._getUserInfo(), api.getInitialCards(), api.deleteCard])
  .then(([user, cards]) => {
    userInfo.saveInfo(user);
    userInfo.setUserInfo(user.name, user.about, user._id);
    userInfo.setUserAvatar(user.avatar);
    createSection(cards);
  })
  .catch((err) => {
    console.log(err);
  });

function createCard(data) {
  const cardNew = new Card(data, userInfo.userId, elementTemplate, {
    handleCardDelete: (cardId) => {
      api.deleteCard(cardId)
        .then(() => cardNew._deleteCard())
    },
    handleCardClick: () => {
      popupImage.openPopup(data);
    },
    handleLikeClick: (cardId) => {
      if (!cardNew._checkActiveClass()) {
        api.putLikeCard(cardId)
          .then((data) => cardNew._handleAddLike(data))
      } else {
        api.deleteLikeCard(cardId)
          .then((data) => cardNew._handleRemoveLike(data))
      }
    },
  });
  const cardElement = cardNew.generate();
  return cardElement;
}

function createSection(cards) {
  const sectionNew = new Section({
      items: cards,
      renderer: createCard
    },
    sectionSelector
  )
  sectionNew.renderItems(cards)
}

const popupImage = new PopupWithImage(popupImg)
popupImage.setEventListeners();

const submitEditProfileForm = new PopupWithForm(popupEdit, {
  submitCallBackForm: (data) => {
    submitEditProfileForm.renderLoading(true);
    api.patchEditProfile(data)
      .then(() => {
        userInfo.setUserInfo(textInput.value, jobInput.value)
        submitEditProfileForm.closePopup(popupEdit);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      })
      .finally(() => {
        submitEditProfileForm.renderLoading(false);
      });
  }
});
submitEditProfileForm.setEventListeners()

const submitAddCardForm = new PopupWithForm(popupAdd, {
  submitCallBackForm: () => {
    submitAddCardForm.renderLoading(true);

    api.postNewCard(nameInput.value, linkInput.value)
      .then((data) => {

        submitAddCardForm.closePopup(popupAdd);
        const newCardAdd = createCard(data);
        elementsList.prepend(newCardAdd);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      })
      .finally(() => {
        submitAddCardForm.renderLoading(false);
      });
  }
});
submitAddCardForm.setEventListeners()

const submitAvatarForm = new PopupWithForm(popupEditAvatar, {
  submitCallBackForm: () => {
    submitAvatarForm.renderLoading(true);
    api.patchAvatarEdit(avatarInput.value)
      .then(() => {
        userInfo.setUserAvatar(avatarInput.value)
        submitAvatarForm.closePopup(popupEditAvatar)
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      })
      .finally(() => {
        submitAvatarForm.renderLoading(false);
      });
  }
})
submitAvatarForm.setEventListeners()

popupEditAvatarButton.addEventListener('click', function () {
  const data = userInfo.getUserInfo()
  avatarInput.value = data.avatar;
  submitAvatarForm.openPopup(popupEditAvatar);
})

popupAddOpenButton.addEventListener('click', function () {
  nameInput.value = '';
  linkInput.value = '';
  submitAddCardForm.openPopup(popupAdd);
});

popupEditOpenButton.addEventListener('click', function () {
  const data = userInfo.getUserInfo();
  textInput.value = data.name;
  jobInput.value = data.about;
  submitEditProfileForm.openPopup(popupEdit);
})

//Включаем валидацию форм

const profileFormValidator = new FormValidator(settings, formEditProfile);
const cardFormValidator = new FormValidator(settings, formElementAdd);
const avatarFormValidator = new FormValidator(settings, formAvatartEdit);

profileFormValidator.enableValidation(settings);
cardFormValidator.enableValidation(settings);
avatarFormValidator.enableValidation(settings);


