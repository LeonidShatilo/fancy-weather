import { allData } from './data.js';
import { showError } from './error.js';
import { LANGUAGE } from './language.js';

const TITLE_LOCATION = document.querySelector('.title__location');
const LATITUDE = document.querySelector('.latitude');
const LONGITUDE = document.querySelector('.longitude');
export const TITLE_LATITUDE = document.querySelector('.title-latitude');
export const TITLE_LONGITUDE = document.querySelector('.title-longitude');

let isText;

function coordinateTransformation(loc, name) {
  let index;
  name === 'lat' ? (index = 0) : (index = 1);
  let n = loc.split(',')[index].split('');
  if (isText) {
    return `${n[0] + n[1]}°${n[3] + n[4]}'${n[5] + n[6]}''`;
  } else {
    return `${n[0] + n[1]}.${n[3] + n[4]}${n[5] + n[6]}`;
  }
}

export function getUserCoordinates() {
  const TOKEN = 'a360badf914741';
  const URL = `https://ipinfo.io/json?token=${TOKEN}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      isText = false;
      allData.userCoordinates.lat = coordinateTransformation(data.loc, 'lat');
      allData.userCoordinates.lng = coordinateTransformation(data.loc, 'lng');
      isText = true;
      allData.userCoordinatesText.lat = coordinateTransformation(
        data.loc,
        'lat'
      );
      allData.userCoordinatesText.lng = coordinateTransformation(
        data.loc,
        'lng'
      );
      LATITUDE.innerHTML = allData.userCoordinatesText.lat;
      LONGITUDE.innerHTML = allData.userCoordinatesText.lng;
      return 'ok';
    })
    .catch((e) => {
      showError(LANGUAGE.error.userCoordinates[allData.currentLanguage]);
      return;
    });
}

export function getPlace(lat, lng) {
  const KEY = `504abf1b2bce4c898926036946d632ee`;
  const URL = `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C%20${lng}&key=${KEY}&language=${allData.currentLanguage}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      allData.city = data.results[0].components.city;
      allData.country = data.results[0].components.country;
      TITLE_LOCATION.innerHTML = `${allData.city}, ${allData.country}`;
    })
    .catch((e) => {
      alert('Ошибка! Место не найдено.');
      return;
    });
}
