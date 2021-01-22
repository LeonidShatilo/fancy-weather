import { allData } from './data.js';
import { showError } from './error.js';
import { LANGUAGE } from './language.js';
import { updateMap } from './map.js';
import { getWeather } from './weather.js';
import { updateBackground } from './header.js';
import { setTime } from '../app.js';

const TITLE_LOCATION = document.querySelector('.title__location');
export const LATITUDE = document.querySelector('.latitude');
export const LONGITUDE = document.querySelector('.longitude');
export const TITLE_LATITUDE = document.querySelector('.title-latitude');
export const TITLE_LONGITUDE = document.querySelector('.title-longitude');

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export function insertTextLocation(lat, lng) {
  LATITUDE.innerHTML = convertCoordinates(lat, 'latitude');
  LONGITUDE.innerHTML = convertCoordinates(lng, 'longitude');
}

function success(position) {
  let coordinates = position.coords;

  allData.coordinates.lat = coordinates.latitude;
  allData.coordinates.lng = coordinates.longitude;
  updateMap(allData.coordinates.lat, allData.coordinates.lng);
  getWeather(allData.coordinates.lat, allData.coordinates.lng);
  getPlace(allData.coordinates.lat, allData.coordinates.lng);
  setTime();
  insertTextLocation(allData.coordinates.lat, allData.coordinates.lng);

  try {
    updateBackground();
  } catch (error) {
    showError(LANGUAGE.error.background[allData.currentLanguage]);
    return;
  }

  return 'ok';
}

function error() {
  showError(LANGUAGE.error.currentCoordinates[allData.currentLanguage]);
}

export function getUserLocation() {
  navigator.geolocation.getCurrentPosition(success, error, options);
}

export function convertCoordinates(loc, coordinate) {
  let x = String(loc).split('.');
  let ddd = Number(loc);
  let dd = `${x[0]}`;
  let mm = (ddd - dd) * 60;
  let y = String(mm).split('.');
  mm = Number(y[0]);
  let ss = Number((((ddd - dd) * 60 - mm) * 60).toFixed(1));

  dd = Math.abs(dd);
  mm = Math.abs(mm);
  ss = Math.abs(ss);

  if (mm < 10) {
    mm = `0${mm}`;
  }
  if (ss < 10) {
    ss = `0${ss}`;
  }
  if (Number.isInteger(ss)) {
    ss = `${ss}.0`;
  }

  if (loc > 0 && coordinate === 'latitude') {
    return `${dd}°${mm}'${ss}"N`;
  }
  if (loc < 0 && coordinate === 'latitude') {
    return `${dd}°${mm}'${ss}"S`;
  }
  if (loc > 0 && coordinate === 'longitude') {
    return `${dd}°${mm}'${ss}"E`;
  }
  if (loc < 0 && coordinate === 'longitude') {
    return `${dd}°${mm}'${ss}"W`;
  }
}

export function getPlace(lat, lng) {
  const KEY = `504abf1b2bce4c898926036946d632ee`;
  const URL = `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C%20${lng}&key=${KEY}&language=${allData.currentLanguage}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      if (data.results[0].components.city) {
        allData.city = data.results[0].components.city;
      } else {
        allData.city = data.results[0].components.county;
      }
      allData.country = data.results[0].components.country;
      allData.offset = data.results[0].annotations.timezone.offset_sec;

      if (
        data.results[0].components.city ||
        data.results[0].components.county
      ) {
        TITLE_LOCATION.innerHTML = `${allData.city}, ${allData.country}`;
      } else {
        TITLE_LOCATION.innerHTML = `${allData.country}`;
      }

      return 'ok';
    })
    .catch((e) => {
      return;
    });
}

export function findCity(query) {
  const KEY = `504abf1b2bce4c898926036946d632ee`;
  const URL = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${KEY}&language=${allData.currentLanguage}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      if (data.results[0].components.city) {
        allData.city = data.results[0].components.city;
      } else {
        allData.city = data.results[0].components.county;
      }
      allData.country = data.results[0].components.country;
      allData.coordinates.lat = data.results[0].geometry.lat;
      allData.coordinates.lng = data.results[0].geometry.lng;
      allData.offset = data.results[0].annotations.timezone.offset_sec;

      if (
        data.results[0].components.city ||
        data.results[0].components.county
      ) {
        TITLE_LOCATION.innerHTML = `${allData.city}, ${allData.country}`;
      } else {
        TITLE_LOCATION.innerHTML = `${allData.country}`;
      }

      return data.total_results;
    })
    .catch((e) => {
      showError(LANGUAGE.error.query[allData.currentLanguage]);
      return;
    });
}
