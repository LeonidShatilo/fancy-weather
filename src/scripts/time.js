import { LANGUAGE } from './language.js';
import { allData } from './data.js';
import { getWeather } from './weather.js';

const DATE = document.querySelector('.title__date');
const TIME = document.querySelector('.title__time');
const FIRST_DAY = document.querySelector('.weather__title-first-day');
const SECOND_DAY = document.querySelector('.weather__title-second-day');
const THIRD_DAY = document.querySelector('.weather__title-third-day');

let timeOffset = 0;
let incomeOffset;

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

export function showDate() {
  let today = new Date();
  today.setSeconds(today.getSeconds() + incomeOffset + timeOffset);
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

export function showTime(offset) {
  let today = new Date();
  timeOffset = today.getTimezoneOffset() * 60;

  if (offset === undefined) {
    allData.offset = 0 - timeOffset;
    incomeOffset = timeOffset;
  }

  incomeOffset = offset || 0;
  today.setSeconds(today.getSeconds() + incomeOffset + timeOffset);

  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  TIME.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;

  if (hour === 0 && min === 0) {
    showDate();
    getWeather(allData.coordinates.lat, allData.coordinates.lng);
  }
}
