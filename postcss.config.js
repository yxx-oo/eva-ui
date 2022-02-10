/*
 * @Author: your name
 * @Date: 2019-09-11 16:35:08
 * @LastEditTime: 2019-10-21 16:39:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /eva-dev/postcss.config.js
 */
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Android >= 4.0',
        'iOS >= 7',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8'
      ]
    }
  }
};
