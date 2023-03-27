import {
  request
} from './utils.js'

export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl,
      this._headers = options.headers
  }

  _getUserInfo() {
    return request(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
  }

  getInitialCards() {
    return request(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
  }

  patchEditProfile(data) {
    return request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.description
      })
    })
  }

  postNewCard(data) {
    return request(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    })
  }

  putLikeCard(cardId) {
    return request(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
  }
  deleteLikeCard(cardId) {
    return request(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  patchAvatarEdit(avatar) {
    return request(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar,
      })
    })
  }

  deleteCard(cardId) {
    return request(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

}
