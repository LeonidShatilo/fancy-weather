import { LANGUAGE } from './language.js';
import { allData } from './data.js';

const PRELOADER = document.querySelector('.preloader');
const PRELOADER_ICON = document.querySelector('.preloader__icon');
const PRELOADER_TEXT = document.querySelector('.preloader__text');

export function addPreloaderText() {
  return new Promise((resolve) => {
    PRELOADER_TEXT.innerHTML = LANGUAGE.preloader[allData.currentLanguage];
    setTimeout(() => {
      resolve();
    }, 0);
  });
}

export function removePreloader() {
  if (allData.error) {
    return null;
  }

  setTimeout(() => {
    PRELOADER_ICON.classList.add('preloader__icon--hide');
    PRELOADER_TEXT.classList.add('preloader__text--hide');
  }, 700);
  setTimeout(() => {
    PRELOADER.classList.add('preloader--hide');
  }, 1600);
  setTimeout(() => {
    PRELOADER.remove();
  }, 2400);
  setTimeout(() => {
    document.body.classList.remove('no-scroll');
  }, 2500);
}
