'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => { // делаем обработчик события на наше окно
    const request = new XMLHttpRequest(); // Создали переменную с запросом на сервер
    // new - создание нового объекта

    request.open('GET', 'js/current.json'); // применил метод open, этот метод собирает настройки для будущего
    // запроса. Далее поместили аргументы внутрь этого метода
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // передам json файл
    request.send(); // Отправляем запрос. Для пост запроса прописывается аргумент внутри send('body')

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response); // в data получил объект JS который можем использовать
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); // с помощью ToFixed добавили
        } else { // правило где будет не более 2 цифр после точки
            inputUsd.value = "Что-то пошло не так"; // сообщение на случай если запрос не прошел
        }

    });

    // Свойства 
    // readystatechange - это событие отслеживает статус готовности нашего запроса в данный момент
    // status - это свойство показывает статус нашего запроса, 404 not found и т.д
    // statusText - это текстовое описание ответа от сервера
    // response - ответ от сервера
    // readyState - текущее состояние нашего запроса


});


// Альтренативный (более удобный) вариант

// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest(); 

//     request.open('GET', 'js/current.json'); 
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('load', () => { // *** с load команда срабатывает один раз когда запрос уже готов
//         if (request.status === 200) { // удалили request.readyState === 4 &&  - потому что он из-за load
//             console.log(request.response); // не остлеживается
//             const data = JSON.parse(request.response); // Статус 200 оставили так как может быть 404 и т.д. ***
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = "Что-то пошло не так";
//         }

//     });

// });