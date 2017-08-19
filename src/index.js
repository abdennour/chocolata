import Chocolata from './Chocolata';
import config from './config.js';

module.exports = {
  getItem: Chocolata.getItem.bind(Chocolata),
  setItem: Chocolata.setItem.bind(Chocolata),
  removeItem: Chocolata.removeItem.bind(Chocolata)
};
