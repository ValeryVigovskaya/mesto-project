export default class Card {
  constructor(data, user, selector, {
    handleCardDelete,
    handleCardClick,
    handleLikeClick
  }) {
    this._name = data.name;
    this._cardId = data._id;
    this._link = data.link;
    this._like = data.likes;
    this._elementTemplate = selector;
    this._id = data.owner._id;
    this.id = user;
    this._handleLikeClick = handleLikeClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardClick = handleCardClick;
    this._card = data.card;
  }

  _createElement() {
    const elementsClone = document.querySelector(this._elementTemplate).content.querySelector('.element').cloneNode(true);
    return elementsClone;
  }

  generate() {
    this._element = this._createElement();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__caption').textContent = this._name;
    this._deleteButton = this._element.querySelector('.element__delete');
    this._likeAmout = this._element.querySelector('.element__amount-likes');
    this._likeAmout.textContent = this._like.length;
    this._likeButton = this._element.querySelector('.element__like');
    this._imageButton = this._element.querySelector('.element__image');
    this._setDeleteBtnState();
    this._isLiked();
    this._setEventListeners();
    return this._element;
  }

  _isLiked() {
    this._like.forEach(element => {
      if (this.id == element._id) {
        this._likeButton.classList.add('element__like_active');
      }
    });
  }

  _deleteCard(){
    this._element.remove();
  }

  _setDeleteBtnState() {
    if (this.id !== this._id) {
      this._deleteButton.classList.add('element__delete_inactive');
    }
  }

  _handleAddLike(data) {
    this._likes = data.likes;
    this._likeButton.classList.toggle('element__like_active');
    this._likeAmout.textContent = this._likes.length;
  }

  _handleRemoveLike(data) {
    this._likes = data.likes;
    this._likeButton.classList.remove('element__like_active');
    this._likeAmout.textContent = this._likes.length;
  }

  _checkActiveClass() {
    return this._likeButton.classList.contains('element__like_active');
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._cardId, this.id));
    this._deleteButton.addEventListener('click', () => this._handleCardDelete(this._cardId));
    this._imageButton.addEventListener('click', () => this._handleCardClick(this._link, this._name));
  }
}
