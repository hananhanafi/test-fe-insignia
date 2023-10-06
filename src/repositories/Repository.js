import axios from 'axios';

export const customHeaders = {
  Accept: 'application/json',
  'app-id':  process.env.REACT_APP_DUMMY_API_APP_ID
};

export const baseUrl = process.env.REACT_APP_API_URL;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    if (!query) return '';
    return Object.keys(query)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');
};
