const BACKGROUND = document.querySelector('.background');
const BACKGROUND_IMAGE = document.querySelector('.background__image');
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

REFRESH_BUTTON.addEventListener('click', () => {
  try {
    CIRCLE_ARROWS.style.transform = `rotate(${angleRotation}deg)`;
    angleRotation += 360;
    changeVisibility();
    setTimeout(() => {
      getImageLink();
    }, 1000);
  } catch (error) {
    alert('Oops! Something went wrong. You cannot update the background.');
  }
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

window.onload = () => {
  getImageLink();
};
