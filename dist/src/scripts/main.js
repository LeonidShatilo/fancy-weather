/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTime": () => /* binding */ setTime
/* harmony export */ });
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
/* harmony import */ var _scripts_preloader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts/preloader.js */ "./scripts/preloader.js");
/* harmony import */ var _scripts_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scripts/map.js */ "./scripts/map.js");
/* harmony import */ var _scripts_speechRecognition_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scripts/speechRecognition.js */ "./scripts/speechRecognition.js");
























function getAndSetLanguage() {
  return new Promise(function (resolve) {
    (0,_scripts_header_js__WEBPACK_IMPORTED_MODULE_7__.getLanguageInLocalStorage)();
    (0,_scripts_header_js__WEBPACK_IMPORTED_MODULE_7__.setLanguageInLocalStorage)();
    setTimeout(function () {
      resolve();
    }, 0);
  });
}

function getAndSetUnitOfTemperature() {
  return new Promise(function (resolve) {
    (0,_scripts_header_js__WEBPACK_IMPORTED_MODULE_7__.getUnitOfTemperatureInLocalStorage)();
    (0,_scripts_header_js__WEBPACK_IMPORTED_MODULE_7__.setUnitOfTemperatureInLocalStorage)();
    setTimeout(function () {
      resolve();
    }, 0);
  });
}

function setTime() {
  return new Promise(function (resolve) {
    (0,_scripts_time_js__WEBPACK_IMPORTED_MODULE_6__.showTime)();
    (0,_scripts_time_js__WEBPACK_IMPORTED_MODULE_6__.showDate)();
    (0,_scripts_utils_js__WEBPACK_IMPORTED_MODULE_2__.updateTime)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_3__.allData.offset);
    setTimeout(function () {
      resolve();
    }, 0);
  });
}

function addText() {
  return new Promise(function (resolve) {
    (0,_scripts_utils_js__WEBPACK_IMPORTED_MODULE_2__.translate)();
    setTimeout(function () {
      resolve();
    }, 0);
  });
}

function runApp() {
  getAndSetLanguage();
  (0,_scripts_preloader_js__WEBPACK_IMPORTED_MODULE_11__.addPreloaderText)().then(function () {
    return (0,_scripts_geolocation_js__WEBPACK_IMPORTED_MODULE_9__.getUserCity)();
  }).then(function () {
    return (0,_scripts_map_js__WEBPACK_IMPORTED_MODULE_12__.setMap)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_3__.allData.coordinates.lat, _scripts_data_js__WEBPACK_IMPORTED_MODULE_3__.allData.coordinates.lng);
  }).then(function () {
    (0,_scripts_weather_js__WEBPACK_IMPORTED_MODULE_10__.getWeather)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_3__.allData.coordinates.lat, _scripts_data_js__WEBPACK_IMPORTED_MODULE_3__.allData.coordinates.lng);
    (0,_scripts_geolocation_js__WEBPACK_IMPORTED_MODULE_9__.getPlace)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_3__.allData.coordinates.lat, _scripts_data_js__WEBPACK_IMPORTED_MODULE_3__.allData.coordinates.lng);
    (0,_scripts_geolocation_js__WEBPACK_IMPORTED_MODULE_9__.insertTextLocation)(_scripts_data_js__WEBPACK_IMPORTED_MODULE_3__.allData.coordinates.lat, _scripts_data_js__WEBPACK_IMPORTED_MODULE_3__.allData.coordinates.lng);
  }).then(function () {
    return getAndSetUnitOfTemperature();
  }).then(function () {
    return setTime();
  }).then(function () {
    return addText();
  }).then(function () {
    return (0,_scripts_preloader_js__WEBPACK_IMPORTED_MODULE_11__.removePreloader)();
  }).then(function () {
    return (0,_scripts_map_js__WEBPACK_IMPORTED_MODULE_12__.changeLanguageOfMap)();
  });

  window.onload = function () {
    (0,_scripts_header_js__WEBPACK_IMPORTED_MODULE_7__.getImageLink)();
  };

  (0,_scripts_speechRecognition_js__WEBPACK_IMPORTED_MODULE_13__.voiceSearch)();
}

runApp();

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
    lat: 0,
    lng: 0
  },
  convertedCoordinates: {
    lat: '',
    lng: ''
  },
  temperatureToday: 0,
  temperatureTodayInFahrenheit: 0,
  temperatureNextThreeDays: [],
  temperatureNextThreeDaysInFahrenheit: [],
  weatherIcon: {
    today: '',
    nextThreeDays: []
  },
  weather: '',
  feelsLike: '',
  feelsLikeInFahrenheit: '',
  humidity: '',
  wind: '',
  place: '',
  city: '',
  country: '',
  state: '',
  region: '',
  offset: 0,
  date: {
    year: 0,
    month: 0,
    day: 0
  }
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

function hideError() {
  ERROR.classList.add('error__hide');
  setTimeout(function () {
    ERROR.classList.remove('error__visible');
  }, 400);
  setTimeout(function () {
    ERROR.classList.remove('error__hide');
  }, 500);
}

ERROR_CONFIRM_BUTTON.addEventListener('click', hideError);

/***/ }),

/***/ "./scripts/geolocation.js":
/*!********************************!*\
  !*** ./scripts/geolocation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LATITUDE": () => /* binding */ LATITUDE,
/* harmony export */   "LONGITUDE": () => /* binding */ LONGITUDE,
/* harmony export */   "TITLE_LATITUDE": () => /* binding */ TITLE_LATITUDE,
/* harmony export */   "TITLE_LONGITUDE": () => /* binding */ TITLE_LONGITUDE,
/* harmony export */   "insertTextLocation": () => /* binding */ insertTextLocation,
/* harmony export */   "getUserCity": () => /* binding */ getUserCity,
/* harmony export */   "getUserLocation": () => /* binding */ getUserLocation,
/* harmony export */   "convertCoordinates": () => /* binding */ convertCoordinates,
/* harmony export */   "getPlace": () => /* binding */ getPlace,
/* harmony export */   "findCity": () => /* binding */ findCity
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.js */ "./scripts/error.js");
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.js */ "./scripts/language.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.js */ "./scripts/map.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.js */ "./scripts/weather.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.js */ "./scripts/header.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.js */ "./app.js");







var TITLE_LOCATION = document.querySelector('.title__location');
var LATITUDE = document.querySelector('.latitude');
var LONGITUDE = document.querySelector('.longitude');
var TITLE_LATITUDE = document.querySelector('.title-latitude');
var TITLE_LONGITUDE = document.querySelector('.title-longitude');
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
function insertTextLocation(lat, lng) {
  LATITUDE.innerHTML = convertCoordinates(lat, 'latitude');
  LONGITUDE.innerHTML = convertCoordinates(lng, 'longitude');
}
function getUserCity() {
  var TOKEN = 'a360badf914741';
  var URL = "https://ipinfo.io/json?token=".concat(TOKEN);
  return fetch(URL).then(function (response) {
    return response.json();
  }).then(function (data) {
    _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.city = data.city;
  }).then(function () {
    return findCity(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.city);
  })["catch"](function (e) {
    return;
  });
}

function success(position) {
  var coordinates = position.coords;
  _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lat = coordinates.latitude;
  _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lng = coordinates.longitude;
  (0,_map_js__WEBPACK_IMPORTED_MODULE_3__.updateMap)(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lat, _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lng);
  (0,_weather_js__WEBPACK_IMPORTED_MODULE_4__.getWeather)(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lat, _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lng);
  getPlace(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lat, _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lng);
  (0,_app_js__WEBPACK_IMPORTED_MODULE_6__.setTime)();
  insertTextLocation(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lat, _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lng);

  try {
    (0,_header_js__WEBPACK_IMPORTED_MODULE_5__.updateBackground)();
  } catch (error) {
    (0,_error_js__WEBPACK_IMPORTED_MODULE_1__.showError)(_language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.error.background[_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.currentLanguage]);
    return;
  }

  return 'ok';
}

function error() {
  (0,_error_js__WEBPACK_IMPORTED_MODULE_1__.showError)(_language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.error.currentCoordinates[_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.currentLanguage]);
}

function getUserLocation() {
  navigator.geolocation.getCurrentPosition(success, error, options);
}
function convertCoordinates(loc, coordinate) {
  var x = String(loc).split('.');
  var ddd = Number(loc);
  var dd = "".concat(x[0]);
  var mm = (ddd - dd) * 60;
  var y = String(mm).split('.');
  mm = Number(y[0]);
  var ss = Number((((ddd - dd) * 60 - mm) * 60).toFixed(1));
  dd = Math.abs(dd);
  mm = Math.abs(mm);
  ss = Math.abs(ss);

  if (mm < 10) {
    mm = "0".concat(mm);
  }

  if (ss < 10) {
    ss = "0".concat(ss);
  }

  if (Number.isInteger(ss)) {
    ss = "".concat(ss, ".0");
  }

  if (loc > 0 && coordinate === 'latitude') {
    return "".concat(dd, "\xB0").concat(mm, "'").concat(ss, "\"N");
  }

  if (loc < 0 && coordinate === 'latitude') {
    return "".concat(dd, "\xB0").concat(mm, "'").concat(ss, "\"S");
  }

  if (loc > 0 && coordinate === 'longitude') {
    return "".concat(dd, "\xB0").concat(mm, "'").concat(ss, "\"E");
  }

  if (loc < 0 && coordinate === 'longitude') {
    return "".concat(dd, "\xB0").concat(mm, "'").concat(ss, "\"W");
  }
}
function getPlace(lat, lng) {
  var KEY = "504abf1b2bce4c898926036946d632ee";
  var URL = "https://api.opencagedata.com/geocode/v1/json?q=".concat(lat, "%2C%20").concat(lng, "&key=").concat(KEY, "&language=").concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.currentLanguage);
  return fetch(URL).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.results[0].components.city) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.city = data.results[0].components.city;
    } else {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.city = data.results[0].components.county;
    }

    _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.country = data.results[0].components.country;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.state = data.results[0].components.state;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.offset = data.results[0].annotations.timezone.offset_sec;

    if (data.results[0].components.city || data.results[0].components.county) {
      TITLE_LOCATION.innerHTML = "".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.city, ", ").concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.country);
    } else if (data.results[0].components.state) {
      TITLE_LOCATION.innerHTML = "".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.state, ", ").concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.country);
    } else {
      TITLE_LOCATION.innerHTML = "".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.country);
    }

    return 'ok';
  })["catch"](function (e) {
    return;
  });
}
function findCity(query) {
  var KEY = "504abf1b2bce4c898926036946d632ee";
  var URL = "https://api.opencagedata.com/geocode/v1/json?q=".concat(query, "&key=").concat(KEY, "&language=").concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.currentLanguage);
  return fetch(URL).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.results[0].components.city) {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.city = data.results[0].components.city;
    } else {
      _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.city = data.results[0].components.county;
    }

    _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.country = data.results[0].components.country;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.state = data.results[0].components.state;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lat = data.results[0].geometry.lat;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lng = data.results[0].geometry.lng;
    _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.offset = data.results[0].annotations.timezone.offset_sec;

    if (data.results[0].components.city || data.results[0].components.county) {
      TITLE_LOCATION.innerHTML = "".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.city, ", ").concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.country);
    } else if (data.results[0].components.state) {
      TITLE_LOCATION.innerHTML = "".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.state, ", ").concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.country);
    } else {
      TITLE_LOCATION.innerHTML = "".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.country);
    }

    return data.total_results;
  })["catch"](function (e) {
    (0,_error_js__WEBPACK_IMPORTED_MODULE_1__.showError)(_language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.error.query[_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.currentLanguage]);
    return;
  });
}

/***/ }),

/***/ "./scripts/header.js":
/*!***************************!*\
  !*** ./scripts/header.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getImageLink": () => /* binding */ getImageLink,
/* harmony export */   "getLanguageInLocalStorage": () => /* binding */ getLanguageInLocalStorage,
/* harmony export */   "setLanguageInLocalStorage": () => /* binding */ setLanguageInLocalStorage,
/* harmony export */   "getUnitOfTemperatureInLocalStorage": () => /* binding */ getUnitOfTemperatureInLocalStorage,
/* harmony export */   "setUnitOfTemperatureInLocalStorage": () => /* binding */ setUnitOfTemperatureInLocalStorage,
/* harmony export */   "updateBackground": () => /* binding */ updateBackground
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./scripts/utils.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.js */ "./scripts/language.js");
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.js */ "./scripts/error.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.js */ "./scripts/weather.js");
/* harmony import */ var _geolocation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geolocation.js */ "./scripts/geolocation.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.js */ "./scripts/map.js");







var BACKGROUND = document.querySelector('.background');
var REFRESH_BUTTON = document.querySelector('.header__button-refresh-bg');
var CIRCLE_ARROWS = document.querySelector('.header__refresh-circle-arrows');
var ENG_LANG_BUTTON = document.querySelector('.header__button-eng-lang');
var RU_LANG_BUTTON = document.querySelector('.header__button-ru-lang');
var F_DEG_BUTTON = document.querySelector('.header__button-fahrenheit-deg');
var C_DEG_BUTTON = document.querySelector('.header__button-celsius-deg');
var CURRENT_LOCATION = document.querySelector('.header__button-current-location');
var angleRotation = 360;

function removeBackgroundElement() {
  BACKGROUND.removeChild(BACKGROUND.children[0]);
}

function changeBackgroundVisibility() {
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
    convertTemperature();
    C_DEG_BUTTON.classList.toggle('header__button--active');
  } else {
    _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentUnitOfTemperature = 'fahrenheit';
    convertTemperature();
    F_DEG_BUTTON.classList.toggle('header__button--active');
  }
}
function setUnitOfTemperatureInLocalStorage() {
  localStorage.setItem('unit-of-temperature', _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentUnitOfTemperature);
}

function changeStateButtons(firstButton, secondButton) {
  firstButton.disabled = true;
  secondButton.disabled = false;
  firstButton.classList.add('header__button--active');
  secondButton.classList.remove('header__button--active');
}

function convertTemperature() {
  if (_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentUnitOfTemperature === 'celsius') {
    _weather_js__WEBPACK_IMPORTED_MODULE_4__.TEMP_TODAY.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.temperatureToday;
    _weather_js__WEBPACK_IMPORTED_MODULE_4__.TEMP_FIRST.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.temperatureNextThreeDays[0];
    _weather_js__WEBPACK_IMPORTED_MODULE_4__.TEMP_SECOND.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.temperatureNextThreeDays[1];
    _weather_js__WEBPACK_IMPORTED_MODULE_4__.TEMP_THIRD.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.temperatureNextThreeDays[2];
    _weather_js__WEBPACK_IMPORTED_MODULE_4__.FEELS_LIKE.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.feelsLike;
  }

  if (_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentUnitOfTemperature === 'fahrenheit') {
    _weather_js__WEBPACK_IMPORTED_MODULE_4__.TEMP_TODAY.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.temperatureTodayInFahrenheit;
    _weather_js__WEBPACK_IMPORTED_MODULE_4__.TEMP_FIRST.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.temperatureNextThreeDaysInFahrenheit[0];
    _weather_js__WEBPACK_IMPORTED_MODULE_4__.TEMP_SECOND.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.temperatureNextThreeDaysInFahrenheit[1];
    _weather_js__WEBPACK_IMPORTED_MODULE_4__.TEMP_THIRD.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.temperatureNextThreeDaysInFahrenheit[2];
    _weather_js__WEBPACK_IMPORTED_MODULE_4__.FEELS_LIKE.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.feelsLikeInFahrenheit;
  }
}

function updateBackground() {
  changeBackgroundVisibility();
  setTimeout(function () {
    getImageLink();
  }, 100);
}
REFRESH_BUTTON.addEventListener('click', function () {
  try {
    CIRCLE_ARROWS.style.transform = "rotate(".concat(angleRotation, "deg)");
    angleRotation += 360;
    updateBackground();
  } catch (error) {
    (0,_error_js__WEBPACK_IMPORTED_MODULE_3__.showError)(_language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.error.background[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage]);
    return;
  }
});
ENG_LANG_BUTTON.addEventListener('click', function () {
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage = 'en';
  setLanguageInLocalStorage();
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.translate)();
  (0,_map_js__WEBPACK_IMPORTED_MODULE_6__.changeLanguageOfMap)();
  (0,_weather_js__WEBPACK_IMPORTED_MODULE_4__.getWeatherDescription)(_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.coordinates.lat, _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.coordinates.lng);
  (0,_geolocation_js__WEBPACK_IMPORTED_MODULE_5__.getPlace)(_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.coordinates.lat, _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.coordinates.lng);
  changeStateButtons(ENG_LANG_BUTTON, RU_LANG_BUTTON);
});
RU_LANG_BUTTON.addEventListener('click', function () {
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage = 'ru';
  setLanguageInLocalStorage();
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.translate)();
  (0,_map_js__WEBPACK_IMPORTED_MODULE_6__.changeLanguageOfMap)();
  (0,_weather_js__WEBPACK_IMPORTED_MODULE_4__.getWeatherDescription)(_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.coordinates.lat, _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.coordinates.lng);
  (0,_geolocation_js__WEBPACK_IMPORTED_MODULE_5__.getPlace)(_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.coordinates.lat, _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.coordinates.lng);
  changeStateButtons(RU_LANG_BUTTON, ENG_LANG_BUTTON);
});
F_DEG_BUTTON.addEventListener('click', function () {
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentUnitOfTemperature = 'fahrenheit';
  setUnitOfTemperatureInLocalStorage();
  convertTemperature();
  changeStateButtons(F_DEG_BUTTON, C_DEG_BUTTON);
});
C_DEG_BUTTON.addEventListener('click', function () {
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentUnitOfTemperature = 'celsius';
  setUnitOfTemperatureInLocalStorage();
  convertTemperature();
  changeStateButtons(C_DEG_BUTTON, F_DEG_BUTTON);
});
CURRENT_LOCATION.addEventListener('click', _geolocation_js__WEBPACK_IMPORTED_MODULE_5__.getUserLocation);

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
    description: {
      en: '',
      ru: ''
    },
    feelsLike: {
      en: 'Feels like: ',
      ru: 'Ощущается как: '
    },
    wind: {
      en: 'Wind: ',
      ru: 'Ветер: '
    },
    windUnit: {
      en: 'm/s',
      ru: 'м/с'
    },
    humidity: {
      en: 'Humidity: ',
      ru: 'Влажность: '
    }
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
    currentCoordinates: {
      en: 'Unfortunately, your coordinates have not been received.',
      ru: 'К сожалению, ваши координаты не были получены.'
    },
    query: {
      en: 'Request error. City not found.',
      ru: 'Ошибка запроса. Город не найден.'
    }
  },
  preloader: {
    en: 'Loading...',
    ru: 'Загрузка...'
  }
};

/***/ }),

/***/ "./scripts/map.js":
/*!************************!*\
  !*** ./scripts/map.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "marker": () => /* binding */ marker,
/* harmony export */   "changeLanguageOfMap": () => /* binding */ changeLanguageOfMap,
/* harmony export */   "setMap": () => /* binding */ setMap,
/* harmony export */   "updateMap": () => /* binding */ updateMap
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");
/* eslint-disable */

var map;
var marker;
function changeLanguageOfMap() {
  map.getStyle().layers.map(function (each) {
    if (each.hasOwnProperty('layout') && each.layout.hasOwnProperty('text-field')) {
      if (!each.id.includes('road')) map.setLayoutProperty(each.id, 'text-field', ['get', "name_".concat(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.currentLanguage)]);
    }
  });
}
function setMap(lat, lng) {
  return new Promise(function (resolve) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhdGlsb2xlb25pZCIsImEiOiJja2szdHIyaTcweDE5Mm9xb3YyZnJoYnNkIn0.ex05JiXyZjfejBymZpv-5A';
    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 11
    });
    marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    setTimeout(function () {
      resolve();
    }, 0);
  });
}
function updateMap(lat, lng) {
  map.flyTo({
    center: [lng, lat],
    essential: true
  });
  marker.remove();
  marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
}

/***/ }),

/***/ "./scripts/preloader.js":
/*!******************************!*\
  !*** ./scripts/preloader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPreloaderText": () => /* binding */ addPreloaderText,
/* harmony export */   "removePreloader": () => /* binding */ removePreloader
/* harmony export */ });
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.js */ "./scripts/language.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");


var PRELOADER = document.querySelector('.preloader');
var PRELOADER_TEXT = document.querySelector('.preloader__text');
function addPreloaderText() {
  return new Promise(function (resolve) {
    PRELOADER_TEXT.innerHTML = _language_js__WEBPACK_IMPORTED_MODULE_0__.LANGUAGE.preloader[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
    setTimeout(function () {
      resolve();
    }, 0);
  });
}
function removePreloader() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      PRELOADER.classList.add('preloader--hide');
    }, 1000);
    setTimeout(function () {
      document.body.removeChild(document.body.children[1]);
    }, 1100);
    setTimeout(function () {
      resolve();
    }, 1200);
  });
}

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
/* harmony export */   "SEARCH_BUTTON": () => /* binding */ SEARCH_BUTTON,
/* harmony export */   "runSearch": () => /* binding */ runSearch
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.js */ "./scripts/map.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.js */ "./scripts/weather.js");
/* harmony import */ var _geolocation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geolocation.js */ "./scripts/geolocation.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.js */ "./scripts/header.js");
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error.js */ "./scripts/error.js");
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language.js */ "./scripts/language.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils.js */ "./scripts/utils.js");








var SEARCH_INPUT = document.querySelector('.search__input');
var SEARCH_BUTTON = document.querySelector('.search__button');
function runSearch() {
  if (SEARCH_INPUT.value === '') {
    return;
  } else {
    (0,_geolocation_js__WEBPACK_IMPORTED_MODULE_3__.findCity)(SEARCH_INPUT.value).then(function (result) {
      (0,_map_js__WEBPACK_IMPORTED_MODULE_1__.updateMap)(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lat, _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lng);
      (0,_weather_js__WEBPACK_IMPORTED_MODULE_2__.getWeather)(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lat, _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lng);
      (0,_geolocation_js__WEBPACK_IMPORTED_MODULE_3__.insertTextLocation)(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lat, _data_js__WEBPACK_IMPORTED_MODULE_0__.allData.coordinates.lng);
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.updateTime)(_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.offset);

      try {
        if (result > 0) {
          (0,_header_js__WEBPACK_IMPORTED_MODULE_4__.updateBackground)();
        }
      } catch (error) {
        (0,_error_js__WEBPACK_IMPORTED_MODULE_5__.showError)(_language_js__WEBPACK_IMPORTED_MODULE_6__.LANGUAGE.error.background[_data_js__WEBPACK_IMPORTED_MODULE_0__.allData.currentLanguage]);
        return;
      }
    })["catch"](function (e) {
      return;
    });
  }
}
SEARCH_INPUT.addEventListener('focus', function () {
  return SEARCH_INPUT.value = '';
});
SEARCH_INPUT.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    runSearch();
  }
});
SEARCH_INPUT.addEventListener('input', function () {
  if (SEARCH_INPUT.value === '') {
    return;
  } else {
    SEARCH_INPUT.value = SEARCH_INPUT.value[0].toUpperCase() + SEARCH_INPUT.value.slice(1);
  }
});
SEARCH_BUTTON.addEventListener('click', runSearch);

/***/ }),

/***/ "./scripts/speechRecognition.js":
/*!**************************************!*\
  !*** ./scripts/speechRecognition.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "voiceSearch": () => /* binding */ voiceSearch
/* harmony export */ });
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ "./scripts/search.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");


var VOICE_SEARCH_BUTTON = document.querySelector('.search__voice-icon');
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition;
function voiceSearch() {
  recognition = new SpeechRecognition();
  VOICE_SEARCH_BUTTON.addEventListener('click', function () {
    recognition.lang = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage === 'en' ? 'en-EN' : 'ru-RU';
    recognition.start();
    VOICE_SEARCH_BUTTON.classList.add('search__voice-icon--active');
  });

  recognition.onresult = function (event) {
    _search_js__WEBPACK_IMPORTED_MODULE_0__.SEARCH_INPUT.value = event.results[0][0].transcript;
    (0,_search_js__WEBPACK_IMPORTED_MODULE_0__.runSearch)();
    VOICE_SEARCH_BUTTON.classList.remove('search__voice-icon--active');
  };

  recognition.onerror = function () {
    VOICE_SEARCH_BUTTON.classList.remove('search__voice-icon--active');
  };
}

/***/ }),

/***/ "./scripts/time.js":
/*!*************************!*\
  !*** ./scripts/time.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showDate": () => /* binding */ showDate,
/* harmony export */   "showTime": () => /* binding */ showTime
/* harmony export */ });
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.js */ "./scripts/language.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.js */ "./scripts/weather.js");



var DATE = document.querySelector('.title__date');
var TIME = document.querySelector('.title__time');
var FIRST_DAY = document.querySelector('.weather__title-first-day');
var SECOND_DAY = document.querySelector('.weather__title-second-day');
var THIRD_DAY = document.querySelector('.weather__title-third-day');
var timeOffset = 0;
var incomeOffset;

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function showDate() {
  var today = new Date();
  today.setSeconds(today.getSeconds() + incomeOffset + timeOffset);
  var dayWeek = today.getDay();
  var dayDate = today.getDate();
  var dayMonth = today.getMonth();
  var year = today.getFullYear();
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.date.year = year;
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.date.month = dayMonth + 1;
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.date.day = dayDate;

  if (_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.date.month < 9) {
    _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.date.month = "0".concat(dayMonth + 1);
  }

  if (_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.date.day < 10) {
    _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.date.day = "0".concat(dayDate);
  }

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
function showTime(offset) {
  var today = new Date();
  timeOffset = today.getTimezoneOffset() * 60;

  if (offset === undefined) {
    _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.offset = 0 - timeOffset;
    incomeOffset = timeOffset;
  }

  incomeOffset = offset || 0;
  today.setSeconds(today.getSeconds() + incomeOffset + timeOffset);
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  TIME.innerHTML = "".concat(addZero(hour), ":").concat(addZero(min), ":").concat(addZero(sec));

  if (hour === 0 && min === 0) {
    showDate();
    (0,_weather_js__WEBPACK_IMPORTED_MODULE_2__.getWeather)(_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.coordinates.lat, _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.coordinates.lng);
  }
}

/***/ }),

/***/ "./scripts/utils.js":
/*!**************************!*\
  !*** ./scripts/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translate": () => /* binding */ translate,
/* harmony export */   "insertCoordinatesData": () => /* binding */ insertCoordinatesData,
/* harmony export */   "updateTime": () => /* binding */ updateTime
/* harmony export */ });
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ "./scripts/search.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.js */ "./scripts/language.js");
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time.js */ "./scripts/time.js");
/* harmony import */ var _geolocation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geolocation.js */ "./scripts/geolocation.js");
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather.js */ "./scripts/weather.js");






var time = setInterval(_time_js__WEBPACK_IMPORTED_MODULE_3__.showTime, 1000);
function translate() {
  _search_js__WEBPACK_IMPORTED_MODULE_0__.SEARCH_INPUT.placeholder = _language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.searchInput[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
  _search_js__WEBPACK_IMPORTED_MODULE_0__.SEARCH_BUTTON.innerHTML = _language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.searchButton[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
  _geolocation_js__WEBPACK_IMPORTED_MODULE_4__.TITLE_LATITUDE.innerHTML = _language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.latitude[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
  _geolocation_js__WEBPACK_IMPORTED_MODULE_4__.TITLE_LONGITUDE.innerHTML = _language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.longitude[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
  _weather_js__WEBPACK_IMPORTED_MODULE_5__.TITLE_FEELS_LIKE.innerHTML = _language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.weatherConditions.feelsLike[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
  _weather_js__WEBPACK_IMPORTED_MODULE_5__.TITLE_WIND.innerHTML = _language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.weatherConditions.wind[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
  _weather_js__WEBPACK_IMPORTED_MODULE_5__.WIND_UNIT.innerHTML = _language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.weatherConditions.windUnit[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
  _weather_js__WEBPACK_IMPORTED_MODULE_5__.TITLE_HUMIDITY.innerHTML = _language_js__WEBPACK_IMPORTED_MODULE_2__.LANGUAGE.weatherConditions.humidity[_data_js__WEBPACK_IMPORTED_MODULE_1__.allData.currentLanguage];
  (0,_time_js__WEBPACK_IMPORTED_MODULE_3__.showDate)();
}
function insertCoordinatesData(lat, lng) {
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.convertedCoordinates.lat = (0,_geolocation_js__WEBPACK_IMPORTED_MODULE_4__.convertCoordinates)(lat, 'latitude');
  _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.convertedCoordinates.lng = (0,_geolocation_js__WEBPACK_IMPORTED_MODULE_4__.convertCoordinates)(lng, 'longitude');
  _geolocation_js__WEBPACK_IMPORTED_MODULE_4__.LATITUDE.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.convertedCoordinates.lat;
  _geolocation_js__WEBPACK_IMPORTED_MODULE_4__.LONGITUDE.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_1__.allData.convertedCoordinates.lng;
}
function updateTime(offset) {
  clearInterval(time);
  (0,_time_js__WEBPACK_IMPORTED_MODULE_3__.showTime)(offset);
  time = setInterval(_time_js__WEBPACK_IMPORTED_MODULE_3__.showTime, 1000, offset);
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
/* harmony export */   "TEMP_TODAY": () => /* binding */ TEMP_TODAY,
/* harmony export */   "TEMP_FIRST": () => /* binding */ TEMP_FIRST,
/* harmony export */   "TEMP_SECOND": () => /* binding */ TEMP_SECOND,
/* harmony export */   "TEMP_THIRD": () => /* binding */ TEMP_THIRD,
/* harmony export */   "FEELS_LIKE": () => /* binding */ FEELS_LIKE,
/* harmony export */   "TITLE_WIND": () => /* binding */ TITLE_WIND,
/* harmony export */   "WIND_UNIT": () => /* binding */ WIND_UNIT,
/* harmony export */   "TITLE_FEELS_LIKE": () => /* binding */ TITLE_FEELS_LIKE,
/* harmony export */   "TITLE_HUMIDITY": () => /* binding */ TITLE_HUMIDITY,
/* harmony export */   "getWeather": () => /* binding */ getWeather,
/* harmony export */   "getWeatherDescription": () => /* binding */ getWeatherDescription
/* harmony export */ });
/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.js */ "./scripts/error.js");
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.js */ "./scripts/language.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./scripts/data.js");



var WEATHER = document.querySelector('.weather__today-description');
var WIND = document.querySelector('.weather__wind');
var HUMIDITY = document.querySelector('.weather__humidity');
var TEMP_TODAY = document.querySelector('.weather__temp-today');
var TEMP_FIRST = document.querySelector('.weather__temp-first-day');
var TEMP_SECOND = document.querySelector('.weather__temp-second-day');
var TEMP_THIRD = document.querySelector('.weather__temp-third-day');
var FEELS_LIKE = document.querySelector('.weather__feels-like');
var TITLE_WIND = document.querySelector('.weather__title-wind');
var WIND_UNIT = document.querySelector('.weather__wind-unit');
var TITLE_FEELS_LIKE = document.querySelector('.weather__title-feels-like');
var TITLE_HUMIDITY = document.querySelector('.weather__title-humidity');
var ICON_TODAY = document.querySelector('.weather__icon-today');
var ICON_FIRST = document.querySelector('.weather__icon-first-day');
var ICON_SECOND = document.querySelector('.weather__icon-second-day');
var ICON_THIRD = document.querySelector('.weather__icon-third-day');

function getTemperatureInFahrenheit() {
  _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureTodayInFahrenheit = Math.round(Number(_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureToday) * 9 / 5 + 32);
  _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureNextThreeDaysInFahrenheit[0] = Math.round(_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureNextThreeDays[0] * 9 / 5 + 32);
  _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureNextThreeDaysInFahrenheit[1] = Math.round(_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureNextThreeDays[1] * 9 / 5 + 32);
  _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureNextThreeDaysInFahrenheit[2] = Math.round(_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureNextThreeDays[2] * 9 / 5 + 32);
  _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.feelsLikeInFahrenheit = Math.round(Number(_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.feelsLike) * 9 / 5 + 32);
}

function getDataWeatherToday(data) {
  _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.weather = data.list[0].weather[0].description;
  _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureToday = Math.round(data.list[0].main.temp);
  _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.feelsLike = Math.round(data.list[0].main.feels_like);
  _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.wind = data.list[0].wind.speed.toFixed(1);
  _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.humidity = Math.round(data.list[0].main.humidity);
  _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.weatherIcon.today = data.list[0].weather[0].icon;
}

function averageTemperature(arrayTemp) {
  return Math.round(arrayTemp.reduce(function (a, b) {
    return a + b;
  }) / arrayTemp.length);
}

function clearArray(arrayTemp) {
  while (arrayTemp.length) {
    arrayTemp.pop();
  }

  return arrayTemp;
}

function getDataWeatherForNextDays(data) {
  var temperatureArray = [];
  var indexTempArray = 0;
  var nextDay = 1;

  for (var indexDays = 0; indexDays <= 2; indexDays++) {
    for (var i = 0; i < data.list.length; i++) {
      if (data.list[i].dt_txt.includes("".concat(_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.date.year, "-").concat(_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.date.month, "-").concat(_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.date.day + nextDay))) {
        temperatureArray[indexTempArray] = data.list[i].main.temp;
        indexTempArray++;

        if (data.list[i].dt_txt.includes('12:00:00')) {
          _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.weatherIcon.nextThreeDays[indexDays] = data.list[i].weather[0].icon;
        }
      }
    }

    _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureNextThreeDays[indexDays] = averageTemperature(temperatureArray);
    temperatureArray = clearArray(temperatureArray);
    indexTempArray = 0;
    nextDay++;
  }
}

function insertWeatherData() {
  TEMP_TODAY.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureToday;
  TEMP_FIRST.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureNextThreeDays[0];
  TEMP_SECOND.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureNextThreeDays[1];
  TEMP_THIRD.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.temperatureNextThreeDays[2];
  WEATHER.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.weather;
  FEELS_LIKE.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.feelsLike;
  WIND.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.wind;
  HUMIDITY.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.humidity;
}

function addIcons() {
  ICON_TODAY.style.backgroundImage = "url('./assets/images/svg/".concat(_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.weatherIcon.today, ".svg')");
  ICON_FIRST.style.backgroundImage = "url('./assets/images/svg/".concat(_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.weatherIcon.nextThreeDays[0], ".svg')");
  ICON_SECOND.style.backgroundImage = "url('./assets/images/svg/".concat(_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.weatherIcon.nextThreeDays[1], ".svg')");
  ICON_THIRD.style.backgroundImage = "url('./assets/images/svg/".concat(_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.weatherIcon.nextThreeDays[2], ".svg')");
}

function getWeather(lat, lng) {
  var LANG = _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.currentLanguage;
  var APP_ID = '1d82dbf3046ed45fdb18c16592d6f620';
  var URL = "https://api.openweathermap.org/data/2.5/forecast?lat=".concat(lat, "&lon=").concat(lng, "&lang=").concat(LANG, "&units=metric&appid=").concat(APP_ID);
  fetch(URL).then(function (response) {
    return response.json();
  }).then(function (data) {
    getDataWeatherToday(data);
    getDataWeatherForNextDays(data);
    getTemperatureInFahrenheit();
    insertWeatherData();
    addIcons();
    return 'ok';
  })["catch"](function (e) {
    (0,_error_js__WEBPACK_IMPORTED_MODULE_0__.showError)(_language_js__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE.error.weather[_data_js__WEBPACK_IMPORTED_MODULE_2__.allData.currentLanguage]);
    return;
  });
}
function getWeatherDescription(lat, lng) {
  var LANG = _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.currentLanguage;
  var APP_ID = '1d82dbf3046ed45fdb18c16592d6f620';
  var URL = "https://api.openweathermap.org/data/2.5/forecast?lat=".concat(lat, "&lon=").concat(lng, "&lang=").concat(LANG, "&units=metric&appid=").concat(APP_ID);
  fetch(URL).then(function (response) {
    return response.json();
  }).then(function (data) {
    _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.weather = data.list[0].weather[0].description;
    WEATHER.innerHTML = _data_js__WEBPACK_IMPORTED_MODULE_2__.allData.weather;
  })["catch"](function (e) {
    return;
  });
}

/***/ }),

/***/ "../assets/images/svg/current-location.svg":
/*!*************************************************!*\
  !*** ../assets/images/svg/current-location.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "../assets/images/svg/current-location.svg");

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

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../assets/images/svg/refresh-circle-arrows.svg */ "../assets/images/svg/refresh-circle-arrows.svg");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ../assets/images/svg/current-location.svg */ "../assets/images/svg/current-location.svg");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link\r\n      type=\"image/ico\"\r\n      sizes=\"32x32\"\r\n      rel=\"icon\"\r\n      href=\"./assets/favicon.ico\"\r\n    />\r\n    <script src=\"https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.js\"></script>\r\n    <link\r\n      href=\"https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css\"\r\n      rel=\"stylesheet\"\r\n    />\r\n    <title>Fancy Weather</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"error\">\r\n      <p class=\"error__message\"></p>\r\n      <button class=\"error__confirm-button\">Ok</button>\r\n    </div>\r\n    <div class=\"preloader\">\r\n      <div class=\"preloader__box\">\r\n        <div class=\"preloader__icon\"></div>\r\n        <div class=\"preloader__text\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"background\">\r\n      <div class=\"background__image default\"></div>\r\n    </div>\r\n    <div class=\"wrapper\">\r\n      <div class=\"header\">\r\n        <div class=\"header__buttons-panel\">\r\n          <button class=\"header__button-refresh-bg\">\r\n            <img\r\n              class=\"header__refresh-circle-arrows\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\r\n              alt=\"refresh-circle-arrows\"\r\n            />\r\n          </button>\r\n          <div class=\"header__language\">\r\n            <button class=\"header__button-eng-lang\">EN</button>\r\n            <button class=\"header__button-ru-lang\">RU</button>\r\n          </div>\r\n          <div class=\"header__temperature\">\r\n            <button class=\"header__button-fahrenheit-deg\">°F</button>\r\n            <button class=\"header__button-celsius-deg\">°C</button>\r\n          </div>\r\n          <button class=\"header__button-current-location\">\r\n            <img\r\n              class=\"header__current-location-icon\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n              alt=\"current-location\"\r\n            />\r\n          </button>\r\n        </div>\r\n        <div class=\"search\">\r\n          <input\r\n            class=\"search__input\"\r\n            placeholder=\"Search city or ZIP\"\r\n            type=\"text\"\r\n          />\r\n          <button class=\"search__voice\">\r\n            <div class=\"search__voice-icon\"></div>\r\n          </button>\r\n          <button class=\"search__button\"></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"title\">\r\n        <p class=\"title__location\"></p>\r\n        <p class=\"date-time-wrapper\">\r\n          <span class=\"title__date\"></span>\r\n          <span class=\"title__time\"></span>\r\n        </p>\r\n      </div>\r\n      <div class=\"container-weather-map\">\r\n        <div class=\"weather\">\r\n          <div class=\"weather__today\">\r\n            <span class=\"weather__temp-today\"></span\r\n            ><span class=\"weather__deg-today\">°</span>\r\n            <div class=\"weather__wrapper\">\r\n              <div class=\"weather__icon-today\"></div>\r\n              <div class=\"weather__today-details\">\r\n                <p>\r\n                  <span class=\"weather__today-description\"></span>\r\n                </p>\r\n                <p>\r\n                  <span class=\"weather__title-feels-like\"></span>\r\n                  <span class=\"weather__feels-like\"></span><span>°</span>\r\n                </p>\r\n                <p>\r\n                  <span class=\"weather__title-wind\"></span>\r\n                  <span class=\"weather__wind\"></span>\r\n                  <span class=\"weather__wind-unit\">m/s</span>\r\n                </p>\r\n                <p>\r\n                  <span class=\"weather__title-humidity\"></span>\r\n                  <span class=\"weather__humidity\"></span><span>%</span>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"weather__next-three-days\">\r\n            <div class=\"weather__day weather__first-day\">\r\n              <div class=\"weather__day-title weather__title-first-day\"></div>\r\n              <div class=\"weather__day-temp\">\r\n                <span class=\"weather__temp-first-day\"></span><span>°</span>\r\n                <div class=\"weather__icon weather__icon-first-day\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"weather__day weather__second-day\">\r\n              <div class=\"weather__day-title weather__title-second-day\"></div>\r\n              <div class=\"weather__day-temp\">\r\n                <span class=\"weather__temp-second-day\"></span><span>°</span>\r\n                <div class=\"weather__icon weather__icon-second-day\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"weather__day weather__third-day\">\r\n              <div class=\"weather__day-title weather__title-third-day\"></div>\r\n              <div class=\"weather__day-temp\">\r\n                <span class=\"weather__temp-third-day\"></span><span>°</span>\r\n                <div class=\"weather__icon weather__icon-third-day\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"map\">\r\n          <div id=\"map\" class=\"map__img\"></div>\r\n          <div class=\"map__coordinates\">\r\n            <p>\r\n              <span class=\"title-latitude\"></span>\r\n              <span class=\"latitude\"></span>\r\n            </p>\r\n            <p>\r\n              <span class=\"title-longitude\"></span>\r\n              <span class=\"longitude\"></span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
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