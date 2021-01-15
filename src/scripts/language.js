import { currentLanguage } from './header.js';
import { SEARCH_INPUT, SEARCH_BUTTON } from './search.js';

export function translate() {
  SEARCH_INPUT.placeholder = LANGUAGE.searchInput[currentLanguage];
  SEARCH_BUTTON.innerHTML = LANGUAGE.searchButton[currentLanguage];
}

export const LANGUAGE = {
  searchInput: {
    en: 'Search city or ZIP',
    ru: 'Поиск по городу или индексу',
  },
  searchButton: {
    en: 'Search',
    ru: 'Поиск',
  },
  dayOfWeek: {
    en: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    ru: [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ],
  },
  shortDayOfWeek: {
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  },
  month: {
    en: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    ru: [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ],
  },
  weatherConditions: {
    en: ['Feels like: ', 'Wind: ', 'm/s', 'Humidity: '],
    ru: ['Ощущается как: ', 'Ветер: ', 'м/с', 'Влажность: '],
  },
  latitude: {
    en: 'Latitude: ',
    ru: 'Широта: ',
  },
  longitude: {
    en: 'Longitude: ',
    ru: 'Долгота: ',
  },
  error: {
    background: {
      en: 'Oops! Something went wrong. You cannot update the background.',
      ru: 'Упс! Что-то пошло не так. Вы не можете обновить фон.',
    },
  },
};
