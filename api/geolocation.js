const axios = require('axios');

const IPINFO_API_KEY = process.env.IPINFO_API_KEY ?? '';
const IPINFO_API_ROUTE = `https://ipinfo.io/json?token=${IPINFO_API_KEY}`;

exports.handler = async (event) => {
  try {
    const response = await axios.get(IPINFO_API_ROUTE);

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error::Netlify::geolocation: ', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch city' }),
    };
  }
};
