import { allData } from './data.js';
import { findCity, insertTextLocation } from './geolocation.js';
import { getWeather } from './weather.js';
import { LANGUAGE } from './language.js';
import { showError } from './error.js';
import { updateBackground } from './header.js';
import { updateMap } from './map.js';
import { updateTime } from './utils.js';

export const SEARCH_INPUT = document.querySelector('.search__input');
export const SEARCH_BUTTON = document.querySelector('.search__button');

export function runSearch() {
  if (SEARCH_INPUT.value === '') {
    return;
  } else {
    findCity(SEARCH_INPUT.value)
      .then((result) => {
        const LAT = allData.coordinates.lat;
        const LNG = allData.coordinates.lng;

        updateMap(LAT, LNG);
        getWeather(LAT, LNG);
        insertTextLocation(LAT, LNG);
        updateTime(allData.offset);

        try {
          if (result > 0) {
            updateBackground();
          }
        } catch (error) {
          showError(LANGUAGE.error.background[allData.currentLanguage]);
          console.error(error);

          return;
        }
      })
      .catch((error) => {
        console.error(error);

        return;
      });
  }
}

SEARCH_INPUT.addEventListener('focus', () => (SEARCH_INPUT.value = ''));

SEARCH_INPUT.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    runSearch();
  }
});

SEARCH_INPUT.addEventListener('input', () => {
  if (SEARCH_INPUT.value === '') {
    return;
  } else {
    SEARCH_INPUT.value =
      SEARCH_INPUT.value[0].toUpperCase() + SEARCH_INPUT.value.slice(1);
  }
});

SEARCH_BUTTON.addEventListener('click', runSearch);
