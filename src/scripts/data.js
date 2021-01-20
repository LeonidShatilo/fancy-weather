export let allData = {
  currentLanguage: 'en',
  currentUnitOfTemperature: 'celsius',
  coordinates: {
    lat: 53.902334,
    lng: 27.561879,
  },
  convertedCoordinates: {
    lat: '',
    lng: '',
  },
  temperatureToday: 0,
  temperatureTodayInFahrenheit: 0,
  temperatureNextThreeDays: [0, 0, 0],
  temperatureNextThreeDaysInFahrenheit: [0, 0, 0],
  weatherIcon: {
    today: '',
    nextThreeDays: ['', '', ''],
  },
  weather: '',
  feelsLike: '',
  feelsLikeInFahrenheit: '',
  humidity: '',
  wind: '',
  place: '',
  city: '',
  country: '',
  offset: '',
  date: {
    year: 0,
    month: 0,
    day: 0,
  },
};
