/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-22 18:11:27
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import { addUnit } from './format/unit';

const isServer = Vue.prototype.$isServer;

function isDef(value) {
  return value !== undefined && value !== null;
}

function isObj(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function get(object, path) {
  const keys = path.split('.');
  let result = object;

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : '';
  });

  return result;
}

const camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export {
  get,
  range,
  isObj,
  isDef,
  isServer,
  camelize,
  isAndroid,
  addUnit
};
