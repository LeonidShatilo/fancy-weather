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

import { showTime, showDate } from './scripts/time.js';
import { getPlace, insertTextLocation } from './scripts/geolocation.js';
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
import { setMap, changeLanguageOfMap } from './scripts/map.js';
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

export function setTime(offset) {
  return new Promise((resolve) => {
    showTime(offset);
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
  getAndSetLanguage()
    .then(() => addPreloaderText())
    .then(() => {
      setMap(allData.coordinates.lat, allData.coordinates.lng);
      getWeather(allData.coordinates.lat, allData.coordinates.lng);
      getPlace(allData.coordinates.lat, allData.coordinates.lng);
      insertTextLocation(allData.coordinates.lat, allData.coordinates.lng);
    })
    .then(() => getAndSetUnitOfTemperature())
    .then(() => setTime())
    .then(() => addText())
    .then(() => removePreloader())
    .then(() => {
      window.onload = () => {
        changeLanguageOfMap();
        getImageLink();
      };
    });

  voiceSearch();
}

runApp();
