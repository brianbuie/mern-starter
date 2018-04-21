import queryString from 'query-string';

export const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

export const get = (url, data) => {
  const query = data ? '?' + queryString.stringify(data) : '';
  return fetch(url + query, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });
};
