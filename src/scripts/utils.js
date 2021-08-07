import { allData } from './data.js';
import {
  convertCoordinates,
  LATITUDE,
  LONGITUDE,
  TITLE_LATITUDE,
  TITLE_LONGITUDE,
} from './geolocation.js';
import { LANGUAGE } from './language.js';
import { SEARCH_BUTTON, SEARCH_INPUT } from './search.js';
import { showDate, showTime } from './time.js';
import {
  TITLE_FEELS_LIKE,
  TITLE_HUMIDITY,
  TITLE_WIND,
  WIND_UNIT,
} from './weather.js';

let time = setInterval(showTime, 1000);

export function translate() {
  SEARCH_INPUT.placeholder = LANGUAGE.searchInput[allData.currentLanguage];
  SEARCH_BUTTON.textContent = LANGUAGE.searchButton[allData.currentLanguage];
  TITLE_LATITUDE.textContent = LANGUAGE.latitude[allData.currentLanguage];
  TITLE_LONGITUDE.textContent = LANGUAGE.longitude[allData.currentLanguage];
  TITLE_FEELS_LIKE.textContent =
    LANGUAGE.weatherConditions.feelsLike[allData.currentLanguage];
  TITLE_WIND.textContent =
    LANGUAGE.weatherConditions.wind[allData.currentLanguage];
  WIND_UNIT.textContent =
    LANGUAGE.weatherConditions.windUnit[allData.currentLanguage];
  TITLE_HUMIDITY.textContent =
    LANGUAGE.weatherConditions.humidity[allData.currentLanguage];
  showDate();
}

export function insertCoordinatesData(lat, lng) {
  allData.convertedCoordinates.lat = convertCoordinates(lat, 'latitude');
  allData.convertedCoordinates.lng = convertCoordinates(lng, 'longitude');

  LATITUDE.textContent = allData.convertedCoordinates.lat;
  LONGITUDE.textContent = allData.convertedCoordinates.lng;
}

export function updateTime(offset) {
  clearInterval(time);
  showTime(offset);
  time = setInterval(showTime, 1000, offset);
  showDate();
}
