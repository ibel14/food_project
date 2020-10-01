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

});