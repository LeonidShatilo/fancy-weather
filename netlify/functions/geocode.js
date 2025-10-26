import axios from 'axios';

const { OPENCAGEDATA_API_KEY } = process.env;

// https://opencagedata.com/
const OPENCAGEDATA_API_ROUTE = 'https://api.opencagedata.com/geocode/v1/json';

export const handler = async (event) => {
  const { q, language } = event.queryStringParameters;

  try {
    const { data } = await axios.get(OPENCAGEDATA_API_ROUTE, {
      params: {
        key: OPENCAGEDATA_API_KEY,
        language,
        q,
      },
    });

    return {
      body: JSON.stringify(data),
      statusCode: 200,
    };
  } catch (error) {
    console.error('Geocode function error:', error);

    return {
      body: JSON.stringify({ message: error.message }),
      statusCode: error.response?.status || 500,
    };
  }
};
