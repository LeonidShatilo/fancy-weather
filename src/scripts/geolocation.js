import { allData } from './data.js';
import { showError } from './error.js';
import { LANGUAGE } from './language.js';
import { updateMap } from './map.js';
import { getWeather } from './weather.js';
import { updateBackground } from './header.js';
import { updateTime } from './utils.js';

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
  LATITUDE.innerHTML = convertCoordinates(lat);
  LONGITUDE.innerHTML = convertCoordinates(lng);
}

function success(position) {
  let coordinates = position.coords;

  allData.coordinates.lat = coordinates.latitude;
  allData.coordinates.lng = coordinates.longitude;
  updateMap(allData.coordinates.lat, allData.coordinates.lng);
  getWeather(allData.coordinates.lat, allData.coordinates.lng);
  getPlace(allData.coordinates.lat, allData.coordinates.lng);
  insertTextLocation(allData.coordinates.lat, allData.coordinates.lng);
  updateTime();
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

export function convertCoordinates(loc) {
  let n = String(loc).split('.');
  let ddd = Number(loc);
  let dd = `${Math.abs(n[0])}`;
  let mm = Math.floor((ddd - dd) * 60);
  let ss = Math.abs(Number((((ddd - dd) * 60 - mm) * 60).toFixed(1)));

  if (Math.abs(mm) < 10) {
    mm = `0${mm}`;
  } else {
    mm = Math.abs(mm);
  }
  if (ss < 10) {
    ss = `0${ss}`;
  } else {
    if (ss % 10 === 0) {
      ss = `${Math.abs(ss)}.0`;
    } else {
      ss = Math.abs(ss);
    }
  }

  return `${dd}°${mm}'${ss}"`;
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
