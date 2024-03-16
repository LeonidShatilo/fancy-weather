// https://opencagedata.com/
export const OPENCAGEDATA_API_KEY = process.env.OPENCAGEDATA_API_KEY || '';
export const OPENCAGEDATA_API_ROUTE = `https://api.opencagedata.com/geocode/v1/json?key=${OPENCAGEDATA_API_KEY}`;

// https://openweathermap.org/
export const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY || '';
export const OPENWEATHERMAP_API_ROUTE = `https://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHERMAP_API_KEY}`;

// https://unsplash.com/developers
export const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY || '';
export const UNSPLASH_API_ROUTE = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}`;

// https://ipinfo.io/
export const IPINFO_API_KEY = process.env.IPINFO_API_KEY || '';
export const IPINFO_API_ROUTE = `https://ipinfo.io/json?token=${IPINFO_API_KEY}`;
