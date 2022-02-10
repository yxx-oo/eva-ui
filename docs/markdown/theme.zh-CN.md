<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-11 16:35:08
 * @LastEditTime: 2019-10-21 14:15:32
 * @LastEditors: Please set LastEditors
 -->
## 定制主题

### 样式变量

请参考 [所有样式变量](#/zh-CN/styleVariables)

#### 步骤一. 引入样式源文件

```js
在main.js文件中先导入样式文件 import 'eva/lib/index.css'
// 注意：babel6 不支持按需引入样式，请手动引入
然后配置以下代码
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'eva',
        libraryDirectory: 'es',
        // 指定样式路径
        style: name => `${name}/style/less`
      },
      'eva'
    ]
  ]
};
```
#### 步骤二. 修改样式变量

```js
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        {
          loader: 'less-loader',
          options: {
            modifyVars: {
              red: '#03a9f4',
            }
          }
        }
      ]
    }
  ]
};
```
