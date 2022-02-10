/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 12:01:03
 * @LastEditTime: 2019-08-28 12:01:17
 * @LastEditors: Please set LastEditors
 */
import { isServer } from '..';

export function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}

export function isIOS() {
  /* istanbul ignore next */
  return isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
