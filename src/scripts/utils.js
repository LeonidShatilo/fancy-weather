import { SEARCH_INPUT, SEARCH_BUTTON } from './search.js';
import { allData } from './data.js';
import { LANGUAGE } from './language.js';
import { showDate } from './time.js';
import { TITLE_LATITUDE, TITLE_LONGITUDE } from './geolocation.js';

export function translate() {
  SEARCH_INPUT.placeholder = LANGUAGE.searchInput[allData.currentLanguage];
  SEARCH_BUTTON.innerHTML = LANGUAGE.searchButton[allData.currentLanguage];
  TITLE_LATITUDE.innerHTML = LANGUAGE.latitude[allData.currentLanguage];
  TITLE_LONGITUDE.innerHTML = LANGUAGE.longitude[allData.currentLanguage];
  showDate();
}
