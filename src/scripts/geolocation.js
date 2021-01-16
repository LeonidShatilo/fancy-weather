import { allData } from './data.js';
import { showError } from './error.js';
import { LANGUAGE } from './language.js';

const LATITUDE = document.querySelector('.latitude');
const LONGITUDE = document.querySelector('.longitude');
export const TITLE_LATITUDE = document.querySelector('.title-latitude');
export const TITLE_LONGITUDE = document.querySelector('.title-longitude');

function coordinateTransformation(loc, name) {
  let index;
  if (name === 'lat') {
    index = 0;
  } else {
    index = 1;
  }
  let n = loc.split(',')[index].split('');
  return `${n[0] + n[1]}°${n[3] + n[4]}'${n[5] + n[6]}"`;
}

function getUserCoordinates() {
  const TOKEN = 'a360badf914741';
  const URL = `https://ipinfo.io/json?token=${TOKEN}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      allData.userCoordinates.lat = coordinateTransformation(data.loc, 'lat');
      allData.userCoordinates.lng = coordinateTransformation(data.loc, 'lng');
      LATITUDE.innerHTML = allData.userCoordinates.lat;
      LONGITUDE.innerHTML = allData.userCoordinates.lng;
    })
    .catch((e) => {
      showError(LANGUAGE.error.userCoordinates[allData.currentLanguage]);
      return;
    });
}

getUserCoordinates();
