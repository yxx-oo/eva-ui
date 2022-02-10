/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 14:14:33
 * @LastEditTime: 2019-09-04 19:10:39
 * @LastEditors: Please set LastEditors
 */
const path = require('path');
const config = require('./webpack.dev.js');

const isMinify = process.argv.indexOf('-p') !== -1;

delete config.serve;

module.exports = Object.assign(config, {
  mode: 'production',
  entry: {
    eva: './es/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'eva',
    libraryTarget: 'umd',
    filename: isMinify ? '[name].min.js' : '[name].js',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  performance: false,
  optimization: {
    minimize: isMinify
  }
});
