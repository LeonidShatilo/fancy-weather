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
import './scripts/map.js';
import './scripts/speechRecognition.js';

import { allData } from './scripts/data.js';
import { addPreloaderText, removePreloader } from './scripts/preloader.js';
import { changeLanguageOfMap, setMap } from './scripts/map.js';
import {
  convertTemperature,
  getImageLink,
  getLanguageInLocalStorage,
  getUnitOfTemperatureInLocalStorage,
  setLanguageInLocalStorage,
  setUnitOfTemperatureInLocalStorage,
} from './scripts/header.js';
import {
  getPlace,
  getUserCity,
  insertTextLocation,
} from './scripts/geolocation.js';
import { getWeather } from './scripts/weather.js';
import { showTime, showDate } from './scripts/time.js';
import { translate, updateTime } from './scripts/utils.js';
import { voiceSearch } from './scripts/speechRecognition.js';

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

export function setTime() {
  return new Promise((resolve) => {
    showTime();
    showDate();
    updateTime(allData.offset);

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
  getAndSetLanguage()
    .then(() => addPreloaderText())
    .then(() => setTime())
    .then(() => addText())
    .then(() => getUserCity())
    .then(() => setMap(allData.coordinates.lat, allData.coordinates.lng))
    .then(() => getWeather(allData.coordinates.lat, allData.coordinates.lng))
    .then(() => getPlace(allData.coordinates.lat, allData.coordinates.lng))
    .then(() =>
      insertTextLocation(allData.coordinates.lat, allData.coordinates.lng)
    )
    .then(() => getAndSetUnitOfTemperature())
    .then(() => convertTemperature())
    .then(() => changeLanguageOfMap())
    .then(() => removePreloader());

  window.onload = () => {
    getImageLink();
    voiceSearch();
  };
}

runApp();
