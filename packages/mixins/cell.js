/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-28 11:25:04
 * @LastEditors: Please set LastEditors
 */
/**
 * Common Cell Props
 */

export default {
  props: {
    icon: String,
    size: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleClass: [Array, String],
    titleStyle: [Array, String],
    valueClass: [Array, String],
    labelClass: [Array, String],
    title: [String, Number],
    value: [String, Number],
    label: [String, Number],
    arrowDirection: String,
    border: {
      type: Boolean,
      default: true
    }
  }
};
