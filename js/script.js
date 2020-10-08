"use strict";

window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabParent = document.querySelector('.tabheader__items');


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const deadline = '2020-10-10'; // Создали дедлайн

    // Получаем разницу между датами с помощью функции
    function getTimeRemaining(endtime) { // Создаем переменную внутри функции
        const t = Date.parse(endtime) - Date.parse(new Date()), // когда функция запускается
        // мы получим разницу в миллисекундах
              days = Math.floor(t / (1000 * 60 * 60 * 24)), // 1000 миллисекунд умножаем на 60, получаем колл
        // млсек в одной минуте умножаем еще на 60 и получаем млсек в одном часе и умножаем на 24 часа,
        // получаем млсек в сутках
        // Math.floor - это округление до целого
              hours = Math.floor(t / (1000 * 60 * 60) % 24), // такая же логика, только добавляем еще остаток
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60); // Теперь есть операции которые рассчитывают оставшееся время
              // чтобы использовать эти переменные не только внутри, буду использовать return
        
        return { // создаем объект для использования переменных вне одной функции
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    } 

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    // Пишу функцию для того чтобы таймер отображался на странице

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
              
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);



    // Modal

    // разобрать подробно тему с data-modal, data-close. то что я прописал сейчас в классах в HTML


    const modalTrigger = document.querySelector('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

});