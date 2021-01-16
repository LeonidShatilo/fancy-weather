import { translate } from './utils.js';
import { allData } from './data.js';
import { LANGUAGE } from './language.js';
import { showError } from './error.js';

const BACKGROUND = document.querySelector('.background');
const REFRESH_BUTTON = document.querySelector('.header__button-refresh-bg');
const CIRCLE_ARROWS = document.querySelector('.header__refresh-circle-arrows');
const ENG_LANG_BUTTON = document.querySelector('.header__button-eng-lang');
const RU_LANG_BUTTON = document.querySelector('.header__button-ru-lang');
const F_DEG_BUTTON = document.querySelector('.header__button-fahrenheit-deg');
const C_DEG_BUTTON = document.querySelector('.header__button-celsius-deg');

let angleRotation = 360;

function removeBackgroundElement() {
  BACKGROUND.removeChild(BACKGROUND.children[0]);
}

function changeVisibility() {
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

function getImageLink() {
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

function getLanguageInLocalStorage() {
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

function setLanguageInLocalStorage() {
  localStorage.setItem('language', allData.currentLanguage);
}

function getUnitOfTemperatureInLocalStorage() {
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

function setUnitOfTemperatureInLocalStorage() {
  localStorage.setItem('unit-of-temperature', allData.currentUnitOfTemperature);
}

REFRESH_BUTTON.addEventListener('click', () => {
  try {
    CIRCLE_ARROWS.style.transform = `rotate(${angleRotation}deg)`;
    angleRotation += 360;
    changeVisibility();
    setTimeout(() => {
      getImageLink();
    }, 100);
  } catch (error) {
    showError(LANGUAGE.error.background[allData.currentLanguage]);
    return;
  }
});

function changeStateButtons(firstButton, secondButton) {
  firstButton.disabled = true;
  secondButton.disabled = false;
  firstButton.classList.add('header__button--active');
  secondButton.classList.remove('header__button--active');
}

ENG_LANG_BUTTON.addEventListener('click', () => {
  allData.currentLanguage = 'en';
  setLanguageInLocalStorage();
  translate();
  changeStateButtons(ENG_LANG_BUTTON, RU_LANG_BUTTON);
});

RU_LANG_BUTTON.addEventListener('click', () => {
  allData.currentLanguage = 'ru';
  setLanguageInLocalStorage();
  translate();
  changeStateButtons(RU_LANG_BUTTON, ENG_LANG_BUTTON);
});

F_DEG_BUTTON.addEventListener('click', () => {
  allData.currentUnitOfTemperature = 'fahrenheit';
  setUnitOfTemperatureInLocalStorage();
  changeStateButtons(F_DEG_BUTTON, C_DEG_BUTTON);
});

C_DEG_BUTTON.addEventListener('click', () => {
  allData.currentUnitOfTemperature = 'celsius';
  setUnitOfTemperatureInLocalStorage();
  changeStateButtons(C_DEG_BUTTON, F_DEG_BUTTON);
});

window.onload = () => {
  getImageLink();
};

getLanguageInLocalStorage();
getUnitOfTemperatureInLocalStorage();
setLanguageInLocalStorage();
setUnitOfTemperatureInLocalStorage();
translate();
