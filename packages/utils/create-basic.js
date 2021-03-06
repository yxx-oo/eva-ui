/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:40:54
 * @LastEditTime: 2019-08-15 17:43:28
 * @LastEditors: Please set LastEditors
 */
/**
 * Create a basic component with common options
 */
import '../locale';
import bem from '../mixins/bem';
import i18n from '../mixins/i18n';
import { isDef, camelize } from '.';

function install(Vue) {
  const { name } = this;
  Vue.component(name, this);
  Vue.component((camelize(`-${name}`)), this);
}

function returnArray() {
  return [];
}

function defaultProps(props) {
  Object.keys(props).forEach(key => {
    if (props[key] === Array) {
      props[key] = {
        type: Array,
        default: returnArray
      };
    } else if (props[key] === Number) {
      props[key] = {
        type: Number,
        default: 0
      };
    }
  });
}

export default function (sfc) {
  sfc.name = 'eva-' + sfc.name;
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(i18n, bem);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = isDef;
  sfc.props && defaultProps(sfc.props);

  return sfc;
}
