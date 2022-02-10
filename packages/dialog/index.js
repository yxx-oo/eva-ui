/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-22 16:35:11
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import EvaDialog from './Dialog';
import { isServer } from '../utils';

let instance;

const initInstance = () => {
  instance = new (Vue.extend(EvaDialog))({
    el: document.createElement('div')
  });

  instance.$on('input', value => {
    instance.value = value;
  });

  document.body.appendChild(instance.$el);
};

const Dialog = options => {
  /* istanbul ignore if */
  if (isServer) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }

    Object.assign(instance, Dialog.currentOptions, options, {
      resolve,
      reject
    });
  });
};

Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  messageAlign: '',
  confirmButtonText: '',
  cancelButtonText: '',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  callback: action => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

Dialog.alert = Dialog;

Dialog.confirm = options => Dialog({
  showCancelButton: true,
  ...options
});

Dialog.close = () => {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = options => {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = { ...Dialog.defaultOptions };
};

Dialog.install = () => {
  Vue.use(EvaDialog);
};

Vue.prototype.$dialog = Dialog;
Dialog.resetDefaultOptions();

export default Dialog;
