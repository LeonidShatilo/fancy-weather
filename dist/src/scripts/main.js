/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ "./main.scss");
/* harmony import */ var _scripts_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/utils.js */ "./scripts/utils.js");
/* harmony import */ var _scripts_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/data.js */ "./scripts/data.js");
/* harmony import */ var _scripts_language_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/language.js */ "./scripts/language.js");
/* harmony import */ var _scripts_error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/error.js */ "./scripts/error.js");
/* harmony import */ var _scripts_time_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/time.js */ "./scripts/time.js");
/* harmony import */ var _scripts_header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/header.js */ "./scripts/header.js");
/* harmony import */ var _scripts_search_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/search.js */ "./scripts/search.js");
/* harmony import */ var _scripts_geolocation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/geolocation.js */ "./scripts/geolocation.js");
/* harmony import */ var _scripts_weather_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/weather.js */ "./scripts/weather.js");












/***/ }),

/***/ "./scripts/data.js":
/*!*************************!*\
  !*** ./scripts/data.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allData": () => /* binding */ allData
/* harmony export */ });
var allData = {
  currentLanguage: 'en',
  currentUnitOfTemperature: 'celsius',
  coordinates: {
    lat: '',
    lng: ''
  },
  userCoordinates: {
    lat: '',
    lng: ''
  },
  temperatureToday: '',
  temperatureNextThreeDays: [0, 0, 0],
  place: '',
  city: '',
  country: '',
  offset: ''
};

/***/ }),

/***/ "./scripts/error.js":
/*!**************************!*\
  !*** ./scripts/error.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR_MESSAGE": () => /* binding */ ERROR_MESSAGE,
/* harmony export */   "showError": () => /* binding */ showError
/* harmony export */ });
var ERROR = document.querySelector('.error');
var ERROR_MESSAGE = document.querySelector('.error__message');
var ERROR_CONFIRM_BUTTON = document.querySelector('.error__confirm-button');
function showError(descriprion) {
  ERROR_MESSAGE.innerHTML = descriprion;
  ERROR.classList.add('error__visible');
}
ERROR_CONFIRM_BUTTON.addEventListener('click', function () {
  ERROR.classList.add('error__hide');
  setTimeout(function () {
    ERROR.classList.remove('error__visible');
  }, 400);
  setTimeout(function () {
    ERROR.classList.remove('error__hide');
  }, 500);
});

/***/ }),

/***/ "./scripts/geolocation.js":
/*!********************************!*\
  !*** ./scripts/geolocation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TITLE_LATITUDE": () => /* binding */ TITLE_LATITUDE,
/* harmony export */   "TITLE_LONGITUDE": () => /* binding */ TITLE_LONGITUDE
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.js */ "./scripts/error.js");
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.js */ "./scripts/language.js");



var LATITUDE = document.querySelector('.latitude');
var LONGITUDE = document.querySelector('.longitude');
var TITLE_LATITUDE = document.querySelector('.title-latitude');
var TITLE_LONGITUDE = document.querySelector('.title-longitude');

function coordinateTransformation(loc, name) {
  var index;

  if (name === 'lat') {
    index = 0;
  } else {
    index = 1;
  }

  var n = loc.split(',')[index].split('');
  return "".concat(n[0] + n[1], "\xB0").concat(n[3] + n[4], "'").concat(n[5] + n[6], "\"");
}

function getUserCoordinates() {
  var TOKEN = 'a360badf914741';
  var URL = "https://ipinfo.io/json?token=".concat(TOKEN);
  fetch(URL).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
    _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.userCoordinates.lat = coordinateTransformation(data.loc, 'lat');
    _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.userCoordinates.lng = coordinateTransformation(data.loc, 'lng');
    LATITUDE.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.userCoordinates.lat;
    LONGITUDE.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.userCoordinates.lng;
  })["catch"](function (e) {
    (0,_error_js__WEBPACK_IMPORTED_MODULE_1__.showError)(_language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.error.userCoordinates[_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.currentLanguage]);
    return;
  });
}

getUserCoordinates();

/***/ }),

/***/ "./scripts/header.js":
/*!***************************!*\
  !*** ./scripts/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./scripts/utils.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.js */ "./scripts/language.js");
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.js */ "./scripts/error.js");




var BACKGROUND = document.querySelector('.background');
var REFRESH_BUTTON = document.querySelector('.header__button-refresh-bg');
var CIRCLE_ARROWS = document.querySelector('.header__refresh-circle-arrows');
var ENG_LANG_BUTTON = document.querySelector('.header__button-eng-lang');
var RU_LANG_BUTTON = document.querySelector('.header__button-ru-lang');
var F_DEG_BUTTON = document.querySelector('.header__button-fahrenheit-deg');
var C_DEG_BUTTON = document.querySelector('.header__button-celsius-deg');
var angleRotation = 360;

function removeBackgroundElement() {
  BACKGROUND.removeChild(BACKGROUND.children[0]);
}

function changeVisibility() {
  var BACKGROUND_IMAGES = document.querySelectorAll('.background__image');
  BACKGROUND_IMAGES[1].classList.add('visible');
  setTimeout(function () {
    removeBackgroundElement();
  }, 700);
}

function loadImage(url) {
  var IMAGE_ELEMENT = document.createElement('div');
  IMAGE_ELEMENT.className = 'background__image';
  IMAGE_ELEMENT.src = url;
  IMAGE_ELEMENT.style.backgroundImage = "url(".concat(IMAGE_ELEMENT.src, ")");
  BACKGROUND.append(IMAGE_ELEMENT);
}

function getImageLink() {
  var PARAMETERS = 'orientation=landscape&query=nature&per_page=1';
  var ACCESS_KEY = 'eolw5MBc3CTg7x5r_JuJRPpvIqIGAX6LIE9fyDcStps';
  var URL = "https://api.unsplash.com/photos/random?".concat(PARAMETERS, "&client_id=").concat(ACCESS_KEY);
  fetch(URL).then(function (response) {
    return response.json();
  }).then(function (data) {
    loadImage(data.urls.regular);
  })["catch"](function () {
    return;
  });
}

function getLanguageInLocalStorage() {
  if (localStorage.getItem('language') === null || localStorage.getItem('language') === 'en') {
    _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage = 'en';
    ENG_LANG_BUTTON.classList.toggle('header__button--active');
  } else {
    _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage = 'ru';
    RU_LANG_BUTTON.classList.toggle('header__button--active');
  }
}

function setLanguageInLocalStorage() {
  localStorage.setItem('language', _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage);
}

function getUnitOfTemperatureInLocalStorage() {
  if (localStorage.getItem('unit-of-temperature') === null || localStorage.getItem('unit-of-temperature') === 'celsius') {
    _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentUnitOfTemperature = 'celsius';
    C_DEG_BUTTON.classList.toggle('header__button--active');
  } else {
    _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentUnitOfTemperature = 'fahrenheit';
    F_DEG_BUTTON.classList.toggle('header__button--active');
  }
}

function setUnitOfTemperatureInLocalStorage() {
  localStorage.setItem('unit-of-temperature', _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentUnitOfTemperature);
}

REFRESH_BUTTON.addEventListener('click', function () {
  try {
    CIRCLE_ARROWS.style.transform = "rotate(".concat(angleRotation, "deg)");
    angleRotation += 360;
    changeVisibility();
    setTimeout(function () {
      getImageLink();
    }, 100);
  } catch (error) {
    (0,_error_js__WEBPACK_IMPORTED_MODULE_3__.showError)(_language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.error.background[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage]);
    return;
  }
});

function changeStateButtons(firstButton, secondButton) {
  firstButton.disabled = true;
  secondButton.disabled = false;
  firstButton.classList.add('header__button--active');
  secondButton.classList.remove('header__button--active');
}

ENG_LANG_BUTTON.addEventListener('click', function () {
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage = 'en';
  setLanguageInLocalStorage();
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.translate)();
  changeStateButtons(ENG_LANG_BUTTON, RU_LANG_BUTTON);
});
RU_LANG_BUTTON.addEventListener('click', function () {
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage = 'ru';
  setLanguageInLocalStorage();
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.translate)();
  changeStateButtons(RU_LANG_BUTTON, ENG_LANG_BUTTON);
});
F_DEG_BUTTON.addEventListener('click', function () {
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentUnitOfTemperature = 'fahrenheit';
  setUnitOfTemperatureInLocalStorage();
  changeStateButtons(F_DEG_BUTTON, C_DEG_BUTTON);
});
C_DEG_BUTTON.addEventListener('click', function () {
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentUnitOfTemperature = 'celsius';
  setUnitOfTemperatureInLocalStorage();
  changeStateButtons(C_DEG_BUTTON, F_DEG_BUTTON);
});

window.onload = function () {
  getImageLink();
};

getLanguageInLocalStorage();
getUnitOfTemperatureInLocalStorage();
setLanguageInLocalStorage();
setUnitOfTemperatureInLocalStorage();
(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.translate)();

/***/ }),

/***/ "./scripts/language.js":
/*!*****************************!*\
  !*** ./scripts/language.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LANGUAGE": () => /* binding */ LANGUAGE
/* harmony export */ });
var LANGUAGE = {
  searchInput: {
    en: 'Search city or ZIP',
    ru: 'Поиск по городу или индексу'
  },
  searchButton: {
    en: 'Search',
    ru: 'Поиск'
  },
  dayOfWeek: {
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  },
  shortDayOfWeek: {
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  },
  month: {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    ru: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
  },
  weatherConditions: {
    en: ['Feels like: ', 'Wind: ', 'm/s', 'Humidity: '],
    ru: ['Ощущается как: ', 'Ветер: ', 'м/с', 'Влажность: ']
  },
  latitude: {
    en: 'Latitude: ',
    ru: 'Широта: '
  },
  longitude: {
    en: 'Longitude: ',
    ru: 'Долгота: '
  },
  error: {
    background: {
      en: 'Oops! Something went wrong.<br>You cannot update the background.',
      ru: 'Упс! Что-то пошло не так.<br>Вы не можете обновить фон.'
    },
    weather: {
      en: 'The weather data could not be obtained.<br>Please, try again later.',
      ru: 'Не удалось получить данные о погоде.<br>Пожалуйста, попробуйте позже.'
    },
    userCoordinates: {
      en: 'Unfortunately, your coordinates have not been received.<br>Please try again later.',
      ru: 'К сожалению, ваши координаты не были получены.<br>Пожалуйста, попробуйте позже.'
    }
  }
};

/***/ }),

/***/ "./scripts/search.js":
/*!***************************!*\
  !*** ./scripts/search.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SEARCH_INPUT": () => /* binding */ SEARCH_INPUT,
/* harmony export */   "SEARCH_BUTTON": () => /* binding */ SEARCH_BUTTON
/* harmony export */ });
var SEARCH_INPUT = document.querySelector('.search__input');
var SEARCH_BUTTON = document.querySelector('.search__button');

/***/ }),

/***/ "./scripts/time.js":
/*!*************************!*\
  !*** ./scripts/time.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showDate": () => /* binding */ showDate
/* harmony export */ });
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.js */ "./scripts/language.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");


var DATE = document.querySelector('.title__date');
var TIME = document.querySelector('.title__time');
var FIRST_DAY = document.querySelector('.weather__title-first-day');
var SECOND_DAY = document.querySelector('.weather__title-second-day');
var THIRD_DAY = document.querySelector('.weather__title-third-day');

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function showTime() {
  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  TIME.innerHTML = "".concat(addZero(hour), ":").concat(addZero(min), ":").concat(addZero(sec));
  setTimeout(showTime, 1000);
}

function showDate() {
  var today = new Date();
  var dayWeek = today.getDay();
  var dayDate = today.getDate();
  var dayMonth = today.getMonth();
  DATE.innerHTML = "".concat(_language_js__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE.shortDayOfWeek[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage][dayWeek], ",\n  ").concat(dayDate, " ").concat(_language_js__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE.month[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage][dayMonth]);
  today.setDate(today.getDate() + 1);
  var firstDay = today.getDay();
  today.setDate(today.getDate() + 1);
  var secondDay = today.getDay();
  today.setDate(today.getDate() + 1);
  var thirdDay = today.getDay();
  FIRST_DAY.innerHTML = "".concat(_language_js__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE.dayOfWeek[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage][firstDay]);
  SECOND_DAY.innerHTML = "".concat(_language_js__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE.dayOfWeek[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage][secondDay]);
  THIRD_DAY.innerHTML = "".concat(_language_js__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE.dayOfWeek[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage][thirdDay]);
}
showTime();
showDate();

/***/ }),

/***/ "./scripts/utils.js":
/*!**************************!*\
  !*** ./scripts/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translate": () => /* binding */ translate
/* harmony export */ });
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ "./scripts/search.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.js */ "./scripts/language.js");
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time.js */ "./scripts/time.js");
/* harmony import */ var _geolocation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geolocation.js */ "./scripts/geolocation.js");





function translate() {
  _search_js__WEBPACK_IMPORTED_MODULE_0__.SEARCH_INPUT.placeholder = _language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.searchInput[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
  _search_js__WEBPACK_IMPORTED_MODULE_0__.SEARCH_BUTTON.innerHTML = _language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.searchButton[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
  _geolocation_js__WEBPACK_IMPORTED_MODULE_4__.TITLE_LATITUDE.innerHTML = _language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.latitude[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
  _geolocation_js__WEBPACK_IMPORTED_MODULE_4__.TITLE_LONGITUDE.innerHTML = _language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.longitude[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
  (0,_time_js__WEBPACK_IMPORTED_MODULE_3__.showDate)();
}

/***/ }),

/***/ "./scripts/weather.js":
/*!****************************!*\
  !*** ./scripts/weather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => /* binding */ getWeather
/* harmony export */ });
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.js */ "./scripts/error.js");
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.js */ "./scripts/language.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");



function getWeather(lat, lon) {
  var COORDINATES = "lat=".concat(lat, "&lon=").concat(lon);
  var PARAMETERS = '&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code';
  var API_KEY = 'EBOBHqriA20kiUR6JNdEI9MkjWywRbwC';
  var URL = "https://api.climacell.co/v3/weather/forecast/daily?".concat(COORDINATES).concat(PARAMETERS, "&apikey=").concat(API_KEY);
  fetch(URL).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);

    if (data.message === 'You cannot consume this service') {
      (0,_error_js__WEBPACK_IMPORTED_MODULE_0__.showError)(_language_js__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE.error.weather[_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.currentLanguage]);
    }
  })["catch"](function () {
    console.log('error');
    (0,_error_js__WEBPACK_IMPORTED_MODULE_0__.showError)(_language_js__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE.error.weather[_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.currentLanguage]);
  });
}
getWeather('52.424638', '31.014255');

/***/ }),

/***/ "../assets/images/svg/refresh-circle-arrows.svg":
/*!******************************************************!*\
  !*** ../assets/images/svg/refresh-circle-arrows.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "../assets/images/svg/refresh-circle-arrows.svg");

/***/ }),

/***/ "../assets/images/svg/voice-search.svg":
/*!*********************************************!*\
  !*** ../assets/images/svg/voice-search.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "../assets/images/svg/voice-search.svg");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../assets/images/svg/refresh-circle-arrows.svg */ "../assets/images/svg/refresh-circle-arrows.svg");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ../assets/images/svg/voice-search.svg */ "../assets/images/svg/voice-search.svg");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link\r\n      type=\"image/ico\"\r\n      sizes=\"32x32\"\r\n      rel=\"icon\"\r\n      href=\"./assets/favicon.ico\"\r\n    />\r\n    <title>Fancy Weather</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"error\">\r\n      <p class=\"error__message\"></p>\r\n      <button class=\"error__confirm-button\">Ok</button>\r\n    </div>\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"background\">\r\n      <div class=\"background__image default\"></div>\r\n    </div>\r\n    <div class=\"wrapper\">\r\n      <div class=\"header\">\r\n        <div class=\"header__buttons-panel\">\r\n          <button class=\"header__button-refresh-bg\">\r\n            <img\r\n              class=\"header__refresh-circle-arrows\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\r\n              alt=\"refresh-circle-arrows\"\r\n            />\r\n          </button>\r\n          <div class=\"header__language\">\r\n            <button class=\"header__button-eng-lang\">EN</button>\r\n            <button class=\"header__button-ru-lang\">RU</button>\r\n          </div>\r\n          <div class=\"header__temperature\">\r\n            <button class=\"header__button-fahrenheit-deg\">°F</button>\r\n            <button class=\"header__button-celsius-deg\">°C</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"search\">\r\n          <input\r\n            class=\"search__input\"\r\n            placeholder=\"Search city or ZIP\"\r\n            type=\"text\"\r\n          />\r\n          <button class=\"search__voice\">\r\n            <img\r\n              class=\"search__voice-icon\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n              alt=\"voice-search\"\r\n            />\r\n          </button>\r\n          <button class=\"search__button\">Search</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"title\">\r\n        <p class=\"title__location\">Minsk, Belarus</p>\r\n        <span class=\"title__date\"></span>\r\n        <span class=\"title__time\"></span>\r\n      </div>\r\n      <div class=\"container-weather-map\">\r\n        <div class=\"weather\">\r\n          <div class=\"weather__today\">\r\n            <span class=\"weather__temp-today\">10</span\r\n            ><span class=\"weather__deg-today\">°</span>\r\n            <div class=\"weather__wrapper\">\r\n              <div class=\"weather__icon-today\"></div>\r\n              <div class=\"weather__today-description\">\r\n                <p>\r\n                  <span>Overcast</span>\r\n                </p>\r\n                <p>\r\n                  <span>Feels like: </span>\r\n                  <span class=\"weather__feels-like\">7</span><span>°</span>\r\n                </p>\r\n                <p>\r\n                  <span>Wind: </span>\r\n                  <span class=\"weather__wind\">2</span>\r\n                  <span>m/s</span>\r\n                </p>\r\n                <p>\r\n                  <span>Humidity: </span>\r\n                  <span class=\"weather__humidity\">83</span><span>%</span>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"weather__next-three-days\">\r\n            <div class=\"weather__day weather__first-day\">\r\n              <div class=\"weather__day-title weather__title-first-day\">\r\n                Tuesday\r\n              </div>\r\n              <div class=\"weather__day-temp\">\r\n                <span class=\"weather__temp-first-day\">7</span><span>°</span>\r\n                <div class=\"weather__icon weather__icon-first-day\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"weather__day weather__second-day\">\r\n              <div class=\"weather__day-title weather__title-second-day\">\r\n                Wednesday\r\n              </div>\r\n              <div class=\"weather__day-temp\">\r\n                <span class=\"weather__temp-second-day\">6</span><span>°</span>\r\n                <div class=\"weather__icon weather__icon-second-day\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"weather__day weather__third-day\">\r\n              <div class=\"weather__day-title weather__title-third-day\">\r\n                Thursday\r\n              </div>\r\n              <div class=\"weather__day-temp\">\r\n                <span class=\"weather__temp-third-day\">3</span><span>°</span>\r\n                <div class=\"weather__icon weather__icon-third-day\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"map\">\r\n          <div id=\"map\" class=\"map__img\"></div>\r\n          <div class=\"map__coordinates\">\r\n            <p>\r\n              <span class=\"title-latitude\"></span>\r\n              <span class=\"latitude\"></span>\r\n            </p>\r\n            <p>\r\n              <span class=\"title-longitude\"></span>\r\n              <span class=\"longitude\"></span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["../node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_html-loader_dist_runtime_getUrl_js"],
/******/ 			["./app.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_html-loader_dist_runtime_getUrl_js"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.js.map