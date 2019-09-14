export default class APIRequest {
  constructor() {
    this._token = 'gochigang';
  }

  get = (url, data = {}) =>
    new Promise((resolve, reject) => {
      const params = { method: 'GET' };
      data.token = this._token;
      url +=
        '?' +
        Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');

      fetch(url, params)
        .then(response => response.json())
        .then(json => {
          if (!json.success) reject(json.message);
          resolve(json.data);
        })
        .catch(e => reject(e));
    });

  post = (url, data = {}) =>
    new Promise((resolve, reject) => {
      data.token = this._token;
      const params = { method: 'POST', body: JSON.stringify(data) };
      fetch(url, params)
        .then(response => response.json())
        .then(json => {
          if (!json.success) reject(json.message);
          resolve(json.data);
        })
        .catch(e => reject(e));
    });

  put = (url, data = {}) =>
    new Promise((resolve, reject) => {
      data.token = this._token;
      const params = { method: 'PUT', body: JSON.stringify(data) };
      fetch(url, params)
        .then(response => response.json())
        .then(json => {
          if (!json.success) reject(json.message);
          resolve(json.data);
        })
        .catch(e => reject(e));
    });

  setToken = token => {
    this._token = token;
  };
}
