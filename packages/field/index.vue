<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-08-28 14:36:19
 * @LastEditors: Please set LastEditors
 -->
<template>
  <cell
    :icon="leftIcon"
    :title="label"
    :center="center"
    :border="border"
    :is-link="isLink"
    :required="required"
    :clickable="clickable"
    :titleClass="[b('label', labelAlign), labelClass]"
    :titleStyle="labelStyle"
    :arrowDirection="arrowDirection"
    :class="b({
      error,
      disabled: $attrs.disabled,
      [`label-${labelAlign}`]: labelAlign,
      'min-height': type === 'textarea' && !autosize
    })"
    :scopedSlots="scopedSlots"
    @click="onClick"
  >
    <!-- <div v-if="$slots.leftIcon || leftIcon" 
      :class="b('left-icon')"
      @click="onClickLeftIcon"
    >
      <slot
        name="left-icon"
        slot="icon"
      />
    </div> -->
    <slot
      name="label"
      slot="title"
    />
    <div :class="b('body')">
      <textarea
        v-if="type === 'textarea'"
        v-bind="$attrs"
        v-on="listeners"
        ref="input"
        :class="b('control', inputAlign)"
        :value="value"
        :readonly="readonly"
      />
      <input
        v-else
        v-bind="$attrs"
        v-on="listeners"
        ref="input"
        :class="b('control', inputAlign)"
        :type="type"
        :value="value"
        :readonly="readonly"
      />
      <eva-icon
        v-if="showClear"
        name="clear"
        :class="b('clear')"
        @touchstart.prevent="onClear"
      />
      <div
        v-if="$slots.rightIcon || rightIcon"
        :class="b('right-icon')"
        @click="onClickRightIcon"
      >
        <slot name="right-icon">
          <eva-icon :name="rightIcon" />
        </slot>
      </div>
      <div
        v-if="$slots.button"
        :class="b('button')"
      >
        <slot name="button" />
      </div>
    </div>
    <div
      v-if="errorMessage"
      v-text="errorMessage"
      :class="b('error-message')"
    />
  </cell>
</template>

<script>
import create from '../utils/create';
import CellMixin from '../mixins/cell';
import { resetScroll } from '../utils/dom/reset-scroll';
import { preventDefault } from '../utils/dom/event';
import { isObj, addUnit } from '../utils';

export default create({
  name: 'field',

  inheritAttrs: false,

  mixins: [CellMixin],

  props: {
    error: Boolean,
    leftIcon: String,
    rightIcon: String,
    readonly: Boolean,
    clearable: Boolean,
    labelClass: null,
    labelWidth: [Number, String],
    labelAlign: String,
    inputAlign: String,
    autosize: [Boolean, Object],
    errorMessage: String,
    errorMessageAlign: String,
    type: {
      type: String,
      default: 'text'
    }
  },

  data() {
    return {
      focused: false,
    };
  },

  watch: {
    value() {
      this.$nextTick(this.adjustSize);
    }
  },

  mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },

  computed: {
    showClear() {
      return this.clearable && this.focused && this.value !== '' && this.isDef(this.value) && !this.readonly;
    },

    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      };
    },

    labelStyle() {
      const { labelWidth } = this;
      if (labelWidth) {
        return { width: addUnit(labelWidth) };
      }
    },

    scopedSlots() {
      const scopedSlots = {
        icon: this.renderLeftIcon
      };
      if (this.$slots.label) {
        scopedSlots.title = () => slots('label');
      }
      return scopedSlots;
    }
  },

  methods: {
    focus() {
      if (this.$refs.inpu) {
        this.$refs.input.focus();
      }
    },

    blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },

    // native maxlength not work when type = number
    format(target = this.$refs.input) {
      if (!target) {
        return;
      }
      let { value } = target;
      const { maxlength } = this.$attrs;

      if (this.type === 'number' && this.isDef(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },

    onInput(event) {
      if (event.target.composing) {
        return;
      }
      
      this.$emit('input', this.format(event.target));
    },

    onFocus(event) {
      this.focused = true;
      this.$emit('focus', event);

      // hack for safari
      /* istanbul ignore if */
      if (this.readonly) {
        this.blur();
      }
    },

    onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      resetScroll();
    },

    onClick(event) {
      this.$emit('click', event);
    },

    onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },

    onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },
    onClear() {
      preventDefault(event);
      this.$emit('input', '');
      this.$emit('clear', event);
    },

    onKeypress(event) {
      if (this.type === 'number') {
        const { keyCode } = event;
        const allowPoint = String(this.value).indexOf('.') === -1;
        const isValidKey = (keyCode >= 48 && keyCode <= 57) || (keyCode === 46 && allowPoint) || keyCode === 45;
        if (!isValidKey) {
          event.preventDefault();
        }
      }

      // trigger blur after click keyboard search button
      /* istanbul ignore next */
      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },

    adjustSize() {
      const { input } = this.$refs;
      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';

      let height = input.scrollHeight;
      if (isObj(this.autosize)) {
        const { maxHeight, minHeight } = this.autosize;
        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    }
  }
});
</script>
