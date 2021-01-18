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

export function showDate() {
  let today = new Date();
  let dayWeek = today.getDay();
  let dayDate = today.getDate();
  let dayMonth = today.getMonth();
  let year = today.getFullYear();

  allData.date.year = year;
  allData.date.month = dayMonth + 1;
  allData.date.day = dayDate;

  if (allData.date.month < 9) {
    allData.date.month = `0${dayMonth + 1}`;
  }
  if (allData.date.day < 10) {
    allData.date.day = `0${dayDate}`;
  }

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

export function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  TIME.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;

  if (hour === 0 && min === 0) {
    showDate();
  }

  setTimeout(showTime, 1000);
}
