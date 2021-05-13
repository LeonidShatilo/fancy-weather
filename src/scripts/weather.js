import { showError } from './error.js';
import { LANGUAGE } from './language.js';
import { allData } from './data.js';

const WEATHER = document.querySelector('.weather__today-description');
const WIND = document.querySelector('.weather__wind');
const HUMIDITY = document.querySelector('.weather__humidity');
export const TEMP_TODAY = document.querySelector('.weather__temp-today');
export const TEMP_FIRST = document.querySelector('.weather__temp-first-day');
export const TEMP_SECOND = document.querySelector('.weather__temp-second-day');
export const TEMP_THIRD = document.querySelector('.weather__temp-third-day');
export const FEELS_LIKE = document.querySelector('.weather__feels-like');
export const TITLE_WIND = document.querySelector('.weather__title-wind');
export const WIND_UNIT = document.querySelector('.weather__wind-unit');
export const TITLE_FEELS_LIKE = document.querySelector(
  '.weather__title-feels-like'
);
export const TITLE_HUMIDITY = document.querySelector(
  '.weather__title-humidity'
);
const ICON_TODAY = document.querySelector('.weather__icon-today');
const ICON_FIRST = document.querySelector('.weather__icon-first-day');
const ICON_SECOND = document.querySelector('.weather__icon-second-day');
const ICON_THIRD = document.querySelector('.weather__icon-third-day');

function getTemperatureInFahrenheit() {
  allData.temperatureTodayInFahrenheit = Math.round(
    (Number(allData.temperatureToday) * 9) / 5 + 32
  );
  allData.temperatureNextThreeDaysInFahrenheit[0] = Math.round(
    (allData.temperatureNextThreeDays[0] * 9) / 5 + 32
  );
  allData.temperatureNextThreeDaysInFahrenheit[1] = Math.round(
    (allData.temperatureNextThreeDays[1] * 9) / 5 + 32
  );
  allData.temperatureNextThreeDaysInFahrenheit[2] = Math.round(
    (allData.temperatureNextThreeDays[2] * 9) / 5 + 32
  );
  allData.feelsLikeInFahrenheit = Math.round(
    (Number(allData.feelsLike) * 9) / 5 + 32
  );
}

function getDataWeatherToday(data) {
  allData.weather = data.list[0].weather[0].description;
  allData.temperatureToday = Math.round(data.list[0].main.temp);
  allData.feelsLike = Math.round(data.list[0].main.feels_like);
  allData.wind = data.list[0].wind.speed.toFixed(1);
  allData.humidity = Math.round(data.list[0].main.humidity);
  allData.weatherIcon.today = data.list[0].weather[0].icon;
}

function averageTemperature(arrayTemp) {
  return Math.round(arrayTemp.reduce((a, b) => a + b) / arrayTemp.length);
}

function clearArray(arrayTemp) {
  while (arrayTemp.length) {
    arrayTemp.pop();
  }
  return arrayTemp;
}

function getDataWeatherForNextDays(data) {
  let temperatureArray = [];
  let indexTempArray = 0;
  let year = allData.date.year;
  let month = allData.date.nextDayMonth.map(
    (month) => (month < 10 ? '0' : '') + month
  );
  let day = allData.date.nextDay.map((day) => (day < 10 ? '0' : '') + day);

  for (let indexDays = 0; indexDays <= 2; indexDays++) {
    for (let i = 0; i < data.list.length; i++) {
      const date = data.list[i].dt_txt;

      if (date.includes(`${year}-${month[indexDays]}-${day[indexDays]}`)) {
        temperatureArray[indexTempArray] = data.list[i].main.temp;
        indexTempArray++;

        if (date.includes('12:00:00')) {
          allData.weatherIcon.nextThreeDays[indexDays] =
            data.list[i].weather[0].icon;
        }
      }
    }

    allData.temperatureNextThreeDays[indexDays] = averageTemperature(
      temperatureArray
    );
    temperatureArray = clearArray(temperatureArray);
    indexTempArray = 0;
  }
}

function insertWeatherData() {
  const DATA = allData.currentUnitOfTemperature;

  switch (DATA) {
    case 'celsius':
      TEMP_TODAY.innerHTML = allData.temperatureToday;
      TEMP_FIRST.innerHTML = allData.temperatureNextThreeDays[0];
      TEMP_SECOND.innerHTML = allData.temperatureNextThreeDays[1];
      TEMP_THIRD.innerHTML = allData.temperatureNextThreeDays[2];
      FEELS_LIKE.innerHTML = allData.feelsLike;
      break;

    case 'fahrenheit':
      TEMP_TODAY.innerHTML = allData.temperatureTodayInFahrenheit;
      TEMP_FIRST.innerHTML = allData.temperatureNextThreeDaysInFahrenheit[0];
      TEMP_SECOND.innerHTML = allData.temperatureNextThreeDaysInFahrenheit[1];
      TEMP_THIRD.innerHTML = allData.temperatureNextThreeDaysInFahrenheit[2];
      FEELS_LIKE.innerHTML = allData.feelsLikeInFahrenheit;
      break;
  }

  WEATHER.innerHTML = allData.weather;
  WIND.innerHTML = allData.wind;
  HUMIDITY.innerHTML = allData.humidity;
}

function addIcons() {
  ICON_TODAY.style.backgroundImage = `url('./assets/images/svg/${allData.weatherIcon.today}.svg')`;
  ICON_FIRST.style.backgroundImage = `url('./assets/images/svg/${allData.weatherIcon.nextThreeDays[0]}.svg')`;
  ICON_SECOND.style.backgroundImage = `url('./assets/images/svg/${allData.weatherIcon.nextThreeDays[1]}.svg')`;
  ICON_THIRD.style.backgroundImage = `url('./assets/images/svg/${allData.weatherIcon.nextThreeDays[2]}.svg')`;
}

export function getWeather(lat, lng) {
  const LANG = allData.currentLanguage;
  const APP_ID = '1d82dbf3046ed45fdb18c16592d6f620';
  let URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&lang=${LANG}&units=metric&appid=${APP_ID}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      getDataWeatherToday(data);
      getDataWeatherForNextDays(data);
      getTemperatureInFahrenheit();
      insertWeatherData();
      addIcons();
    })
    .catch((error) => {
      showError(LANGUAGE.error.weather[allData.currentLanguage]);
      allData.error = true;
      console.error(error);

      return;
    });
}

export function getWeatherDescription(lat, lng) {
  const LANG = allData.currentLanguage;
  const APP_ID = '1d82dbf3046ed45fdb18c16592d6f620';
  let URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&lang=${LANG}&units=metric&appid=${APP_ID}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      allData.weather = data.list[0].weather[0].description;
      WEATHER.innerHTML = allData.weather;
    })
    .catch((error) => {
      console.error(error);

      return;
    });
}
