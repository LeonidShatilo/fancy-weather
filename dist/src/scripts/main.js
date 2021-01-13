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
/* harmony import */ var _scripts_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/header.js */ "./scripts/header.js");
/* harmony import */ var _scripts_header_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_header_js__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./scripts/header.js":
/*!***************************!*\
  !*** ./scripts/header.js ***!
  \***************************/
/***/ (() => {

var BACKGROUND_IMAGE = document.querySelector('.background-image');
var REFRESH_BUTTON = document.querySelector('.header__button-refresh-bg');
var CIRCLE_ARROWS = document.querySelector('.header__refresh-circle-arrows');
var ENG_LANG_BUTTON = document.querySelector('.header__button-eng-lang');
var RU_LANG_BUTTON = document.querySelector('.header__button-ru-lang');
var F_DEG_BUTTON = document.querySelector('.header__button-fahrenheit-deg');
var C_DEG_BUTTON = document.querySelector('.header__button-celsius-deg');
var UNSPLASH_ACCESS_KEY = 'eolw5MBc3CTg7x5r_JuJRPpvIqIGAX6LIE9fyDcStps';
var angleRotation = 360;

function loadImage(url) {
  var IMAGE = new Image();
  IMAGE.src = url;

  IMAGE.onload = function () {
    BACKGROUND_IMAGE.style.backgroundImage = "url(".concat(IMAGE.src, ")");
  };
}

function getImageLink() {
  var URL = "https://api.unsplash.com/photos/random?query=morning&client_id=".concat(UNSPLASH_ACCESS_KEY);
  fetch(URL).then(function (response) {
    return response.json();
  }).then(function (data) {
    loadImage(data.urls.regular);
  });
}

REFRESH_BUTTON.addEventListener('click', function () {
  CIRCLE_ARROWS.style.transform = "rotate(".concat(angleRotation, "deg)");
  angleRotation += 360;
  getImageLink();
});
ENG_LANG_BUTTON.addEventListener('click', function () {
  ENG_LANG_BUTTON.classList.add('header__button--active');
  RU_LANG_BUTTON.classList.remove('header__button--active');
});
RU_LANG_BUTTON.addEventListener('click', function () {
  RU_LANG_BUTTON.classList.add('header__button--active');
  ENG_LANG_BUTTON.classList.remove('header__button--active');
});
F_DEG_BUTTON.addEventListener('click', function () {
  F_DEG_BUTTON.classList.add('header__button--active');
  C_DEG_BUTTON.classList.remove('header__button--active');
});
C_DEG_BUTTON.addEventListener('click', function () {
  C_DEG_BUTTON.classList.add('header__button--active');
  F_DEG_BUTTON.classList.remove('header__button--active');
});

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
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link\r\n      type=\"image/ico\"\r\n      sizes=\"32x32\"\r\n      rel=\"icon\"\r\n      href=\"./assets/favicon.ico\"\r\n    />\r\n    <title>Fancy Weather</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"background-image\"></div>\r\n    <div class=\"wrapper\">\r\n      <div class=\"header\">\r\n        <div class=\"header__buttons-panel\">\r\n          <button class=\"header__button-refresh-bg\">\r\n            <img\r\n              class=\"header__refresh-circle-arrows\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\r\n              alt=\"refresh-circle-arrows\"\r\n            />\r\n          </button>\r\n          <div class=\"header__language\">\r\n            <button class=\"header__button-eng-lang header__button--active\">\r\n              EN\r\n            </button>\r\n            <button class=\"header__button-ru-lang\">RU</button>\r\n          </div>\r\n          <div class=\"header__temperature\">\r\n            <button class=\"header__button-fahrenheit-deg\">°F</button>\r\n            <button class=\"header__button-celsius-deg header__button--active\">\r\n              °C\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"search\">\r\n          <input\r\n            class=\"search__input\"\r\n            placeholder=\"Search city or ZIP\"\r\n            type=\"text\"\r\n          />\r\n          <button class=\"search__voice\">\r\n            <img\r\n              class=\"search__voice-icon\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\r\n              alt=\"voice-search\"\r\n            />\r\n          </button>\r\n          <button class=\"search__button\">Search</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"title\">\r\n        <p class=\"title__location\">Minsk, Belarus</p>\r\n        <span class=\"title__date\">Mon 28 October</span>\r\n        <span class=\"title__time\">17:23:45</span>\r\n      </div>\r\n      <div class=\"container-weather-map\">\r\n        <div class=\"weather\">\r\n          <div class=\"weather__today\">\r\n            <span class=\"weather__temp-today\">10</span\r\n            ><span class=\"weather__deg-today\">°</span>\r\n            <div class=\"weather__wrapper\">\r\n              <div class=\"weather__icon-today\"></div>\r\n              <div class=\"weather__today-description\">\r\n                <p>\r\n                  <span>Overcast</span>\r\n                </p>\r\n                <p>\r\n                  <span>Feels like: </span>\r\n                  <span class=\"weather__feels-like\">7</span><span>°</span>\r\n                </p>\r\n                <p>\r\n                  <span>Wind: </span>\r\n                  <span class=\"weather__wind\">2</span>\r\n                  <span>m/s</span>\r\n                </p>\r\n                <p>\r\n                  <span>Humidity: </span>\r\n                  <span class=\"weather__humidity\">83</span><span>%</span>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"weather__next-three-days\">\r\n            <div class=\"weather__day weather__first-day\">\r\n              <div class=\"weather__day-title weather__title-first-day\">\r\n                Tuesday\r\n              </div>\r\n              <div class=\"weather__day-temp\">\r\n                <span class=\"weather__temp-first-day\">7</span><span>°</span>\r\n                <div class=\"weather__icon weather__icon-first-day\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"weather__day weather__second-day\">\r\n              <div class=\"weather__day-title weather__title-second-day\">\r\n                Wednesday\r\n              </div>\r\n              <div class=\"weather__day-temp\">\r\n                <span class=\"weather__temp-second-day\">6</span><span>°</span>\r\n                <div class=\"weather__icon weather__icon-second-day\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"weather__day weather__third-day\">\r\n              <div class=\"weather__day-title weather__title-third-day\">\r\n                Thursday\r\n              </div>\r\n              <div class=\"weather__day-temp\">\r\n                <span class=\"weather__temp-third-day\">3</span><span>°</span>\r\n                <div class=\"weather__icon weather__icon-third-day\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"map\">\r\n          <div id=\"map\" class=\"map__img\"></div>\r\n          <div class=\"map__coordinates\">\r\n            <p>\r\n              <span class=\"title-latitude\">Latitude: </span>\r\n              <span class=\"latitude\">52°03'88\"</span>\r\n            </p>\r\n            <p>\r\n              <span class=\"title-longitude\">Longitude: </span>\r\n              <span class=\"longitude\">29°20'93\"</span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
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