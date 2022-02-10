<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 14:14:33
 * @LastEditTime: 2019-09-04 18:58:02
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('ellipsis')">
      <div class="eva-ellipsis">{{ $t('text') }}</div>
    </demo-block>

    <demo-block :title="$t('hairline')">
      <div class="eva-hairline--top" />
    </demo-block>

    <demo-block :title="$t('animation')">
      <eva-cell
        is-link
        title="Fade"
        @click="animate('eva-fade')"
      />
      <eva-cell
        is-link
        title="Slide Up"
        @click="animate('eva-slide-up')"
      />
      <eva-cell
        is-link
        title="Slide Down"
        @click="animate('eva-slide-down')"
      />
      <eva-cell
        is-link
        title="Slide Left"
        @click="animate('eva-slide-left')"
      />
      <eva-cell
        is-link
        title="Slide Right"
        @click="animate('eva-slide-right')"
      />
    </demo-block>

    <transition :name="transitionName">
      <div
        v-show="show"
        class="demo-animate-block"
      />
    </transition>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      hairline: '1px 边框',
      ellipsis: '文字省略',
      animation: '动画',
      toggle: '切换动画',
      text: '这是一段宽度限制 250px 的文字，后面的内容会省略'
    },
    'en-US': {
      hairline: 'Hairline',
      ellipsis: 'Text Ellipsis',
      animation: 'Animation',
      toggle: 'Switch animation',
      text: 'This is a paragraph of 250px width limit, the back will be omitted.'
    }
  },

  data() {
    return {
      show: false,
      transitionName: ''
    };
  },

  methods: {
    animate(transitionName) {
      this.show = true;
      this.transitionName = transitionName;

      setTimeout(() => {
        this.show = false;
      }, 500);
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-style {
  .eva-ellipsis {
    font-size: 13px;
    margin-left: 15px;
    max-width: 250px;
  }

  .eva-hairline--top {
    height: 30px;
    background-color: @white;

    &::after {
      top: 5px;
    }
  }

  .demo-animate-block {
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    position: fixed;
    border-radius: 3px;
    margin: -50px 0 0 -50px;
    background-color: @blue;
  }
}
</style>
