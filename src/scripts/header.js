import { showError } from './error.js';
import { LANGUAGE, translate } from './language.js';

const BACKGROUND = document.querySelector('.background');
const REFRESH_BUTTON = document.querySelector('.header__button-refresh-bg');
const CIRCLE_ARROWS = document.querySelector('.header__refresh-circle-arrows');
const ENG_LANG_BUTTON = document.querySelector('.header__button-eng-lang');
const RU_LANG_BUTTON = document.querySelector('.header__button-ru-lang');
const F_DEG_BUTTON = document.querySelector('.header__button-fahrenheit-deg');
const C_DEG_BUTTON = document.querySelector('.header__button-celsius-deg');

let angleRotation = 360;
export let currentLanguage = 'en';
let currentUnitOfTemperature = 'celsius';

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
    .then((response) => {
      return response.json();
    })
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
    currentLanguage = 'en';
    ENG_LANG_BUTTON.classList.toggle('header__button--active');
  } else {
    currentLanguage = 'ru';
    RU_LANG_BUTTON.classList.toggle('header__button--active');
  }
}

function setLanguageInLocalStorage() {
  localStorage.setItem('language', currentLanguage);
}

function getUnitOfTemperatureInLocalStorage() {
  if (
    localStorage.getItem('unit-of-temperature') === null ||
    localStorage.getItem('unit-of-temperature') === 'celsius'
  ) {
    currentUnitOfTemperature = 'celsius';
    C_DEG_BUTTON.classList.toggle('header__button--active');
  } else {
    currentUnitOfTemperature = 'fahrenheit';
    F_DEG_BUTTON.classList.toggle('header__button--active');
  }
}

function setUnitOfTemperatureInLocalStorage() {
  localStorage.setItem('unit-of-temperature', currentUnitOfTemperature);
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
    showError(LANGUAGE.error.background[currentLanguage]);
    return;
  }
});

ENG_LANG_BUTTON.addEventListener('click', () => {
  currentLanguage = 'en';
  setLanguageInLocalStorage();
  translate();
  ENG_LANG_BUTTON.disabled = true;
  RU_LANG_BUTTON.disabled = false;
  ENG_LANG_BUTTON.classList.add('header__button--active');
  RU_LANG_BUTTON.classList.remove('header__button--active');
});

RU_LANG_BUTTON.addEventListener('click', () => {
  currentLanguage = 'ru';
  setLanguageInLocalStorage();
  translate();
  RU_LANG_BUTTON.disabled = true;
  ENG_LANG_BUTTON.disabled = false;
  RU_LANG_BUTTON.classList.add('header__button--active');
  ENG_LANG_BUTTON.classList.remove('header__button--active');
});

F_DEG_BUTTON.addEventListener('click', () => {
  currentUnitOfTemperature = 'fahrenheit';
  setUnitOfTemperatureInLocalStorage();
  F_DEG_BUTTON.disabled = true;
  C_DEG_BUTTON.disabled = false;
  F_DEG_BUTTON.classList.add('header__button--active');
  C_DEG_BUTTON.classList.remove('header__button--active');
});

C_DEG_BUTTON.addEventListener('click', () => {
  currentUnitOfTemperature = 'celsius';
  setUnitOfTemperatureInLocalStorage();
  C_DEG_BUTTON.disabled = true;
  F_DEG_BUTTON.disabled = false;
  C_DEG_BUTTON.classList.add('header__button--active');
  F_DEG_BUTTON.classList.remove('header__button--active');
});

window.onload = () => {
  getImageLink();
};

getLanguageInLocalStorage();
getUnitOfTemperatureInLocalStorage();
setLanguageInLocalStorage();
setUnitOfTemperatureInLocalStorage();
