import { SEARCH_INPUT, SEARCH_BUTTON } from './search.js';
import { allData } from './data.js';
import { LANGUAGE } from './language.js';
import { showDate } from './time.js';
import { TITLE_LATITUDE, TITLE_LONGITUDE } from './geolocation.js';
import {
  TITLE_FEELS_LIKE,
  TITLE_WIND,
  WIND_UNIT,
  TITLE_HUMIDITY,
} from './weather.js';

export function translate() {
  SEARCH_INPUT.placeholder = LANGUAGE.searchInput[allData.currentLanguage];
  SEARCH_BUTTON.innerHTML = LANGUAGE.searchButton[allData.currentLanguage];
  TITLE_LATITUDE.innerHTML = LANGUAGE.latitude[allData.currentLanguage];
  TITLE_LONGITUDE.innerHTML = LANGUAGE.longitude[allData.currentLanguage];
  TITLE_FEELS_LIKE.innerHTML =
    LANGUAGE.weatherConditions.feelsLike[allData.currentLanguage];
  TITLE_WIND.innerHTML =
    LANGUAGE.weatherConditions.wind[allData.currentLanguage];
  WIND_UNIT.innerHTML =
    LANGUAGE.weatherConditions.windUnit[allData.currentLanguage];
  TITLE_HUMIDITY.innerHTML =
    LANGUAGE.weatherConditions.humidity[allData.currentLanguage];
  showDate();
}
