import { allData } from './data.js';
import { changeLanguageOfMap } from './map.js';
import {
  FEELS_LIKE,
  getWeatherDescription,
  TEMP_FIRST,
  TEMP_SECOND,
  TEMP_THIRD,
  TEMP_TODAY,
} from './weather.js';
import { getPlace, getUserLocation } from './geolocation.js';
import { LANGUAGE } from './language.js';
import { showError } from './error.js';
import { translate } from './utils.js';

const ARROW_LANGUAGE = document.querySelector('.arrow-language');
const BACKGROUND = document.querySelector('.background');
const C_DEG_BUTTON = document.querySelector('.header__button-celsius-deg');
const F_DEG_BUTTON = document.querySelector('.header__button-fahrenheit-deg');
const CIRCLE_ARROWS = document.querySelector('.header__refresh-circle-arrows');
const CURRENT_LANG = document.querySelector('.current-language');
const CURRENT_LOCATION = document.querySelector(
  '.header__button-current-location'
);
const DROPDOWN_MENU = document.querySelector('.dropdown-menu');
const DROPDOWN_MENU_ITEMS = document.querySelectorAll('.dropdown-menu__item');
const LANG_MENU = document.querySelector('.header__language-menu-button');
const REFRESH_BUTTON = document.querySelector('.header__button-refresh-bg');
const TEMPERATURE_WRAPPER = document.querySelector('.header__temperature');

let angleRotation = 360;
let isOpenLangMenu = false;

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
  const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
  const URL = `https://api.unsplash.com/photos/random?${PARAMETERS}&client_id=${ACCESS_KEY}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      loadImage(data.urls.regular);
    })
    .catch((error) => {
      console.error(error);

      return;
    });
}

function changeLanguage(language) {
  allData.currentLanguage = language;
  CURRENT_LANG.textContent = language.toUpperCase();

  DROPDOWN_MENU_ITEMS.forEach((langButton) => {
    if (langButton.id === allData.currentLanguage) {
      langButton.disabled = true;
      langButton.classList.add('dropdown-menu__item--active');
    } else {
      langButton.disabled = false;
      langButton.classList.remove('dropdown-menu__item--active');
    }
  });
}

export function getLanguageInLocalStorage() {
  const LANGUAGE = localStorage.getItem('language');
  const EN = 'en';

  if (LANGUAGE === null) {
    changeLanguage(EN);
  } else {
    changeLanguage(LANGUAGE);
  }
}

export function setLanguageInLocalStorage() {
  localStorage.setItem('language', allData.currentLanguage);
}

export function convertTemperature() {
  const CELSIUS = 'celsius';
  const FAHRENHEIT = 'fahrenheit';
  const TEMPERATURE_UNIT = allData.currentUnitOfTemperature;

  return new Promise((resolve) => {
    if (TEMPERATURE_UNIT === CELSIUS) {
      TEMP_TODAY.textContent = allData.temperatureToday;
      TEMP_FIRST.textContent = allData.temperatureNextThreeDays[0];
      TEMP_SECOND.textContent = allData.temperatureNextThreeDays[1];
      TEMP_THIRD.textContent = allData.temperatureNextThreeDays[2];
      FEELS_LIKE.textContent = allData.feelsLike;
    }

    if (TEMPERATURE_UNIT === FAHRENHEIT) {
      TEMP_TODAY.textContent = allData.temperatureTodayInFahrenheit;
      TEMP_FIRST.textContent = allData.temperatureNextThreeDaysInFahrenheit[0];
      TEMP_SECOND.textContent = allData.temperatureNextThreeDaysInFahrenheit[1];
      TEMP_THIRD.textContent = allData.temperatureNextThreeDaysInFahrenheit[2];
      FEELS_LIKE.textContent = allData.feelsLikeInFahrenheit;
    }

    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export function getUnitOfTemperatureInLocalStorage() {
  const TEMPERATURE_UNIT = localStorage.getItem('unit-of-temperature');

  if (TEMPERATURE_UNIT === null || TEMPERATURE_UNIT === 'celsius') {
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

function changeStateButtons(temperature) {
  const CELSIUS = 'celsius';

  let firstButton = temperature === CELSIUS ? C_DEG_BUTTON : F_DEG_BUTTON;
  let secondButton = temperature === CELSIUS ? F_DEG_BUTTON : C_DEG_BUTTON;

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

function showLanguageMenu() {
  isOpenLangMenu = true;
  ARROW_LANGUAGE.classList.add('arrow-language--up');
  LANG_MENU.classList.add('header__language-menu-button--active');
  DROPDOWN_MENU.style.display = 'block';

  setTimeout(() => {
    DROPDOWN_MENU.classList.add('dropdown-menu--open');
  }, 200);
}

function hideLanguageMenu() {
  isOpenLangMenu = false;
  ARROW_LANGUAGE.classList.remove('arrow-language--up');
  LANG_MENU.classList.remove('header__language-menu-button--active');
  DROPDOWN_MENU.classList.remove('dropdown-menu--open');

  setTimeout(() => {
    DROPDOWN_MENU.style.display = 'none';
  }, 600);
}

REFRESH_BUTTON.addEventListener('click', () => {
  CIRCLE_ARROWS.style.transform = `rotate(${angleRotation}deg)`;
  angleRotation += 360;

  try {
    updateBackground();
  } catch (error) {
    showError(LANGUAGE.error.background[allData.currentLanguage]);
    console.error(error);

    return;
  }
});

LANG_MENU.addEventListener('click', () => {
  if (isOpenLangMenu) {
    hideLanguageMenu();
  } else {
    showLanguageMenu();
  }
});

DROPDOWN_MENU.addEventListener('click', (event) => {
  const LANGUAGE = event.target.id;

  changeLanguage(LANGUAGE);
  setLanguageInLocalStorage();
  translate();
  changeLanguageOfMap();
  getWeatherDescription(allData.coordinates.lat, allData.coordinates.lng);
  getPlace(allData.coordinates.lat, allData.coordinates.lng);
  hideLanguageMenu();
});

TEMPERATURE_WRAPPER.addEventListener('click', (event) => {
  const TEMPERATURE = event.target.id;

  allData.currentUnitOfTemperature = TEMPERATURE;
  setUnitOfTemperatureInLocalStorage();
  convertTemperature();
  changeStateButtons(TEMPERATURE);
});

CURRENT_LOCATION.addEventListener('click', getUserLocation);

document.onclick = (event) => {
  if (!isOpenLangMenu) {
    return;
  }

  if (
    event.target !== LANG_MENU &&
    event.target !== CURRENT_LANG &&
    event.target !== DROPDOWN_MENU &&
    event.target !== ARROW_LANGUAGE
  ) {
    hideLanguageMenu();
  }
};
