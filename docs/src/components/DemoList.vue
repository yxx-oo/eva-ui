<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:52:21
 * @LastEditTime: 2019-10-29 10:07:21
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="side-nav">
    <h1 class="zanui-title">
      <img :src="image">
      <span>Eva</span>
    </h1>
    <div class="mobile-switch-lang">
      <!-- <span
        :class="{ active: $vantLang === 'en-US' }"
        @click="switchLang('en-US')"
      >
        EN
      </span> -->
      <span
        :class="{ active: $vantLang === 'zh-CN' }"
        @click="switchLang('zh-CN')"
      >
        中文
      </span>
    </div>
    <h2 class="zanui-desc">{{ description }}</h2>
    <template v-for="item in navList">
      <template v-if="item.showInMobile">
        <mobile-nav
          v-for="(group, index) in item.groups"
          :group="group"
          :base="$vantLang"
          :key="index"
        />
      </template>
    </template>
  </div>
</template>

<script>
import docConfig from '../doc.config';
import MobileNav from './MobileNav';
import { setLang } from '../utils/lang';

export default {
  components: {
    MobileNav
  },

  data() {
    return {
      docConfig,
      image: (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/EVA.png',
    };
  },

  computed: {
    navList() {
      return this.docConfig[this.$vantLang].nav || [];
    },

    description() {
      return this.$vantLang === 'zh-CN' ? '轻量、可靠的移动端 Vue 组件库' : 'Lightweight Mobile UI Components built on Vue';
    }
  },

  methods: {
    switchLang(lang) {
      const from = lang === 'zh-CN' ? 'en-US' : 'zh-CN';
      this.$router.push(this.$route.path.replace(from, lang));
      setLang(lang);
    }
  }
};
</script>

<style lang="less">
@import '../../../packages/style/var';
@import './variable';

.van-doc-header__top {
  background-color: black !important;

  &-nav-title.link.active {
    color: #fff !important;
    border-bottom-color: #fff !important;
  }
}

.van-doc-header__logo span {
  color: #fff !important;
}

.van-doc-nav {
  background-color: #fff !important;

  &__subitem a {
    height: 42px;
    box-sizing: border-box;
    font-size: 13px !important;
  }

  &__subitem a.active {
    font-size: 15px !important;
    font-weight: 500;
    color: black !important;

    span {
      font-size: 15px !important;
      font-weight: 500;
      color: black;
    }

    &:hover {
      font-size: 15px !important;
    }
  }

  &__subitem a:hover {
    color: #000 !important;
    font-size: 14px !important;
  }
}

.van-doc-container {
  background-color: #f1f1f1 !important;
}

.van-doc-content {
  position: relative;
  flex: 1;
  padding: 0 0 75px;

  .card {
    margin-bottom: 24px;
    padding: 24px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 8px 12px #ebedf0;

    code {
      background-color: #fff;
    }

    table {
      width: 100%;
      margin-top: 12px;
      color: @eva-doc-text-color;
      font-size: 13px;
      line-height: 1.5;
      border-radius: 6px;
      border-collapse: collapse;

      thead {
        th {
          padding: 8px 10px;
          font-weight: 500;
          text-align: left;
          background-color: #fff;

          &:first-child {
            padding-left: 0;
          }

          &:last-child {
            padding-right: 0;
          }
        }
      }

      td {
        padding: 8px;
        border-top: 1px solid @eva-doc-code-background-color;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
      }

      code {
        padding: 0 8px;
        font-size: 13px;
        font-family: inherit;
        word-break: keep-all;
      }

      em {
        color: @eva-doc-fuchsia;
        font-size: 12px;
        font-family: @eva-doc-code-font-family;
        font-style: normal;
      }
    }
  }

  a {
    color: @eva-doc-blue;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: @eva-doc-black;
    font-weight: normal;
    line-height: 1.5;

    &[id] {
      cursor: pointer;
    }
  }

  h1 {
    margin: 0 0 30px;
    font-size: 30px;
    cursor: default;
  }

  h2 {
    margin: 45px 0 20px;
    font-size: 22px;
  }

  h3 {
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 17px;
  }

  h4 {
    margin: 24px 0 12px;
    font-weight: 500;
    font-size: 15px;
  }

  h5 {
    margin: 24px 0 12px;
    font-weight: 500;
    font-size: 14px;
  }

  p {
    color: @eva-doc-text-color;
    font-size: 14px;
    line-height: 26px;
  }

  ul li,
  ol li {
    position: relative;
    margin: 5px 0 5px 10px;
    padding-left: 15px;
    color: @eva-doc-text-color;
    font-size: 14px;
    line-height: 22px;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      width: 6px;
      height: 6px;
      margin-top: 8px;
      border: 1px solid @eva-doc-dark-grey;
      border-radius: 50%;
      content: '';
    }
  }

  hr {
    margin: 30px 0;
    border: 0 none;
    border-top: 1px solid #eee;
  }

  p > code,
  li > code,
  table code {
    display: inline;
    margin: 2px 3px;
    padding: 2px 5px;
    background-color: #f0f2f5;
    box-shadow: none;
  }

  section {
    padding: 30px;
    overflow: hidden;
  }

  blockquote {
    margin: 20px 0 0;
    padding: 16px;
    color: rgba(52, 73, 94, .8);
    font-size: 14px;
    background-color: #ecf9ff;
    border-left: 5px solid #50bfff;
    border-radius: 4px;
  }

  img {
    width: 100%;
    margin: 15px 0;
    box-shadow: 0 2px 4px #ebedf0;
  }

  &--changelog {
    strong {
      display: block;
      margin: 12px 0;
      font-weight: 500;
      font-size: 15px;
    }

    h3 {
      + p code {
        margin: 0;
      }

      a {
        color: inherit;
        font-size: 20px;
      }
    }
  }
}

.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding: 60px 15px 20px;

  .zanui-title,
  .zanui-desc {
    text-align: center;
    font-weight: normal;
    user-select: none;
  }

  .zanui-title {
    margin: 0 0 15px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 36px;
    }

    span {
      font-size: 40px;
      margin-left: 15px;
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    }
  }

  .zanui-desc {
    font-size: 14px;
    color: #455a64;
    margin: 0 0 60px;
  }
}

.mobile-switch-lang {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 11px;
  border: 1px solid @blue;
  border-radius: 3px;
  color: @blue;
  cursor: pointer;

  span {
    width: 32px;
    line-height: 22px;
    text-align: center;
    display: inline-block;

    &.active {
      color: @white;
      background-color: @blue;
    }
  }
}
</style>
