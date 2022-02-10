<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-04 14:20:44
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <img
        v-for="img in imageList"
        v-lazy="img"
      >
    </demo-block>

    <demo-block :title="$t('title2')">
      <div
        v-for="img in backgroundImageList"
        v-lazy:background-image="img"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <lazy-component>
        <img
          v-for="img in componentImageList"
          v-lazy="img"
        >
      </lazy-component>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '背景图懒加载',
      title3: '懒加载模块'
    },
    'en-US': {
      title2: 'Lazyload Background Image',
      title3: 'Lazyload Component'
    }
  },

  data() {
    return {
      imageList: [
        (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery1.jpg',
        (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery2.jpg',
        (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery3.jpg',
        (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/EVA.png'
      ],
      backgroundImageList: [
        (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery1.jpg',
        (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery2.jpg'
      ],
      componentImageList: [
        (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery1.jpg',
        (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery2.jpg'
      ]
    };
  }
};
</script>

<style lang="less">
.demo-lazyload {
  padding: 0 15px;

  img,
  div[lazy] {
    padding: 15px;
    width: 100%;
    height: 250px;
    margin: 10px 0 0;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-size: 315px 250px;
    background-position: 15px;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }

  .van-doc-demo-block__title,
  .van-doc-demo-section__title {
    padding-left: 0;
  }
}
</style>
