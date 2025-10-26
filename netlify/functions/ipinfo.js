import axios from 'axios';

const { IPINFO_API_KEY } = process.env;

// https://ipinfo.io/
const IPINFO_API_ROUTE = 'https://ipinfo.io/json';

export const handler = async () => {
  try {
    const { data } = await axios.get(IPINFO_API_ROUTE, {
      headers: {
        Authorization: `Bearer ${IPINFO_API_KEY}`,
      },
    });

    return {
      body: JSON.stringify(data),
      statusCode: 200,
    };
  } catch (error) {
    console.error('IP info function error:', error);

    return {
      body: JSON.stringify({ message: error.message }),
      statusCode: error.response?.status || 500,
    };
  }
};
