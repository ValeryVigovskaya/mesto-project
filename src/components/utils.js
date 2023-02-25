import { popupEdit, popupAdd, textInput, jobInput, username, description, elementsList, nameInput, linkInput } from './variables.js'
import { createElement } from './card.js'
import { closePopup } from './modal.js'
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitEditProfileForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value
  textInput.value;
  jobInput.value;
  // Вставьте новые значения с помощью textContent
  username.textContent = textInput.value;
  description.textContent = jobInput.value;
  closePopup(popupEdit);
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitCardForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  elementsList.prepend(createElement(linkInput.value, nameInput.value));
  evt.target.reset();
  closePopup(popupAdd);
}


export { submitEditProfileForm, submitCardForm }
