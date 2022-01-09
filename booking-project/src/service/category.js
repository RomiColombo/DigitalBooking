import config from '../config/index.js';

const getCategory = () => {
  let url = config.baseUrl + ':8080/categories';
  return fetch(url)
    .then(data => data.json())
}

export { getCategory };