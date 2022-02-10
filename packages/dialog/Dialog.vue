<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-22 16:34:24
 * @LastEditors: Please set LastEditors
 -->
<template>
  <transition name="eva-dialog-bounce">
    <div
      v-show="value"
      :class="[b(), className]"
    >
      <div
        v-if="title"
        v-text="title"
        :class="b('header', { isolated: !message && !$slots.default })"
      />
      <div
        :class="b('content')"
        v-if="message || $slots.default"
      >
        <slot>
          <div
            v-if="message"
            v-html="message"
            :class="b('message', { 'has-title': title, [messageAlign]: messageAlign })"
          />
        </slot>
      </div>
      <div
        class="eva-hairline--top"
        :class="b('footer', { 'buttons': showCancelButton && showConfirmButton })"
      >
        <eva-button
          v-show="showCancelButton"
          size="large"
          :class="b('cancel')"
          :loading="loading.cancel"
          :text="cancelButtonText || $t('cancel')"
          @click="handleAction('cancel')"
        />
        <eva-button
          v-show="showConfirmButton"
          size="large"
          :class="[b('confirm'), { 'eva-hairline--left': showCancelButton && showConfirmButton }]"
          :loading="loading.confirm"
          :text="confirmButtonText || $t('confirm')"
          @click="handleAction('confirm')"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import create from '../utils/create';
import EvaButton from '../button';
import Popup from '../mixins/popup';

export default create({
  name: 'dialog',

  components: {
    EvaButton
  },

  mixins: [Popup],

  props: {
    title: String,
    message: String,
    callback: Function,
    className: [String, Object, Array],
    beforeClose: Function,
    messageAlign: String,
    confirmButtonText: String,
    cancelButtonText: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },

  methods: {
    handleAction(action) {
      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, state => {
          if (state !== false) {
            this.onClose(action);
          }
          this.loading[action] = false;
        });
      } else {
        this.onClose(action);
      }
    },

    onClose(action) {
      this.$emit('input', false);
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
});
</script>
