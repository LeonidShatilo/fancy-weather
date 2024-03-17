import { allData } from './data.js';
import { getWeather } from './weather.js';
import { LANGUAGE } from './language.js';
import { setTime } from '../app.js';
import { showError } from './error.js';
import { updateBackground } from './header.js';
import { updateMap } from './map.js';
import { OPENCAGEDATA_API_ROUTE } from '../constants/index.js';
import { getApiRoute } from '../helpers/getApiRoute.js';

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
  LATITUDE.textContent = convertCoordinates(lat, 'latitude');
  LONGITUDE.textContent = convertCoordinates(lng, 'longitude');
}

export const getUserCity = async () => {
  try {
    const response = await fetch(getApiRoute('geolocation'));
    const data = await response.json();
    const { city } = data;

    allData.city = city;
    await findCity(city);
  } catch (error) {
    console.error('getUserCity:', error);
  }
};

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
    console.error('getUserLocation – updateBackground:', error);

    return;
  }

  return 'ok';
}

function error() {
  showError(LANGUAGE.error.currentCoordinates[allData.currentLanguage]);
  console.error('getUserLocation:', error);
}

export function getUserLocation() {
  navigator.geolocation.getCurrentPosition(success, error, options);
}

export function convertCoordinates(loc, coord) {
  const LAT = 'latitude';
  const LNG = 'longitude';

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

  if (mm < 10) mm = `0${mm}`;
  if (ss < 10) ss = `0${ss}`;
  if (Number.isInteger(ss)) ss = `${ss}.0`;

  if (loc > 0 && coord === LAT) return `${dd}°${mm}'${ss}"N`;
  if (loc < 0 && coord === LAT) return `${dd}°${mm}'${ss}"S`;
  if (loc > 0 && coord === LNG) return `${dd}°${mm}'${ss}"E`;
  if (loc < 0 && coord === LNG) return `${dd}°${mm}'${ss}"W`;
}

export function getPlace(lat, lng) {
  const LANG = allData.currentLanguage;
  const URL = `${OPENCAGEDATA_API_ROUTE}&q=${lat}%2C%20${lng}&language=${LANG}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const CITY = data.results[0].components.city;
      const COUNTY = data.results[0].components.county;
      const COUNTRY = data.results[0].components.country;
      const STATE = data.results[0].components.state;
      const OFFSET = data.results[0].annotations.timezone.offset_sec;

      if (CITY) {
        allData.city = CITY;
      } else {
        allData.city = COUNTY;
      }

      allData.country = COUNTRY;
      allData.state = STATE;
      allData.offset = OFFSET;

      if (CITY || COUNTY) {
        TITLE_LOCATION.textContent = `${allData.city}, ${allData.country}`;
      } else if (STATE) {
        TITLE_LOCATION.textContent = `${allData.state}, ${allData.country}`;
      } else {
        TITLE_LOCATION.textContent = `${allData.country}`;
      }

      return 'ok';
    })
    .catch((error) => {
      console.error('getPlace:', error);

      return;
    });
}

export function findCity(query) {
  const URL = `${OPENCAGEDATA_API_ROUTE}&q=${query}&language=${allData.currentLanguage}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const CITY = data.results[0].components.city;
      const COUNTY = data.results[0].components.county;
      const COUNTRY = data.results[0].components.country;
      const STATE = data.results[0].components.state;
      const OFFSET = data.results[0].annotations.timezone.offset_sec;
      const LAT = data.results[0].geometry.lat;
      const LNG = data.results[0].geometry.lng;

      if (CITY) {
        allData.city = CITY;
      } else {
        allData.city = COUNTY;
      }
      allData.country = COUNTRY;
      allData.state = STATE;
      allData.coordinates.lat = LAT;
      allData.coordinates.lng = LNG;
      allData.offset = OFFSET;

      if (CITY || COUNTY) {
        TITLE_LOCATION.textContent = `${allData.city}, ${allData.country}`;
      } else if (STATE) {
        TITLE_LOCATION.textContent = `${allData.state}, ${allData.country}`;
      } else {
        TITLE_LOCATION.textContent = `${allData.country}`;
      }

      return data.total_results;
    })
    .catch((error) => {
      showError(LANGUAGE.error.query[allData.currentLanguage]);
      console.error('findCity:', error);

      return;
    });
}
