import config from '../config/index.js';

const getCity = () => {
  let url = config.baseUrl + ':8080/cities';
  return fetch(url)
    .then(data => data.json())
}

export { getCity };