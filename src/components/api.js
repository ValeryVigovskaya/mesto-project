import { request } from './utils.js'

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
