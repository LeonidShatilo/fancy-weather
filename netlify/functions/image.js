import axios from 'axios';

const { UNSPLASH_API_KEY } = process.env;

// https://unsplash.com/developers
const UNSPLASH_API_ROUTE = 'https://api.unsplash.com/photos/random';

export const handler = async (event) => {
  const { query, orientation, per_page } = event.queryStringParameters;

  try {
    const { data } = await axios.get(UNSPLASH_API_ROUTE, {
      params: {
        orientation,
        per_page,
        query,
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
      },
    });

    return {
      body: JSON.stringify(data),
      statusCode: 200,
    };
  } catch (error) {
    console.error('Image function error:', error);

    return {
      body: JSON.stringify({ message: error.message }),
      statusCode: error.response?.status || 500,
    };
  }
};
