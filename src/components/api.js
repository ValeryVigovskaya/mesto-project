const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-20/users/me',
  headers: {
    authorization: '5677928b-be8e-49ee-ae63-e0ec29ade066',
    'Content-Type': 'application/json'
  }
}

const getUserInfo = () => {
  return fetch(`${config.baseUrl}`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
}

const getInitialCards = () => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-20/cards', {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
}

const patchEditProfile = (username, description) => {
  return fetch(`${config.baseUrl}`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: username,
      about: description
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
}

const postNewCard = (name, link) => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-20/cards', {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
}

const putLikeCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-20/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
}

const deleteLikeCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-20/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
}

const patchAvatarEdit = (avatar) => {
  return fetch('https://nomoreparties.co/v1/plus-cohort-20/users/me/avatar', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
}

const deleteCard = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/plus-cohort-20/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    });
}


export {
  getUserInfo, getInitialCards, patchEditProfile, postNewCard,
  putLikeCard, deleteLikeCard, patchAvatarEdit, deleteCard
}
