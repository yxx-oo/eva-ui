/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-10-18 17:56:59
 * @LastEditors: Please set LastEditors
 */
/* eslint-disable */
const version = require('../../package.json').version;
const curWwwPath = window.document.location.href;
var pathName = window.document.location.pathname;
var pos = curWwwPath.indexOf(pathName);
var localhostPaht = curWwwPath.substring(0, pos);

module.exports = {
  'zh-CN': {
    header: {
      logo: {
        image: (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/EVA.png',
        title: 'Eva',
        version,
        href: '#/'
      },
      nav: {
        'Vue 组件': '',
        // '小程序组件': '',
        // lang: {
        //   text: 'En',
        //   from: 'zh-CN',
        //   to: 'en-US'
        // },
        // github: ''
      }
    },
    nav: [
      {
        name: '开发指南',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: '介绍'
              },
              // {
              //   path: '/quickstart',
              //   title: '快速上手'
              // },
              // {
              //   path: '/changelog',
              //   title: '更新日志'
              // },
              // {
              //   path: '/style',
              //   title: '内置样式'
              // },
              {
                path: '/theme',
                title: '定制主题'
              },
              {
                path: '/styleVariables',
                title: '样式变量'
              }
              // {
              //   path: '/contribution',
              //   title: '开发指南'
              // },
              // {
              //   path: '/style-guide',
              //   title: '风格指南'
              // },
              // {
              //   path: '/demo',
              //   title: '示例页面'
              // },
              // {
              //   path: '/locale',
              //   title: '国际化'
              // }
            ]
          }
        ]
      },
      {
        name: '组件',
        showInMobile: true,
        groups: [
          {
            groupName: '基础组件',
            list: [
              {
                path: '/button',
                title: 'Button 按钮'
              },
              {
                path: '/cell',
                title: 'Cell 单元格'
              },
              {
                path: '/icon',
                title: 'Icon 图标'
              },
              {
                path: '/image',
                title: 'Image 图片'
              },
              {
                path: '/col',
                title: 'Layout 布局'
              },
              {
                path: '/popup',
                title: 'Popup 弹出层'
              }
            ]
          },
          {
            groupName: '表单组件',
            list: [
              // {
              //   path: '/checkbox',
              //   title: 'Checkbox 复选框'
              // },
              // {
              //   path: '/datetime-picker',
              //   title: 'DatetimePicker 时间选择'
              // },
              {
                path: '/field',
                title: 'Field 输入框'
              },
              // {
              //   path: '/number-keyboard',
              //   title: 'NumberKeyboard 数字键盘'
              // },
              // {
              //   path: '/password-input',
              //   title: 'PasswordInput 密码输入框'
              // },
              {
                path: '/picker',
                title: 'Picker 选择器'
              },
              // {
              //   path: '/radio',
              //   title: 'Radio 单选框'
              // },
              // {
              //   path: '/rate',
              //   title: 'Rate 评分'
              // },
              // {
              //   path: '/search',
              //   title: 'Search 搜索'
              // },
              // {
              //   path: '/slider',
              //   title: 'Slider 滑块'
              // },
              // {
              //   path: '/stepper',
              //   title: 'Stepper 步进器'
              // },
              // {
              //   path: '/switch',
              //   title: 'Switch 开关'
              // },
              // {
              //   path: '/switch-cell',
              //   title: 'SwitchCell 开关单元格'
              // },
              {
                path: '/uploader',
                title: 'Uploader 图片上传'
              }
            ]
          },
          {
            groupName: '反馈组件',
            list: [
              // {
              //   path: '/actionsheet',
              //   title: 'Actionsheet 上拉菜单'
              // },
              {
                path: '/dialog',
                title: 'Dialog 弹出框'
              },
              {
                path: '/loading',
                title: 'Loading 加载'
              },
              {
                path: '/notify',
                title: 'Notify 消息通知'
              },
              {
                path: '/overlay',
                title: 'Overlay 遮罩层'
              },
              {
                path: '/pull-refresh',
                title: 'PullRefresh 下拉刷新'
              },
              // {
              //   path: '/swipe-cell',
              //   title: 'SwipeCell 滑动单元格'
              // },
              {
                path: '/toast',
                title: 'Toast 轻提示'
              }
            ]
          },
          {
            groupName: '展示组件',
            list: [
              // {
              //   path: '/circle',
              //   title: 'Circle 环形进度条'
              // },
              {
                path: '/collapse',
                title: 'Collapse 折叠面板'
              },
              {
                path: '/image-preview',
                title: 'ImagePreview 图片预览'
              },
              {
                path: '/lazyload',
                title: 'Lazyload 图片懒加载'
              },
              {
                path: '/list',
                title: 'List 列表'
              },
              {
                path: '/notice-bar',
                title: 'NoticeBar 通告栏'
              },
              // {
              //   path: '/panel',
              //   title: 'Panel 面板'
              // },
              // {
              //   path: '/progress',
              //   title: 'Progress 进度条'
              // },
              // {
              //   path: '/steps',
              //   title: 'Steps 步骤条'
              // },
              {
                path: '/swipe',
                title: 'Swipe 轮播'
              },
              {
                path: '/tag',
                title: 'Tag 标记'
              }
            ]
          },
          {
            groupName: '功能组件',
            list: [
              {
                path: '/cropper',
                title: 'Cropper 图片剪裁'
              }
            ]
          },
          {
            groupName: '导航组件',
            list: [
              // {
              //   path: '/badge',
              //   title: 'Badge 徽章'
              // },
              {
                path: '/nav-bar',
                title: 'NavBar 导航栏'
              },
              // {
              //   path: '/pagination',
              //   title: 'Pagination 分页'
              // },
              {
                path: '/tab',
                title: 'Tab 标签页'
              },
              // {
              //   path: '/tabbar',
              //   title: 'Tabbar 标签栏'
              // },
              // {
              //   path: '/tree-select',
              //   title: 'TreeSelect 分类选择'
              // }
            ]
          },
          // {
          //   groupName: '业务组件',
          //   list: [
          //     {
          //       path: '/address-edit',
          //       title: 'AddressEdit 地址编辑'
          //     },
          //     {
          //       path: '/address-list',
          //       title: 'AddressList 地址列表'
          //     },
          //     {
          //       path: '/area',
          //       title: 'Area 省市区选择'
          //     },
          //     {
          //       path: '/card',
          //       title: 'Card 商品卡片'
          //     },
          //     {
          //       path: '/contact-card',
          //       title: 'Contact 联系人'
          //     },
          //     {
          //       path: '/coupon-list',
          //       title: 'Coupon 优惠券'
          //     },
          //     {
          //       path: '/goods-action',
          //       title: 'GoodsAction 商品导航'
          //     },
          //     {
          //       path: '/submit-bar',
          //       title: 'SubmitBar 提交订单栏'
          //     },
          //     {
          //       path: '/sku',
          //       title: 'Sku 商品规格'
          //     }
          //   ]
          // }
        ]
      },
      {
        name: '小程序Q&A',
        groups: [
          {
            list: [
                {
                  path: '/minorApplication',
                  title: '小程序申请'
                }
            ]
          }
        ]
      }
    ]
  },
  'en-US': {
    header: {
      logo: {
        image: (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/EVA.png',
        title: 'Eva',
        version,
        href: '#/'
      },
      nav: {
        // lang: {
        //   text: '中文',
        //   from: 'en-US',
        //   to: 'zh-CN'
        // },
        // github: 'https://github.com/youzan/vant'
      }
    },
    nav: [
      {
        name: 'Essentials',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: 'Introduction'
              },
              // {
              //   path: '/quickstart',
              //   title: 'Quickstart'
              // },
              // {
              //   path: '/changelog',
              //   title: 'Changelog'
              // },
              // {
              //   path: '/style',
              //   title: 'Built-in style'
              // },
              // {
              //   path: '/theme',
              //   title: 'Custom Theme'
              // },
              // {
              //   path: '/demo',
              //   title: 'Demo pages'
              // },
              // {
              //   path: '/locale',
              //   title: 'Internationalization'
              // }
            ]
          }
        ]
      },
      {
        name: 'Components',
        showInMobile: true,
        groups: [
          {
            groupName: 'Basic Components',
            list: [
              {
                path: '/button',
                title: 'Button'
              },
              {
                path: '/cell',
                title: 'Cell'
              },
              {
                path: '/icon',
                title: 'Icon'
              },
              {
                path: '/image',
                title: 'Image'
              },
              {
                path: '/col',
                title: 'Layout'
              },
              {
                path: '/popup',
                title: 'Popup'
              }
            ]
          },
          {
            groupName: 'Form Components',
            list: [
              // {
              //   path: '/checkbox',
              //   title: 'Checkbox'
              // },
              // {
              //   path: '/datetime-picker',
              //   title: 'DatetimePicker'
              // },
              {
                path: '/field',
                title: 'Field'
              },
              // {
              //   path: '/number-keyboard',
              //   title: 'NumberKeyboard'
              // },
              // {
              //   path: '/password-input',
              //   title: 'PasswordInput'
              // },
              {
                path: '/picker',
                title: 'Picker'
              },
              // {
              //   path: '/radio',
              //   title: 'Radio'
              // },
              // {
              //   path: '/rate',
              //   title: 'Rate'
              // },
              // {
              //   path: '/search',
              //   title: 'Search'
              // },
              // {
              //   path: '/slider',
              //   title: 'Slider'
              // },
              // {
              //   path: '/stepper',
              //   title: 'Stepper'
              // },
              // {
              //   path: '/switch',
              //   title: 'Switch'
              // },
              // {
              //   path: '/switch-cell',
              //   title: 'SwitchCell'
              // },
              {
                path: '/uploader',
                title: 'Uploader'
              }
            ]
          },
          {
            groupName: 'Action Components',
            list: [
              // {
              //   path: '/actionsheet',
              //   title: 'Actionsheet'
              // },
              {
                path: '/dialog',
                title: 'Dialog'
              },
              {
                path: '/loading',
                title: 'Loading'
              },
              {
                path: '/notify',
                title: 'Notify'
              },
              {
                path: '/pull-refresh',
                title: 'PullRefresh'
              },
              // {
              //   path: '/swipe-cell',
              //   title: 'SwipeCell'
              // },
              {
                path: '/toast',
                title: 'Toast'
              }
            ]
          },
          {
            groupName: 'Display Components',
            list: [
              // {
              //   path: '/circle',
              //   title: 'Circle'
              // },
              {
                path: '/collapse',
                title: 'Collapse'
              },
              {
                path: '/image-preview',
                title: 'ImagePreview'
              },
              {
                path: '/lazyload',
                title: 'Lazyload'
              },
              {
                path: '/list',
                title: 'List'
              },
              {
                path: '/notice-bar',
                title: 'NoticeBar'
              },
              // {
              //   path: '/panel',
              //   title: 'Panel'
              // },
              // {
              //   path: '/progress',
              //   title: 'Progress'
              // },
              // {
              //   path: '/steps',
              //   title: 'Steps'
              // },
              {
                path: '/swipe',
                title: 'Swipe'
              },
              {
                path: '/tag',
                title: 'Tag'
              }
            ]
          },
          {
            groupName: 'Function Components',
            list: [
              {
                path: '/cropper',
                title: 'Cropper'
              }
            ]
          },
          {
            groupName: 'Navigation Components',
            list: [
              // {
              //   path: '/badge',
              //   title: 'Badge'
              // },
              {
                path: '/nav-bar',
                title: 'NavBar'
              },
              // {
              //   path: '/pagination',
              //   title: 'Pagination'
              // },
              {
                path: '/tab',
                title: 'Tab'
              },
              // {
              //   path: '/tabbar',
              //   title: 'Tabbar'
              // },
              // {
              //   path: '/tree-select',
              //   title: 'TreeSelect'
              // }
            ]
          },
          // {
          //   groupName: 'Business Components',
          //   list: [
          //     {
          //       path: '/address-edit',
          //       title: 'AddressEdit'
          //     },
          //     {
          //       path: '/address-list',
          //       title: 'AddressList'
          //     },
          //     {
          //       path: '/area',
          //       title: 'Area'
          //     },
          //     {
          //       path: '/card',
          //       title: 'Card'
          //     },
          //     {
          //       path: '/contact-card',
          //       title: 'Contact'
          //     },
          //     {
          //       path: '/coupon-list',
          //       title: 'Coupon'
          //     },
          //     {
          //       path: '/goods-action',
          //       title: 'GoodsAction'
          //     },
          //     {
          //       path: '/submit-bar',
          //       title: 'SubmitBar'
          //     },
          //     {
          //       path: '/sku',
          //       title: 'Sku'
          //     }
          //   ]
          // }
        ]
      }
    ]
  }
};
