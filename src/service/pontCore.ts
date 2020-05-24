import axios from 'axios';

const instance = axios.create({
  timeout: 10000,
});
instance.interceptors.response.use(function (response) {
  const { data } = response;
  const { statusCode, message } = data;
  if (statusCode === 200) {
    return data;
  }
  throw new Error(message);
});

export function fetch(url, config) {
  return instance.request({
    url,
    method: config.method,
    data: config.body,
  });
}

export function getUrl(url, params, method): string {
  const baseURL = process.env.SERVER_URL;
  const timestamp = Date.now();
  const signature = '';
  let queryString = '?';
  const querys = Object.keys(params)
    .map((p) => `${p}=${params[p]}`)
    .join('&');
  queryString += querys;
  return baseURL + url + queryString;
}

export const pontCore = {
  fetch,
  getUrl,
};
