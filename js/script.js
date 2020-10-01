"use strict";

window.addEventListener('DOMContentLoaded', () => {
                                    // Создал переменные под каждую вкладку
    const tabs = document.querySelectorAll('.tabheader__item'), // Каждая вкладка
          tabsContent = document.querySelectorAll('.tabcontent'), // Описание вкладок
          tabsParent = document.querySelector('.tabheader__items'); // Отвечает за весь блок вкладок

    
    function hideTabContent() { // Скрываем ненужные вкладки
        tabsContent.forEach(item => { // Перебираем каждый контент отдельно через форич
            item.style.display = 'none'; // Скрыли весь контент которые есть на сайте
        }); // Эта функция занимается только скрытием вкладок (табов)

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) { // Показываем нужные вкладки
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }


    hideTabContent();
    showTabContent(); // Итог: создали две функции чтобы скрывать ненужные вкладки и показывать дефолтную Фитнес


    // Создаем делегирование событий, назначаем обработчик событий клика

    tabsParent.addEventListener('click', (event) => { // создаем колбек, добавляем объект событие event
        const target = event.target; // создали переменную для скоращения event.target

        if (target && target.classList.contains('tabheader__item')) { // C помощью контейнс будет точно определять 
          tabs.forEach((item, i) => { // что мы кликнули в таб чтобы не кликать в родителя (в пустое место)
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        });
    }
    });

});