<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:03:39
 * @LastEditTime: 2019-09-03 14:49:04
 * @LastEditors: Please set LastEditors
 -->
<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <eva-cell-group>
        <eva-field
          v-model="value"
          :placeholder="$t('usernamePlaceholder')"
        />
      </eva-cell-group>
    </demo-block>

    <demo-block :title="$t('title2')">
      <eva-cell-group>
        <eva-field
          v-model="username"
          :label="$t('username')"
          :placeholder="$t('usernamePlaceholder')"
          required
          clearable
          right-icon="question-o"
          @click="click"
          @input="input"
          @focus="focus(`title22`,$event)"
          @blur="blur"
          @clear="clear"
          @click-left-icon="clickLeftIcon"
          @click-right-icon="$toast('question')"
        />

        <eva-field
          v-model="password"
          type="password"
          :label="$t('password')"
          :placeholder="$t('passwordPlaceholder')"
          required
        />
      </eva-cell-group>
    </demo-block>

    <demo-block :title="$t('title3')">
      <eva-cell-group>
        <eva-field
          :value="$t('inputDisabled')"
          :label="$t('username')"
          left-icon="contact"
          disabled
        />
      </eva-cell-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <eva-cell-group>
        <eva-field
          v-model="username2"
          :label="$t('username')"
          :placeholder="$t('usernamePlaceholder')"
          error
        />
        <eva-field
          v-model="phone"
          :label="$t('phone')"
          :placeholder="$t('phonePlaceholder')"
          :error-message="$t('phoneError')"
        />
      </eva-cell-group>
    </demo-block>

    <demo-block :title="$t('title5')">
      <eva-cell-group>
        <eva-field
          v-model="message"
          :label="$t('message')"
          type="textarea"
          :placeholder="$t('messagePlaceholder')"
          rows="1"
          autosize
        />
      </eva-cell-group>
    </demo-block>

    <demo-block :title="$t('title6')">
      <eva-cell-group>
        <eva-field
          center
          clearable
          v-model="sms"
          :label="$t('sms')"
          :placeholder="$t('smsPlaceholder')"
        >
          <template #button>
            <eva-button
              size="small"
              type="primary"
            >
              {{ $t('sendSMS') }}
            </eva-button>
          </template>
        </eva-field>
      </eva-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '自定义类型',
      title3: '禁用输入框',
      title4: '错误提示',
      title5: '高度自适应',
      title6: '插入按钮',
      message: '留言',
      phone: '手机号',
      sms: '短信验证码',
      sendSMS: '发送验证码',
      smsPlaceholder: '请输入短信验证码',
      phonePlaceholder: '请输入手机号',
      messagePlaceholder: '请输入留言',
      inputDisabled: '输入框已禁用',
      phoneError: '手机号格式错误'
    },
    'en-US': {
      title2: 'Custom type',
      title3: 'Disabled',
      title4: 'Error info',
      title5: 'Auto resize',
      title6: 'Insert button',
      message: 'Message',
      phone: 'Phone',
      sms: 'SMS',
      sendSMS: 'Send SMS',
      smsPlaceholder: 'SMS',
      phonePlaceholder: 'Phone',
      messagePlaceholder: 'Message',
      inputDisabled: 'Disabled',
      phoneError: 'Invalid phone'
    }
  },

  data() {
    return {
      sms: '',
      value: '',
      password: '',
      username: '',
      username2: '',
      message: '',
      phone: '1365577'
    };
  },

  methods: {
    input(value) {
      console.log('输入框内容变化'+value);
    },
    focus(message,event) {
      console.log(message,event);
    },
    blur(event) {
      console.log('输入框失去焦点'+event);
    },
    clear(event) {
      console.log('点击清除按钮'+event);
    },
    click(event) {
      console.log('点击时触发'+event);
    },
    clickLeftIcon(event) {
      console.log('点击左侧图标时触发'+event);
    },
    clickRightIcon(event) {
      console.log('点击右侧图标时触发'+event);
    },
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-field {
  padding-bottom: 30px;

  .eva-field__right-icon .van-icon {
    color: @blue;
  }
}
</style>
