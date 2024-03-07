<h1> Проект: Место </h1>

 Главная цель проекта - дать пользователю показать свои увлечения путешествиями другим, тем самым вдохновить ич.

# Веб-страница состоит из:
<ul>
  <li>Шапки страницы</li>
  <li>Основного контента (в котором показана, информация о том, кому принадлежит профиль, какие интересные места пользовать посетил)</li>
  <li>Подвал</li>
</ul>

# С сайтом можете ознакомиться по ссылке https://valeryvigovskaya.github.io/mesto-project/

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
  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>&nbsp;
</div>
