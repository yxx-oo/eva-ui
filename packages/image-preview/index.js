/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 15:59:41
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import EvaImagePreview from './ImagePreview';
import { isServer } from '../utils';

let instance;

const defaultConfig = {
  images: [],
  loop: true,
  value: true,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  showIndicators: false
};

const initInstance = () => {
  instance = new (Vue.extend(EvaImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

const ImagePreview = (images, startPosition = 0) => {
  /* istanbul ignore if */
  if (isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  const options = Array.isArray(images) ? { images, startPosition } : images;

  Object.assign(instance, defaultConfig, options);

  instance.$once('input', show => {
    instance.value = show;
  });

  if (options.onClose) {
    instance.$once('close', options.onClose);
  }

  return instance;
};

ImagePreview.install = () => {
  Vue.use(EvaImagePreview);
};

export default ImagePreview;
