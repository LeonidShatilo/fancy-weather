import './index.html';
import './main.scss';
import './scripts/utils.js';
import './scripts/data.js';
import './scripts/language.js';
import './scripts/error.js';
import './scripts/time.js';
import './scripts/header.js';
import './scripts/search.js';
import './scripts/geolocation.js';
import './scripts/weather.js';
import './scripts/preloader.js';

import { showTime, showDate } from './scripts/time.js';
import { getUserCoordinates, getPlace } from './scripts/geolocation.js';
import { translate } from './scripts/utils.js';
import {
  getImageLink,
  getLanguageInLocalStorage,
  getUnitOfTemperatureInLocalStorage,
  setLanguageInLocalStorage,
  setUnitOfTemperatureInLocalStorage,
} from './scripts/header.js';
import { getWeather } from './scripts/weather.js';
import { allData } from './scripts/data.js';
import { addPreloaderText, removePreloader } from './scripts/preloader.js';

function getAndSetLanguage() {
  return new Promise((resolve) => {
    getLanguageInLocalStorage();
    setLanguageInLocalStorage();
    setTimeout(() => {
      resolve();
    }, 0);
  });
}

function getAndSetUnitOfTemperature() {
  return new Promise((resolve) => {
    getUnitOfTemperatureInLocalStorage();
    setUnitOfTemperatureInLocalStorage();
    setTimeout(() => {
      resolve();
    }, 0);
  });
}

function setTime() {
  return new Promise((resolve) => {
    showTime();
    showDate();
    setTimeout(() => {
      resolve();
    }, 0);
  });
}

function addText() {
  return new Promise((resolve) => {
    translate();
    setTimeout(() => {
      resolve();
    }, 0);
  });
}

function runApp() {
  getUserCoordinates()
    .then(() => getAndSetLanguage())
    .then(() => addPreloaderText())
    .then(() => setTime())
    .then(() => getUserCoordinates())
    .then(() =>
      getWeather(allData.userCoordinates.lat, allData.userCoordinates.lng)
    )
    .then(() => getAndSetUnitOfTemperature())
    .then(() =>
      getPlace(allData.userCoordinates.lat, allData.userCoordinates.lng)
    )
    .then(() => addText())
    .then(() => removePreloader());
}

window.onload = () => {
  getImageLink();
};

runApp();
