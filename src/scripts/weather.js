import { showError } from './error.js';
import { LANGUAGE } from './language.js';
import { allData } from './data.js';

export function getWeather(lat, lon) {
  const COORDINATES = `lat=${lat}&lon=${lon}`;
  const PARAMETERS =
    '&unit_system=si&start_time=now&fields=feels_like%2Ctemp%2Chumidity%2Cwind_speed%2Cweather_code';
  const API_KEY = 'EBOBHqriA20kiUR6JNdEI9MkjWywRbwC';
  const URL = `https://api.climacell.co/v3/weather/forecast/daily?${COORDINATES}${PARAMETERS}&apikey=${API_KEY}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.message === 'You cannot consume this service') {
        showError(LANGUAGE.error.weather[allData.currentLanguage]);
      }
    })
    .catch(() => {
      console.log('error');
      showError(LANGUAGE.error.weather[allData.currentLanguage]);
    });
}

getWeather('52.424638', '31.014255');
