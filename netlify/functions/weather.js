import axios from 'axios';

const { OPENWEATHERMAP_API_KEY } = process.env;

// https://openweathermap.org/
const OPENWEATHERMAP_API_ROUTE =
  'https://api.openweathermap.org/data/2.5/forecast';

export const handler = async (event) => {
  const { lat, lon, lang, units } = event.queryStringParameters;

  try {
    const { data } = await axios.get(OPENWEATHERMAP_API_ROUTE, {
      params: {
        appid: OPENWEATHERMAP_API_KEY,
        lang,
        lat,
        lon,
        units,
      },
    });

    return {
      body: JSON.stringify(data),
      statusCode: 200,
    };
  } catch (error) {
    console.error('Weather function error:', error);

    return {
      body: JSON.stringify({ message: error.message }),
      statusCode: error.response?.status || 500,
    };
  }
};
