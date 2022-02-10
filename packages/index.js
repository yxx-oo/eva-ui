/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Button from './button';
import Cell from './cell';
import CellGroup from './cell-group';
import Col from './col';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import Cropper from './cropper';
import Dialog from './dialog';
import Field from './field';
import Icon from './icon';
import Image from './image';
import ImagePreview from './image-preview';
import Info from './info';
import Lazyload from './lazyload';
import List from './list';
import Loading from './loading';
import Locale from './locale';
import NavBar from './nav-bar';
import NoticeBar from './notice-bar';
import Notify from './notify';
import Overlay from './overlay';
import Picker from './picker';
import Popup from './popup';
import PullRefresh from './pull-refresh';
import Row from './row';
import Swipe from './swipe';
import SwipeItem from './swipe-item';
import Tab from './tab';
import Tabs from './tabs';
import Tag from './tag';
import Toast from './toast';
import Uploader from './uploader';

const version = '1.0.0';
const components = [
  Button,
  Cell,
  CellGroup,
  Col,
  Collapse,
  CollapseItem,
  Cropper,
  Dialog,
  Field,
  Icon,
  Image,
  ImagePreview,
  Info,
  List,
  Loading,
  Locale,
  NavBar,
  NoticeBar,
  Notify,
  Overlay,
  Picker,
  Popup,
  PullRefresh,
  Row,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Tag,
  Toast,
  Uploader
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Button,
  Cell,
  CellGroup,
  Col,
  Collapse,
  CollapseItem,
  Cropper,
  Dialog,
  Field,
  Icon,
  Image,
  ImagePreview,
  Info,
  Lazyload,
  List,
  Loading,
  Locale,
  NavBar,
  NoticeBar,
  Notify,
  Overlay,
  Picker,
  Popup,
  PullRefresh,
  Row,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Tag,
  Toast,
  Uploader
};

export default {
  install,
  version
};
