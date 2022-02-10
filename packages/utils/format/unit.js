/*
 * @Description: In User Settings Edit
 * @Author: yuxiaoxiao
 * @Date: 2019-08-22 18:01:43
 * @LastEditTime: 2019-08-22 19:02:21
 * @LastEditors: Please set LastEditors
 */
import { isDef } from '../index';
import number  from '../validate/number';

export function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return number(value) ? `${value}px` : value;
}
