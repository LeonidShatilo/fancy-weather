import { SEARCH_INPUT, SEARCH_BUTTON } from './search.js';
import { allData } from './data.js';
import { LANGUAGE } from './language.js';
import { showDate } from './time.js';

export function translate() {
  SEARCH_INPUT.placeholder = LANGUAGE.searchInput[allData.currentLanguage];
  SEARCH_BUTTON.innerHTML = LANGUAGE.searchButton[allData.currentLanguage];
  showDate();
}
