<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-10-22 11:37:21
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="app">
    <van-doc
      :base="base"
      :config="config"
      active="Vue 组件"
      :simulators="simulators"
      :current-simulator="currentSimulator"
    >
      <router-view @changeDemoURL="onChangeDemoURL" />
    </van-doc>
  </div>
</template>

<script>
import docConfig from './doc.config';

export default {
  data() {
    return {
      simulators: [`mobile.html${location.hash}`],
      demoURL: ''
    };
  },

  computed: {
    base() {
      return `/${this.$vantLang}`;
    },

    config() {
      return docConfig[this.$vantLang];
    },

    currentSimulator() {
      const { name } = this.$route;
      return name && name.indexOf('demo') !== -1 ? 1 : 0;
    }
  },

  methods: {
    onChangeDemoURL(url) {
      this.simulators = [this.simulators[0], url];
    }
  }
};
</script>

<style lang="less">
body {
  background-color: #f1f1f1 !important;
}

.van-doc-content {
  .van-doc-intro {
    text-align: center;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: 6px;

    img {
      box-shadow: none;
    }

    &__youzan {
      width: 32px;
      height: 32px;
      display: block;
      margin: 25px 0 0;
    }

    &__logo {
      width: 120px;
      height: 120px;
      object-fit: contain;
    }

    h2 {
      font-size: 36px;
      line-height: 60px;
      font-weight: normal;
      margin-top: 0;
    }

    p {
      font-size: 15px;
      color: #455a64;
    }
  }
}
</style>
