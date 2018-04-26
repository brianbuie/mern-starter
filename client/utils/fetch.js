import queryString from 'query-string';

const handleError = err => {
  console.error(err);
  return {
    data: { message: 'Something went wrong, try again' },
    ok: false
  };
};

const handleResponse = async res => {
  try {
    const data = await res.json();
    const { ok } = res;
    return { data, ok };
  } catch (err) {
    return handleError(err);
  }
};

export const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    body: data ? JSON.stringify(data) : null,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then(handleResponse)
    .catch(handleError);

export const get = (url, data) => {
  const query = data ? '?' + queryString.stringify(data) : '';
  return fetch(url + query, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then(handleResponse)
    .catch(handleError);
};

export const postLoud = (NAME, url, data = null) => dispatch => {
  dispatch({ type: `${NAME}_REQUEST` });
  return post(url, data).then(res => {
    if (res.ok) dispatch({ type: `${NAME}_SUCCESS`, payload: res.data });
    if (!res.ok) dispatch({ type: `${NAME}_FAILURE`, payload: res.data });
    return res;
  });
};

export const getLoud = (NAME, url, data = null) => dispatch => {
  dispatch({ type: `${NAME}_REQUEST` });
  return get(url, data).then(res => {
    if (res.ok) dispatch({ type: `${NAME}_SUCCESS`, payload: res.data });
    if (!res.ok) dispatch({ type: `${NAME}_FAILURE`, payload: res.data });
    return res;
  });
};
