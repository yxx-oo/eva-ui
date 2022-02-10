<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-29 19:41:49
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-swipe
        :autoplay="3000"
        indicator-color="white"
      >
        <eva-swipe-item>1</eva-swipe-item>
        <eva-swipe-item>2</eva-swipe-item>
        <eva-swipe-item>3</eva-swipe-item>
        <eva-swipe-item>4</eva-swipe-item>
      </eva-swipe>
    </demo-block>

    <demo-block :title="$t('title2')">
      <eva-swipe :autoplay="3000">
        <eva-swipe-item
          v-for="(image, index) in images"
          :key="index"
        >
          <img v-lazy="image"/>
        </eva-swipe-item>
      </eva-swipe>
    </demo-block>

    <demo-block :title="$t('title3')">
      <eva-swipe
        indicator-color="white"
        @change="onChange"
      >
        <eva-swipe-item>1</eva-swipe-item>
        <eva-swipe-item>2</eva-swipe-item>
        <eva-swipe-item>3</eva-swipe-item>
        <eva-swipe-item>4</eva-swipe-item>
      </eva-swipe>
    </demo-block>

    <demo-block :title="$t('title4')">
      <eva-swipe
        vertical
        :autoplay="3000"
        indicator-color="white"
        class="demo-swipe--vertical"
      >
        <eva-swipe-item>1</eva-swipe-item>
        <eva-swipe-item>2</eva-swipe-item>
        <eva-swipe-item>3</eva-swipe-item>
        <eva-swipe-item>4</eva-swipe-item>
      </eva-swipe>
    </demo-block>

    <demo-block :title="$t('title5')">
      <eva-swipe
        :autoplay="3000"
        :width="300"
        :loop="false"
        indicator-color="white"
      >
        <eva-swipe-item>1</eva-swipe-item>
        <eva-swipe-item>2</eva-swipe-item>
        <eva-swipe-item>3</eva-swipe-item>
        <eva-swipe-item>4</eva-swipe-item>
      </eva-swipe>
    </demo-block>

    <demo-block :title="$t('title6')">
      <eva-swipe @change="onChange">
        <eva-swipe-item>1</eva-swipe-item>
        <eva-swipe-item>2</eva-swipe-item>
        <eva-swipe-item>3</eva-swipe-item>
        <eva-swipe-item>4</eva-swipe-item>

        <div
          class="custom-indicator"
          slot="indicator"
        >
          {{ current + 1 }}/4
        </div>
      </eva-swipe>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '图片懒加载',
      title3: '监听 change 事件',
      title4: '纵向滚动',
      title5: '设置滑块大小',
      title6: '自定义指示器',
      message: '当前 Swipe 索引：'
    },
    'en-US': {
      title2: 'Image Lazyload',
      title3: 'Change Event',
      title4: 'Vertical Scrolling',
      title5: 'Set Swiper Item Size',
      title6: 'Custom indicator',
      message: 'Current Swipe index:'
    }
  },

  data() {
    return {
      current: 0,
      images: [
        (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery1.jpg',
        (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery2.jpg',
        (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/scenery3.jpg',
        (process.env.NODE_ENV === 'production' ? 'http://10.59.98.187:8888/eva/' : '/docs/src/') + 'asserts/EVA.png'
      ]
    };
  },

  methods: {
    onChange(index) {
      this.current = index;
      this.$toast(this.$t('message') + index);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-swipe {
  padding-bottom: 30px;

  .eva-swipe {
    cursor: pointer;

    &-item {
      color: @white;
      font-size: 20px;
      text-align: center;
      line-height: 150px;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      width: 100%;
      height: 240px;
      display: block;
      padding: 30px 60px;
      box-sizing: border-box;
      background-color: @white;
      pointer-events: none;
    }
  }

  &--vertical {
    height: 200px;

    .eva-swipe-item {
      line-height: 200px;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: @white;
    background: rgba(0, 0, 0, .1);
  }
}
</style>
