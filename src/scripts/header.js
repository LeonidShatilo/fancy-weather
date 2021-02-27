import { translate } from './utils.js';
import { allData } from './data.js';
import { LANGUAGE } from './language.js';
import { showError } from './error.js';
import {
  getWeatherDescription,
  TEMP_TODAY,
  TEMP_FIRST,
  TEMP_SECOND,
  TEMP_THIRD,
  FEELS_LIKE,
} from './weather.js';
import { getPlace, getUserLocation } from './geolocation.js';
import { changeLanguageOfMap } from './map.js';

const BACKGROUND = document.querySelector('.background');
const REFRESH_BUTTON = document.querySelector('.header__button-refresh-bg');
const CIRCLE_ARROWS = document.querySelector('.header__refresh-circle-arrows');
const ENG_LANG_BUTTON = document.querySelector('.header__button-eng-lang');
const RU_LANG_BUTTON = document.querySelector('.header__button-ru-lang');
const F_DEG_BUTTON = document.querySelector('.header__button-fahrenheit-deg');
const C_DEG_BUTTON = document.querySelector('.header__button-celsius-deg');
const CURRENT_LOCATION = document.querySelector(
  '.header__button-current-location'
);

let angleRotation = 360;

function removeBackgroundElement() {
  BACKGROUND.removeChild(BACKGROUND.children[0]);
}

function changeBackgroundVisibility() {
  const BACKGROUND_IMAGES = document.querySelectorAll('.background__image');

  BACKGROUND_IMAGES[1].classList.add('visible');
  setTimeout(() => {
    removeBackgroundElement();
  }, 700);
}

function loadImage(url) {
  const IMAGE_ELEMENT = document.createElement('div');
  IMAGE_ELEMENT.className = 'background__image';
  IMAGE_ELEMENT.src = url;
  IMAGE_ELEMENT.style.backgroundImage = `url(${IMAGE_ELEMENT.src})`;
  BACKGROUND.append(IMAGE_ELEMENT);
}

export function getImageLink() {
  const PARAMETERS = 'orientation=landscape&query=nature&per_page=1';
  const ACCESS_KEY = 'eolw5MBc3CTg7x5r_JuJRPpvIqIGAX6LIE9fyDcStps';
  const URL = `https://api.unsplash.com/photos/random?${PARAMETERS}&client_id=${ACCESS_KEY}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      loadImage(data.urls.regular);
    })
    .catch(() => {
      return;
    });
}

export function getLanguageInLocalStorage() {
  if (
    localStorage.getItem('language') === null ||
    localStorage.getItem('language') === 'en'
  ) {
    allData.currentLanguage = 'en';
    ENG_LANG_BUTTON.classList.toggle('header__button--active');
  } else {
    allData.currentLanguage = 'ru';
    RU_LANG_BUTTON.classList.toggle('header__button--active');
  }
}

export function setLanguageInLocalStorage() {
  localStorage.setItem('language', allData.currentLanguage);
}

export function convertTemperature() {
  return new Promise((resolve) => {
    if (allData.currentUnitOfTemperature === 'celsius') {
      TEMP_TODAY.innerHTML = allData.temperatureToday;
      TEMP_FIRST.innerHTML = allData.temperatureNextThreeDays[0];
      TEMP_SECOND.innerHTML = allData.temperatureNextThreeDays[1];
      TEMP_THIRD.innerHTML = allData.temperatureNextThreeDays[2];
      FEELS_LIKE.innerHTML = allData.feelsLike;
    }
    if (allData.currentUnitOfTemperature === 'fahrenheit') {
      TEMP_TODAY.innerHTML = allData.temperatureTodayInFahrenheit;
      TEMP_FIRST.innerHTML = allData.temperatureNextThreeDaysInFahrenheit[0];
      TEMP_SECOND.innerHTML = allData.temperatureNextThreeDaysInFahrenheit[1];
      TEMP_THIRD.innerHTML = allData.temperatureNextThreeDaysInFahrenheit[2];
      FEELS_LIKE.innerHTML = allData.feelsLikeInFahrenheit;
    }
    setTimeout(() => {
      resolve();
    }, 0);
  });
}

export function getUnitOfTemperatureInLocalStorage() {
  if (
    localStorage.getItem('unit-of-temperature') === null ||
    localStorage.getItem('unit-of-temperature') === 'celsius'
  ) {
    allData.currentUnitOfTemperature = 'celsius';
    C_DEG_BUTTON.classList.toggle('header__button--active');
  } else {
    allData.currentUnitOfTemperature = 'fahrenheit';
    F_DEG_BUTTON.classList.toggle('header__button--active');
  }
}

export function setUnitOfTemperatureInLocalStorage() {
  localStorage.setItem('unit-of-temperature', allData.currentUnitOfTemperature);
}

function changeStateButtons(firstButton, secondButton) {
  firstButton.disabled = true;
  secondButton.disabled = false;
  firstButton.classList.add('header__button--active');
  secondButton.classList.remove('header__button--active');
}

export function updateBackground() {
  changeBackgroundVisibility();
  setTimeout(() => {
    getImageLink();
  }, 100);
}

REFRESH_BUTTON.addEventListener('click', () => {
  try {
    CIRCLE_ARROWS.style.transform = `rotate(${angleRotation}deg)`;
    angleRotation += 360;
    updateBackground();
  } catch (error) {
    showError(LANGUAGE.error.background[allData.currentLanguage]);
    return;
  }
});

ENG_LANG_BUTTON.addEventListener('click', () => {
  allData.currentLanguage = 'en';
  setLanguageInLocalStorage();
  translate();
  changeLanguageOfMap();
  getWeatherDescription(allData.coordinates.lat, allData.coordinates.lng);
  getPlace(allData.coordinates.lat, allData.coordinates.lng);
  changeStateButtons(ENG_LANG_BUTTON, RU_LANG_BUTTON);
});

RU_LANG_BUTTON.addEventListener('click', () => {
  allData.currentLanguage = 'ru';
  setLanguageInLocalStorage();
  translate();
  changeLanguageOfMap();
  getWeatherDescription(allData.coordinates.lat, allData.coordinates.lng);
  getPlace(allData.coordinates.lat, allData.coordinates.lng);
  changeStateButtons(RU_LANG_BUTTON, ENG_LANG_BUTTON);
});

F_DEG_BUTTON.addEventListener('click', () => {
  allData.currentUnitOfTemperature = 'fahrenheit';
  setUnitOfTemperatureInLocalStorage();
  convertTemperature();
  changeStateButtons(F_DEG_BUTTON, C_DEG_BUTTON);
});

C_DEG_BUTTON.addEventListener('click', () => {
  allData.currentUnitOfTemperature = 'celsius';
  setUnitOfTemperatureInLocalStorage();
  convertTemperature();
  changeStateButtons(C_DEG_BUTTON, F_DEG_BUTTON);
});

CURRENT_LOCATION.addEventListener('click', getUserLocation);
