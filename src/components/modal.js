//функция закрытия попапа по escape
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}

//СОЗДАНИЕ ФУНКЦИЙ
//универсальные функции открытия и закрытия
function openPopup(popup) {
  popup.classList.add('popup_opened');
  //слушатель для события закрытия попапа по escape
  document.addEventListener('keydown', closeByEscape)
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  //удаление слушателя
  document.removeEventListener('keydown', closeByEscape);
}


export { openPopup, closePopup }
