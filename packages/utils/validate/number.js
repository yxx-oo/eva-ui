/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-22 18:10:24
 * @LastEditors: Please set LastEditors
 */
export default function number(value) {
  return /^\d+(\.\d+)?$/.test(value);
}

export function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }

  // eslint-disable-next-line no-self-compare
  return value !== value;
}