c# Проект: Место


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

# Устранение замечаний ревьюера. Ревью 1
* Устранено замечание N1 ("Применяете к экземпляру класса стандартную операцию — это не хорошо. Все операции над экземпляром должны быть описаны методами класса. Т.е. В Card должен быть метод который удаляет карту. Этот метод нужно использовать здесь") /commit 6_47 fix: index.js, card.js / Виговская Валерия
* Устранено замечание N2 ("Для всех запросов нужно обрабатывать ошибку в блоке catch")
* Устранено замечание N3 ("Для всех запросов нужно обрабатывать ошибку в блоке catch")
* Устранено замечание N4 ("Для всех запросов нужно обрабатывать ошибку в блоке catch")
* Устранено замечание N5 ("Нужно вставлять полученные данные от сервера, а не из полей ввода. В блок then приходит результат, его и нужно использовать для подстановки")  /commit 6_48 fix: index.js/ Кирьянов Игорь
* Устранено замечание N6 ("Экземпляры классов это обычные переменные. Переменные принято называть именами существительными, а не глаголом") /commit 6_49 fix: index.js / Виговская Валерия
* Устранено замечание N7 ("Данные из полей ввода должны приходить из PopupWithForm методом _getInputValues")  /commit 6_50 fix: index.js/ Кирьянов Игорь
* Устранено замечание N9 ("Экземпляры классов это обычные переменные. Переменные принято называть именами существительными, а не глаголом")
* Устранено замечание N10 ("Экземпляры классов это обычные переменные. Переменные принято называть именами существительными, а не глаголом")
* Устранено замечание N11  ("Данные из полей ввода для аватара приходят из PopupWithForm методом _getInputValues") /commit 6_51 fix: index.js/ Вдовина Дарья
* Устранено замечание N12  ("Импортировать что-то кроме родительских классов в файлы классов плохая практика. Все нужно передавать через конструктор*") / Вдовина Дарья
* Устранено замечание N15 ("Методы класса должны работать с одной сущностью, а не делать перебор. Сейчас при создании каждого экземпляра каждый раз вешаются слушатели событий на все модальные окна, т.е. задваивают их") /commit 6_52 fix: popup class, imports/ Вдовина Дарья
* Устранено замечание N13 ("Класс описывает абстрактную логику работы с единичной сущностью — в данном случае это форма. Не может быть методов которые обрабатывают коллекцию сущностей. Сейчас для каждого экземпляра задваиваются слушатели событий.") /commit 6_53 fix: formValidator/ Виговская Валерия
* Промежуточный комит /commit 6_54 build: index.js /
* Промежуточный комит /commit 6_55 build: index.js / Вдовина Дарья

