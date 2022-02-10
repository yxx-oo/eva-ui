<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-15 18:59:54
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-button @click="show1 = true">{{ $t('button1') }}</eva-button>
      <eva-popup v-model="show1">{{ $t('content') }}</eva-popup>
    </demo-block>

    <demo-block :title="$t('position')">
      <eva-button @click="show2 = true;">{{ $t('button2') }}</eva-button>

      <eva-popup
        v-model="show2"
        position="bottom"
      >
        <eva-picker
          show-toolbar
          :columns="$t('columns')"
          @confirm="show2 = false"
          @cancel="show2 = false"
        />
      </eva-popup>

      <eva-button @click="show3 = true">{{ $t('button4') }}</eva-button>
      <eva-popup
        v-model="show3"
        position="top"
        :overlay="false"
      >
        {{ $t('content') }}
      </eva-popup>

      <eva-button @click="show4 = true">{{ $t('button5') }}</eva-button>
      <eva-popup
        v-model="show4"
        position="right"
      >
        <eva-button @click="show4 = false">{{ $t('button6') }}</eva-button>
        <eva-button @click="show5 = true">{{ $t('button5') }}</eva-button>
        <eva-popup
          v-model="show5"
          position="right"
        >
          <eva-button @click="show5 = false">{{ $t('button6') }}</eva-button>
        </eva-popup>
      </eva-popup>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      position: '弹出位置',
      button1: '弹出 Popup',
      button2: '底部弹出',
      button3: '弹出 Dialog',
      button4: '顶部弹出',
      button5: '右侧弹出',
      button6: '关闭弹层',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    },
    'en-US': {
      position: 'Position',
      button1: 'Show Popup',
      button2: 'From Bottom',
      button3: 'Show Dialog',
      button4: 'From Top',
      button5: 'From Right',
      button6: 'Close Popup',
      columns: ['Delaware', 'Florida', 'Georqia', 'Indiana', 'Maine']
    }
  },

  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    };
  },

  watch: {
    show3(val) {
      if (val) {
        setTimeout(() => {
          this.show3 = false;
        }, 2000);
      }
    }
  },

  methods: {
    showDialog() {
      this.$dialog.confirm({
        title: 'confirm标题',
        message: '弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。'
      });
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-popup {
  .eva-button {
    margin: 10px 0 10px 15px;
  }

  .eva-popup {
    width: 60%;
    padding: 20px;
    box-sizing: border-box;

    &--bottom {
      width: 100%;
      padding: 0;
      border-radius: 0;
    }

    .eva-tabs__content {
      height: 156px;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }

    .eva-tab__pane:not(:first-child) {
      padding: 10px;
      line-height: 1.4;
      color: @gray-darker;
    }

    &--top {
      color: @white;
      width: 100%;
      border-radius: 0;
      line-height: 20px;
      background-color: rgba(0, 0, 0, 0.8);
    }

    &--left,
    &--right {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
