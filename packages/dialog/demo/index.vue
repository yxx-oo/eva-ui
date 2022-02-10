<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-04 14:19:02
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('alert1')">
      <eva-button
        type="primary"
        @click="onClickAlert"
      >
        {{ $t('alert1') }}
      </eva-button>
      <eva-button
        type="primary"
        @click="onClickAlert2"
      >
        {{ $t('alert2') }}
      </eva-button>
    </demo-block>

    <demo-block :title="$t('confirm')">
      <eva-button
        type="primary"
        @click="onClickConfirm"
      >
        {{ $t('confirm') }}
      </eva-button>
    </demo-block>

    <demo-block :title="$t('asyncClose')">
      <eva-button
        type="primary"
        @click="onClickAsyncClose"
      >
        {{ $t('asyncClose') }}
      </eva-button>
    </demo-block>

    <demo-block :title="$t('componentCall')">
      <eva-button
        type="primary"
        @click="show = true"
      >
        {{ $t('componentCall') }}
      </eva-button>
      <eva-dialog
        v-model="show"
        :title="$t('title')"
        show-cancel-button
        :lazy-render="false"
      >
        <img :src="image">
      </eva-dialog>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      alert1: '提示弹窗',
      alert2: '提示弹窗（无标题）',
      confirm: '确认弹窗',
      asyncClose: '异步关闭',
      componentCall: '组件调用',
      content: '代码是写出来给人看的，附带能在机器上运行'
    },
    'en-US': {
      alert1: 'Alert',
      alert2: 'Alert without title',
      confirm: 'Confirm dialog',
      asyncClose: 'Async Close',
      componentCall: 'Component Call',
    }
  },

  data() {
    return {
      show: false,
      currentRate: 0,
      image: (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery1.jpg'
    };
  },

  methods: {
    onClickAlert() {
      this.$dialog.alert({
        title: this.$t('title'),
        message: this.$t('content')
      });
    },

    onClickAlert2() {
      this.$dialog.alert({
        message: this.$t('content')
      });
    },

    onClickConfirm() {
      this.$dialog.confirm({
        title: this.$t('title'),
        message: this.$t('content')
      });
    },

    onClickAsyncClose() {
      function beforeClose(action, done) {
        if (action === 'confirm') {
          setTimeout(done, 1000);
        } else {
          done();
        }
      }

      this.$dialog.confirm({
        title: this.$t('title'),
        message: this.$t('content'),
        beforeClose
      });
    }
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-dialog {
  background-color: @white;

  .van-doc-demo-block > .eva-button {
    margin-left: @padding-md;
  }

  img {
    box-sizing: border-box;
    width: 100%;
    padding: 25px 20px 0;
  }
}
</style>
