# Проект: Место


<div id="header" align="center">
  <img src="https://media.giphy.com/media/kDO5RDvqN0nLUxzN1i/giphy.gif" width="200"/>
</div>


 Главная цель проекта - дать пользователю показать свои увлечения путешествиями другим, тем самым вдохновить из.

 Он состоит из шапки страницы, основного контента (в котором показано, информация о том, кому принадлежит профиль, какие интересные места пользовать посетил) и подвал. С сайтом можете ознакомиться по ссылке https://valeryvigovskaya.github.io/mesto-project/

 Адаптивная верстка выполнена на HTML и CSS, в основе лежит флексверстка и grid layout. По модификатору popup_opened добавлено диалоговое окно для редактирования профиля. В новом обновлении реализовано дополнительно два модальных окна. Сам попап-блок позиционирован фиксировано, поэтому при адаптации экрана основной контент будет заблокирован. Используется форма для редактирования профиля. Подключен  JS - файл для корректной работы функциональности проекта, в нем реализованы открытия и закрытия попапов, можно добавить свою фотокарточку на странию, изменить имя и информацию о себе, можно посмотреть публикацию в полноразмерном масштабе, реализовано удаление карточки со страницы и можно поставить лайк на понравившемся фото.
 Новое обновление содержит валидацию форм. Закрытие попапов по overlay и Escape. Java-Script код разбит на модули. Сборка проекта произведена на Webpack.
 В последнем обновлении:
 - сверстан попап изменения аватарки пользователя;
 - реализованы запросы API(GET,POST, PATCH, PUT, DELETE) в отдельном модуле, а именно: получение данных пользователя с сервера; массив картинок с сервера; запрос на пост новой карточки клиента;
 удаление личной карточки; постановка и снятие лайка, изменение аватарки, обновление данных профиля.
 - подключен счетчик лайков, которые подтягивает данные с сервера, уменьшается или увеличивается, когда пользователь взаимодействует с карточкой.
 - когда введенная информация загружается, для пользователя появляется информация, что происходит сохранение, реализация этого дейсвия происходит через функцию изменения текста.




 ---
  :hammer_and_wrench: Используется :

 <div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML5" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" title="CSS" alt="CSS" width="40" height="40"/>&nbsp;
</div>


# Участники совместного програмирования
* Виговская Валерия e-mail: vigovskaya.lera@yandex.ru
* Вдовина Дарья e-mail: vdovinadn@gmail.com GitHub: https://github.com/Dvdovina
* Кирьянов Игорь e-mail: jaki.igor@yandex.ru GitHub https://github.com/Jaki1965

* Установлены данные участников совместного програмирования / Commit_6_2 Виговская Валерия /
* Промежуточный коммит / Commit_6_3 build Api  Виговская Валерия/
* Созданы методы класса api _getUserInfo, getInitialCards, patchEditProfile,  postNewCard, putLikeCard, deleteLikeCard, patchAvatarEdit, deleteCard / Commit_6_4 build api class Вдовина Дарья/
* Начали создавать класс Card с методами: клонирования template, обработки лайка, слушателя лайка / Commit_6_5 build card class Кирьянов Игорь/
* Созданы методы: слушателей, счетчика лайков. Отдельно создана функция handleCardClick - открытие popup картинка / Commit_6_6 build card class Виговская Валерия/
* Создан класс FormValidator со всеми приватными методами / Commit_6_7 build FormValidator class Вдовина Дарья/
* Создан класс Section / Commit_6_8 build Section class Кирьянов Игорь/
* Создан класс Popup / Commit_6_9 build Popup class Виговская Валерия/
* Создан класс PopupWithImage / Commit_6_10 build PopupWithImage class Вдовина Дарья/
* Создан, но до конца не реализован класс PopupWithForm / Commit_6_11 build PopupWithForm class Кирьянов Игорь/
* Реализован класс PopupWithForm / Commit_6_12 build PopupWithForm class Вдовина Дарья/
* Реализован класс PopupWithForm / Commit_6_13 build UserInfo class Виговская Валерия/
* Промежуточный коммит. Сделаны экспорты в index.js Пока не работает / Commit_6_14 imports index.js Кирьянов Игорь/
* Прмежуточный коммит. Препринята попытка прописать создание карточки в index.js/ Commit_6_15 build new Section Вдовина Дарья/
* Прмежуточный коммит. Еще одна поытка прописать создание карточки в index.js/ Commit_6_16 build new Section Виговская Валерия/
* Премежуточный коммит. Реализовано заполнение сетки карточками. Но реализация сделана на прямую. Не через класс Section. Требуется много доработок /Commit_6_17 fixes Card.js, Index.js  Кирьянов Игорь/
* Премежуточный коммит. Сделана попытка реализовать добавление карточек через экземпляр класса Section. Пока не пошло. / Commit_6_18 build new Section Виговская Валерия/
* Реализовано создание карточки через экземпляр класса Card и добавление карточек в сетку через экземпляр класса Section / Commit_6_19 build new Section Виговская Валерия/
* Промежуточный коммит.Сделали попыткуподключить метод _deleteCard().Не сработало. Будем править класс Card / Commit_6_20 build Card Вдовина Дарья/
* Реализован метод не отображать картинку если она создана другим пользователем / Commit_6_21 build Card Вдовина Дарья/
* Прмежуточный комит. Пробуем реализовать методы лайков./ Commit_6_22 build Card Вдовина Дарья/
* Реализован метод удаления собственной карточки./ Commit_6_23 build Card, method _deleteBtnState(), deleteCard API Вдовина Дарья/
* Исправлено название метода в классе Card./ Commit_6_24 fix Card class method name Вдовина Дарья/
* Реализован функционал отражения в карточке количества лайков./ Commit_6_25 build Card Кирьянов Игорь/
* Реализован функционал открытия попапа с картинкой, создан экземпляр класса PopupWithImage, пофиксили класс Popup, чтобы работал корректно ./ Commit_6_26 build Card, PopupWithImage, Popup Виговская Валерия/
* Реализован частично (без отправки на сервер) функционал отметки лайка. / Commit_6_27 build Card Кирьянов Игорь/
* Реализован частично (без отправки на сервер) функционал отметки лайка в экземпляре класса Card. / Commit_6_28 build new Card Кирьянов Игорь/
* Созданы экземпляры класса FormValidator в index.js/ Commit_6_29 build index.js validation Вдовина Дарья/
* Отредактирован класс PopupWithForm, начато редактирование UserInfo, созданы экземпляры, начал открываться попап редактирования профиля/ Commit_6_30 build index.js, PopupWithForm, UserInfo  Виговская Валерия/
* Переработка класса UserInfo и добавление его в index.js/Commit_6_31 build class UserInfo Вдовина Дарья/
* * Отредактирован класс PopupWithForm, добавлены изменения экземпляра класса/ Commit_6_31 build index.js, PopupWithForm  Виговская Валерия/
* Попытка реализации отправки данных пользователя на сервер/ Commit_6_32 build: api PatchEditProfile Вдовина Дарья/
* Вынесен слушатель кнопки редактирования из Prom.all/ Commit_6_33 build index.js  Виговская Валерия/
* Настроена передача данных пользователя/ Commit_6_33 build index.js API Вдовина Дарья /
* Промежуточный коммит/ Commit_6_34 build index.js API Вдовина Дарья/
* Промежуточный коммит. Не удается реализовать сохранение активного сердечка после обновления браузера / Commit_6_35 build index.js Кирьянов Игорь/
* Настроен счетчик лайков и удаление карточек нажатием на картинку/ Commit_6_36 fixes: like-counter/card removal/Вдовина Дарья
* Удалено событие проверки активного класса, взамен, создан метод проверки/ Commit_6_37 fixes: card and index/Виговская Валерия
* Кнопка лайка сохраняет свои свойства при перезагрузке/ Commit_6_38 build: like functionality/ Вдовина Дарья
* Добавлен рендер кнопки Сохранить/ Commit_6_39 build: renderLoading popups/ Виговская Валерия
* Вынесены функции createCard и createSection во внешнюю область. Проверена работоспособность. /Commit_6_40 build: submitAddCardForm / Кирьянов Игорь
* Реализовано создание новой карточки, но нет валидации формы и вновь созданная карточка добавляется, только после обновления браузера /Commit_6_41 build: submitAddCardForm / Кирьянов Игорь
* Реализовано в предварителоьной версии добавление новой карточки в контент без обновления браузера /Commit_6_42 build: submitAddCardForm / Кирьянов Игорь
* Промежуточный коммит. Создаем попап аватар/Commit_6_43 build: submitAvatarForm / Вдовина Дарья
* Промежуточный коммит. Создаем попап аватар, работает, но после обновления страницы/Commit_6_44 build: submitAvatarForm / Виговская Валерия
* Изменили открытие попапа аватарки, теперь работает/Commit_6_45 build: submitAvatarForm / Виговская Валерия
* Очищен код перед первым ревью. Проверена функциональность /Commit_6_46 refactor / Виговская Валерия, Вдовина Дарья, Кирьянов Игорь
