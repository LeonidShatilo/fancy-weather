import { allData } from './data.js';
import { getWeather } from './weather.js';
import { LANGUAGE } from './language.js';
import { addZero } from './utils.js';

const DATE = document.querySelector('.title__date');
const TIME = document.querySelector('.title__time');
const FIRST_DAY = document.querySelector('.weather__title-first-day');
const SECOND_DAY = document.querySelector('.weather__title-second-day');
const THIRD_DAY = document.querySelector('.weather__title-third-day');

let timeOffset = 0;
let incomeOffset;

export function showDate() {
  let today = new Date();
  today.setSeconds(today.getSeconds() + incomeOffset + timeOffset);
  let dayWeek = today.getDay();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  allData.date.year = year;
  allData.date.month = month + 1;
  allData.date.day = day;

  DATE.textContent = `${
    LANGUAGE.shortDayOfWeek[allData.currentLanguage][dayWeek]
  }, ${day} ${LANGUAGE.month[allData.currentLanguage][month]}`;

  today.setDate(today.getDate() + 1);
  allData.date.nextDays[0] = today.getDate();
  allData.date.monthsOfNextDays[0] = today.getMonth() + 1;
  let firstDay = today.getDay();

  today.setDate(today.getDate() + 1);
  allData.date.nextDays[1] = today.getDate();
  allData.date.monthsOfNextDays[1] = today.getMonth() + 1;
  let secondDay = today.getDay();

  today.setDate(today.getDate() + 1);
  allData.date.nextDays[2] = today.getDate();
  allData.date.monthsOfNextDays[2] = today.getMonth() + 1;
  let thirdDay = today.getDay();

  FIRST_DAY.textContent = `${
    LANGUAGE.dayOfWeek[allData.currentLanguage][firstDay]
  }`;
  SECOND_DAY.textContent = `${
    LANGUAGE.dayOfWeek[allData.currentLanguage][secondDay]
  }`;
  THIRD_DAY.textContent = `${
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

  TIME.textContent = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;

  if (hour === 0 && min === 0) {
    showDate();
    getWeather(allData.coordinates.lat, allData.coordinates.lng);
  }
}
