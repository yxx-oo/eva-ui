/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 18:10:34
 * @LastEditors: Please set LastEditors
 */
const path = require('path');
const config = require('./webpack.dev.js');

delete config.serve;

module.exports = Object.assign(config, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: 'http://10.59.98.187:8888/eva/',
    filename: '[name].[hash:8].js',
    chunkFilename: 'async_[name].[chunkhash:8].js'
  }
});
