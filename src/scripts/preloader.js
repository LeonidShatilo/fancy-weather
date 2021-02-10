import { LANGUAGE } from './language.js';
import { allData } from './data.js';

const PRELOADER = document.querySelector('.preloader');
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
  return new Promise((resolve) => {
    setTimeout(() => {
      PRELOADER.classList.add('preloader--hide');
    }, 1000);
    setTimeout(() => {
      document.body.removeChild(document.body.children[1]);
    }, 1100);
    setTimeout(() => {
      resolve();
    }, 1200);
  });
}
