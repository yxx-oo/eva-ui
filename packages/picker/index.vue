<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-10-29 11:03:32
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div :class="b()">
    <template v-if="toolbarPosition === 'top'">
      <div
        v-if="showToolbar"
        :class="[BORDER_TOP_BOTTOM,b('toolbar')]"
      >
        <slot>
          <div
            v-text="cancelButtonText || $t('cancel')"
            :class="b('cancel')"
            @click="emit('cancel')"
          />
          <slot name="title">
            <div
              v-if="title"
              v-text="title"
              :class="['eva-ellipsis',b('title')]"
            />
          </slot>
          <div
            v-text="confirmButtonText || $t('confirm')"
            :class="b('confirm')"
            @click="onConfirm"
          />
        </slot>
      </div>
    </template>
    <template
      v-if="loading"
    >
      <loading :class="b('loading')" />
    </template>
    <div
      :class="b('columns')"
      :style="columnsStyle"
      @touchmove="preventDefault"
    >
      <picker-column
        v-for="(item, index) in (simple ? [columns] : columns)"
        :key="index"
        :allow-html="allowHtml"
        :value-key="valueKey"
        :initial-options="simple ? item : item.values"
        :class-name="item.className"
        :default-index="item.defaultIndex || defaultIndex"
        :swipe-duration="swipeDuration"
        :item-height="itemHeight"
        :visible-item-count="visibleItemCount"
        @change="onChange(index)"
      />
      <div :class="b('mask')" :style="maskStyle" />
      <div :class="[BORDER_UNSET_TOP_BOTTOM,b('frame')]" :style="frameStyle" />
      <template v-if="toolbarPosition === 'bottom'">
        <div
          v-if="showToolbar"
          :class="[BORDER_TOP_BOTTOM,b('toolbar')]"
        >
          <slot>
            <div
              v-text="cancelButtonText || $t('cancel')"
              :class="b('cancel')"
              @click="emit('cancel')"
            />
            <slot name="title">
              <div
                v-if="title"
                v-text="title"
                :class="['eva-ellipsis',b('title')]"
              />
            </slot>
            <div
              v-text="confirmButtonText || $t('confirm')"
              :class="b('confirm')"
              @click="emit('confirm')"
            />
          </slot>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

import create from '../utils/create';
import PickerColumn from './PickerColumn';
import deepClone from '../utils/deep-clone';
import PickerMixin from '../mixins/picker';
import { preventDefault } from '../utils/dom/event';
import { BORDER_UNSET_TOP_BOTTOM, BORDER_TOP_BOTTOM } from '../utils/constant';

export default create({
  name: 'picker',

  mixins: [PickerMixin],

  components: {
    PickerColumn
  },

  props: {
    defaultIndex: {
      type: Number,
      default: 0
    },
    columns: {
      type: Array,
      default: () => []
    },
    toolbarPosition: {
      type: String,
      default: 'top'
    },
    valueKey: {
      type: String,
      default: 'text'
    }
  },

  data() {
    return {
      children: [],
      BORDER_TOP_BOTTOM,
      BORDER_UNSET_TOP_BOTTOM,
      preventDefault
    };
  },

  computed: {
    frameStyle() {
      return {
        height: `${this.itemHeight}px`
      };
    },

    wrapHeight() {
      return this.itemHeight * this.visibleItemCount;
    },

    columnsStyle() {
      return {
        height: `${this.wrapHeight}px`
      };
    },

    simple() {
      return this.columns.length && !this.columns[0].values;
    },

    maskStyle() {
      return { backgroundSize: `100% ${(this.wrapHeight - this.itemHeight) / 2}px` };
    },
  },

  watch: {
    columns() {
      this.setColumns();
    }
  },

  methods: {
    setColumns() {
      const columns = this.simple ? [{ values: this.columns }] : this.columns;
      columns.forEach((column, index) => {
        this.setColumnValues(index, deepClone(column.values));
      });
    },

    emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },

    onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },

    // get column instance by index
    getColumn(index) {
      return this.children[index];
    },

    // get column value by index
    getColumnValue(index) {
      const column = this.getColumn(index);
      return column && column.getValue();
    },

    // set column value by index
    setColumnValue(index, value) {
      const column = this.getColumn(index);
      column && column.setValue(value);
    },

    // get column option index by column index
    getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },

    // set column option index by column index
    setColumnIndex(columnIndex, optionIndex) {
      const column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },

    // get options of column by index
    getColumnValues(index) {
      return (this.children[index] || {}).options;
    },

    // set options of column by index
    setColumnValues(index, options) {
      const column = this.children[index];
      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },

    // get values of all columns
    getValues() {
      return this.children.map(child => child.getValue());
    },

    // set values of all columns
    setValues(values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value);
      });
    },

    // get indexes of all columns
    getIndexes() {
      return this.children.map(child => child.currentIndex);
    },

    // set indexes of all columns
    setIndexes(indexes) {
      indexes.forEach((optionIndex, columnIndex) => {
        this.setColumnIndex(columnIndex, optionIndex);
      });
    },

    onConfirm() {
      this.$children.map(child => child.stopMomentum());
      this.emit('confirm');
    },

    onCancel() {
      this.emit('cancel');
    }
  }
});
</script>
