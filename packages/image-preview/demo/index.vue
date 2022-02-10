<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-29 19:41:25
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-button
        type="primary"
        @click="showImagePreview"
      >
        {{ $t('button1') }}
      </eva-button>
    </demo-block>

    <demo-block :title="$t('button2')">
      <eva-button
        type="primary"
        @click="showImagePreview(1)"
      >
        {{ $t('button2') }}
      </eva-button>
    </demo-block>

    <demo-block :title="$t('button3')">
      <eva-button
        type="primary"
        @click="showImagePreview(0, 1000)"
      >
        {{ $t('button3') }}
      </eva-button>
    </demo-block>

    <demo-block :title="$t('componentCall')">
      <eva-button
        type="primary"
        @click="componentCall"
      >
        {{ $t('componentCall') }}
      </eva-button>
      <eva-image-preview
        v-model="show"
        :images="images"
        :swipe-duration="300"
        @change="onChange"
      >
        <template #index>{{ $t('index', index) }}</template>
      </eva-image-preview>
    </demo-block>
  </demo-section>
</template>

<script>
import ImagePreview from '..';

const images = [
  (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery1.jpg',
  (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery2.jpg',
  (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery3.jpg',
  (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/EVA.png'
];

export default {
  i18n: {
    'zh-CN': {
      button1: '预览图片',
      button2: '指定初始位置',
      button3: '异步关闭',
      componentCall: '组件调用',
      index: index => `第${index + 1}页`
    },
    'en-US': {
      button1: 'Show Images',
      button2: 'Custom Start Position',
      button3: 'Async Close',
      componentCall: 'Component Call',
      index: index => `Page: ${index}`
    }
  },

  data() {
    return {
      show: false,
      images,
      index: 0
    };
  },

  methods: {
    componentCall() {
      this.show = true;
    },

    onChange(index) {
      this.index = index;
    },

    showImagePreview(position, timer) {
      const instance = ImagePreview({
        images,
        swipeDuration: 300,
        asyncClose: !!timer,
        closeOnPopstate: true,
        startPosition: typeof position === 'number' ? position : 0
      });

      if (timer) {
        setTimeout(() => {
          instance.close();
        }, timer);
      }
    }
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-image-preview {
  background-color: @white;

  .eva-button {
    margin-left: @padding-md;
  }
}

.eva-image-preview {
  img {
    -webkit-user-drag: none;
  }
}
</style>
