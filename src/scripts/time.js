import { LANGUAGE } from './language.js';
import { allData } from './data.js';

const DATE = document.querySelector('.title__date');
const TIME = document.querySelector('.title__time');
const FIRST_DAY = document.querySelector('.weather__title-first-day');
const SECOND_DAY = document.querySelector('.weather__title-second-day');
const THIRD_DAY = document.querySelector('.weather__title-third-day');

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

export function showDate() {
  let today = new Date();
  let dayWeek = today.getDay();
  let dayDate = today.getDate();
  let dayMonth = today.getMonth();

  DATE.innerHTML = `${
    LANGUAGE.shortDayOfWeek[allData.currentLanguage][dayWeek]
  },
  ${dayDate} ${LANGUAGE.month[allData.currentLanguage][dayMonth]}`;

  today.setDate(today.getDate() + 1);
  let firstDay = today.getDay();
  today.setDate(today.getDate() + 1);
  let secondDay = today.getDay();
  today.setDate(today.getDate() + 1);
  let thirdDay = today.getDay();

  FIRST_DAY.innerHTML = `${
    LANGUAGE.dayOfWeek[allData.currentLanguage][firstDay]
  }`;
  SECOND_DAY.innerHTML = `${
    LANGUAGE.dayOfWeek[allData.currentLanguage][secondDay]
  }`;
  THIRD_DAY.innerHTML = `${
    LANGUAGE.dayOfWeek[allData.currentLanguage][thirdDay]
  }`;
}

showTime();
showDate();
