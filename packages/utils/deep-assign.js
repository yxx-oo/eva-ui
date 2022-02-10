/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-27 17:49:58
 * @LastEditors: Please set LastEditors
 */
/* eslint-disable no-use-before-define */
import { isDef, isObj } from '.';

const { hasOwnProperty } = Object.prototype;

function assignKey(to, from, key) {
  const val = from[key];

  if (!isDef(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !isObj(val) || val === 'function') {
    to[key] = val;
  } else {
    to[key] = assign(Object(to[key]), from[key]);
  }
}

export default function assign(to, from) {
  Object.keys(from).forEach(key => {
    assignKey(to, from, key);
  });

  return to;
}
