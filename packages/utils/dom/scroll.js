/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 12:00:11
 * @LastEditTime: 2019-08-28 12:02:42
 * @LastEditors: Please set LastEditors
 */

// get nearest scroll element
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
const overflowScrollReg = /scroll|auto/i;
export function getScrollEventTarget(element, rootParent) {
  let node = element;
  while (
    node &&
    node.tagName !== 'HTML' &&
    node.nodeType === 1 &&
    node !== rootParent
  ) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      }

      // see: https://github.com/youzan/vant/issues/3823
      const { overflowY: htmlOverflowY } = window.getComputedStyle(node.parentNode);
      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }
    node = node.parentNode;
  }
  return rootParent;
}

export function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
}

export function setScrollTop(element, value) {
  'scrollTop' in element ? (element.scrollTop = value) : element.scrollTo(element.scrollX, value);
}

export function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

export function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}

// get distance from element top to page top
export function getElementTop(element) {
  return (
    (element === window ? 0 : (element).getBoundingClientRect().top) +
    getRootScrollTop()
  );
}

export function getVisibleHeight(element) {
  return element === window
    ? element.innerHeight
    : (element).getBoundingClientRect().height;
}
