export let allData = {
  currentLanguage: 'en',
  currentUnitOfTemperature: 'celsius',
  coordinates: {
    lat: 0,
    lng: 0,
  },
  userCoordinates: {
    lat: 0,
    lng: 0,
  },
  userCoordinatesText: {
    lat: '',
    lng: '',
  },
  temperatureToday: '',
  temperatureTodayInFahrenheit: '',
  temperatureNextThreeDays: [0, 0, 0],
  temperatureNextThreeDaysInFahrenheit: [0, 0, 0],
  weatherIcon: {
    today: '',
    nextThreeDays: [0, 0, 0],
  },
  weather: '',
  feelsLike: '',
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
