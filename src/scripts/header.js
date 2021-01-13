const BACKGROUND_IMAGE = document.querySelector('.background-image');
const REFRESH_BUTTON = document.querySelector('.header__button-refresh-bg');
const CIRCLE_ARROWS = document.querySelector('.header__refresh-circle-arrows');
const ENG_LANG_BUTTON = document.querySelector('.header__button-eng-lang');
const RU_LANG_BUTTON = document.querySelector('.header__button-ru-lang');
const F_DEG_BUTTON = document.querySelector('.header__button-fahrenheit-deg');
const C_DEG_BUTTON = document.querySelector('.header__button-celsius-deg');
const UNSPLASH_ACCESS_KEY = 'eolw5MBc3CTg7x5r_JuJRPpvIqIGAX6LIE9fyDcStps';

let angleRotation = 360;

function loadImage(url) {
  const IMAGE = new Image();
  IMAGE.src = url;
  IMAGE.onload = () => {
    BACKGROUND_IMAGE.style.backgroundImage = `url(${IMAGE.src})`;
  };
}

function getImageLink() {
  const URL = `https://api.unsplash.com/photos/random?query=morning&client_id=${UNSPLASH_ACCESS_KEY}`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      loadImage(data.urls.regular);
    });
}

REFRESH_BUTTON.addEventListener('click', () => {
  CIRCLE_ARROWS.style.transform = `rotate(${angleRotation}deg)`;
  angleRotation += 360;
  getImageLink();
});

ENG_LANG_BUTTON.addEventListener('click', () => {
  ENG_LANG_BUTTON.classList.add('header__button--active');
  RU_LANG_BUTTON.classList.remove('header__button--active');
});

RU_LANG_BUTTON.addEventListener('click', () => {
  RU_LANG_BUTTON.classList.add('header__button--active');
  ENG_LANG_BUTTON.classList.remove('header__button--active');
});

F_DEG_BUTTON.addEventListener('click', () => {
  F_DEG_BUTTON.classList.add('header__button--active');
  C_DEG_BUTTON.classList.remove('header__button--active');
});

C_DEG_BUTTON.addEventListener('click', () => {
  C_DEG_BUTTON.classList.add('header__button--active');
  F_DEG_BUTTON.classList.remove('header__button--active');
});
