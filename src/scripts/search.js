import { allData } from './data.js';
import { updateMap } from './map.js';
import { getWeather } from './weather.js';
import { findCity, insertTextLocation } from './geolocation.js';
import { updateBackground } from './header.js';

export const SEARCH_INPUT = document.querySelector('.search__input');
export const SEARCH_BUTTON = document.querySelector('.search__button');

export function runSearch() {
  findCity(SEARCH_INPUT.value)
    .then((result) => {
      updateMap(allData.coordinates.lat, allData.coordinates.lng);
      getWeather(allData.coordinates.lat, allData.coordinates.lng);
      insertTextLocation(allData.coordinates.lat, allData.coordinates.lng);
      if (result > 0) {
        updateBackground();
      }
    })
    .catch((e) => {
      return;
    });
}

SEARCH_INPUT.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    runSearch();
  }
});
SEARCH_INPUT.addEventListener('focus', () => (SEARCH_INPUT.value = ''));
SEARCH_BUTTON.addEventListener('click', runSearch);
