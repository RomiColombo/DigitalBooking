import config from '../config/index.js';

export function getProduct(first = '', second = '') {

  let url = config.baseUrl + ':8080/products/'
  url = first == '' ? url : url + 'filter/' + first;
  url = second == '' ? url : url + '/' + second;

  return fetch(url)
    .then(data => data.json())
}
