import { LANGUAGE } from './language.js';
import { currentLanguage } from './header.js';

const DATE = document.querySelector('.title__date');
const TIME = document.querySelector('.title__time');
const FIRST_DAY = document.querySelector('.weather__title-first-day');
const SECOND_DAY = document.querySelector('.weather__second-day');
const THIRD_DAY = document.querySelector('.weather__third-day');

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  TIME.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
  setTimeout(showTime, 1000);
}

function showDate() {
  let today = new Date();
  let dayWeek = today.getDay();
  let dayDate = today.getDate();
  let dayMonth = today.getMonth();

  DATE.innerHTML = `${LANGUAGE.shortDayOfWeek[currentLanguage][dayWeek]},
                    ${dayDate} ${LANGUAGE.month[currentLanguage][dayMonth]}`;
}

showTime();
showDate();
