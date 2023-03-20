import { request } from './utils.js'

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl,
    this._headers = options.headers
  }

  getInitialCards() {
    return request('https://nomoreparties.co/v1/plus-cohort-20/cards', {
      headers: this._headers
    })
  }

  // другие методы работы с API
}

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
    'Content-Type': 'application/json'
  }
});

/*
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-20/users/me',
  headers: {
    authorization: '5677928b-be8e-49ee-ae63-e0ec29ade066',
    'Content-Type': 'application/json'
  }
}


const getUserInfo = () => {
  return request(`${config.baseUrl}`, {
    headers: config.headers
  })
}

const getInitialCards = () => {
  return request('https://nomoreparties.co/v1/plus-cohort-20/cards', {
    headers: config.headers
  })
}

const patchEditProfile = (username, description) => {
  return request(`${config.baseUrl}`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: username,
      about: description
    })
  })
}

const postNewCard = (name, link) => {
  return request('https://nomoreparties.co/v1/plus-cohort-20/cards', {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    })
  })
}

const putLikeCard = (cardId) => {
  return request(`https://nomoreparties.co/v1/plus-cohort-20/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
}

const deleteLikeCard = (cardId) => {
  return request(`https://nomoreparties.co/v1/plus-cohort-20/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
}

const patchAvatarEdit = (avatar) => {
  return request('https://nomoreparties.co/v1/plus-cohort-20/users/me/avatar', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    })
  })
}

const deleteCard = (cardId) => {
  return request(`https://nomoreparties.co/v1/plus-cohort-20/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
}


export {
  getUserInfo, getInitialCards, patchEditProfile, postNewCard,
  putLikeCard, deleteLikeCard, patchAvatarEdit, deleteCard
}
*/
