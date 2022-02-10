/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-10-28 19:27:19
 * @LastEditors: Please set LastEditors
 */
/**
 * Common Picker Props
 */


export default {
  props: {
    title: String,
    loading: Boolean,
    showToolbar: Boolean,
    cancelButtonText: String,
    confirmButtonText: String,
    allowHtml: {
      type: Boolean,
      default: true
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    swipeDuration: {
      type: Number,
      default: 1000
    }
  }
};
