<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 17:55:41
 * @LastEditTime: 2019-10-23 14:27:48
 * @LastEditors: Please set LastEditors
 -->
### 样式变量
```less
// color variables
// Color variables
@black: #000;
@white: #fff;
@red: #FF614B;
@blue: #1989fa;
@orange: #ff976a;
@orange-dark: #ed6a0c;
@orange-light: #fffbe8;
@green: #4b0;
@gray: #c8c9cc;
@gray-light: #e5e5e5;
@gray-darker: #7d7e80;
@gray-dark: #969799;
@gradientOne: #FF8B57;
@gradientTwo: #FE4744;

// Default colors
@text-color: #323233;
@border-color: #ebedf0;
@active-color: #e8e8e8;
@background-color: #f8f8f8;
@background-color-light: #fafafa;

// Padding
@padding-base: 4px;
@padding-xs: @padding-base * 2;
@padding-sm: @padding-base * 3;
@padding-md: @padding-base * 4;
@padding-lg: @padding-base * 6;
@padding-xl: @padding-base * 8;

// Font Size
@font-size-xs: 10px;
@font-size-sm: 12px;
@font-size-md: 14px;
@font-size-lg: 16px;

// Animation
@animation-duration-base: .3s;
@animation-duration-fast: .2s;

// Button
@button-mini-height: 22px;
@button-mini-min-width: 50px;
@button-mini-font-size: @font-size-xs;
@button-mini-line-height: 20px;
@button-small-height: 30px;
@button-small-font-size: @font-size-sm;
@button-small-min-width: 60px;
@button-small-line-height: 28px;
@button-normal-font-size: @font-size-lg;
@button-large-height: 44px;
@button-large-line-height: 42px;
@button-default-height: 44px;
@button-default-line-height: 42px;
@button-default-font-size: @font-size-lg;
@button-default-color: @text-color;
@button-default-background-color: @white;
@button-default-border-color: @border-color;
@button-primary-color: @white;
@button-primary-background-color: @red;
@button-primary-border-color: @red;
@button-info-color: @white;
@button-info-background-color: @blue;
@button-info-border-color: @blue;
@button-gradient-color:@white;
@button-gradient-background-colorOne: @gradientOne;
@button-gradient-background-colorTwo: @gradientTwo;
@button-danger-color: @white;
@button-danger-background-color: @red;
@button-danger-border-color: @red;
@button-warning-color: @white;
@button-warning-background-color: @orange;
@button-warning-border-color: @orange;
@button-border-width: 1px;
@button-border-radius: 22px;
@button-round-border-radius: 10px;
@button-plain-background-color: @white;
@button-disabled-opacity: .5;

// Cell
@cell-font-size: @font-size-md;
@cell-line-height: 24px;
@cell-vertical-padding: 10px;
@cell-horizontal-padding: @padding-md;
@cell-text-color: @text-color;
@cell-background-color: @white;
@cell-border-color: @border-color;
@cell-active-color: @active-color;
@cell-required-color: @red;
@cell-label-color: @gray-dark;
@cell-label-font-size: @font-size-sm;
@cell-label-line-height: 18px;
@cell-label-margin-top: 3px;
@cell-value-color: @gray-dark;
@cell-icon-size: 16px;
@cell-right-icon-color: @gray-dark;
@cell-large-vertical-padding: @padding-sm;
@cell-large-title-font-size: @font-size-lg;
@cell-large-label-font-size: @font-size-md;

// CellGroup
@cell-group-background-color: @white;
@cell-group-title-color: @gray-dark;
@cell-group-title-padding: @padding-md @padding-md @padding-xs;
@cell-group-title-font-size: @font-size-md;
@cell-group-title-line-height: 16px;

// Checkbox
@checkbox-size: 20px;
@checkbox-border-color: @gray-light;
@checkbox-transition-duration: .2s;
@checkbox-label-margin: 10px;
@checkbox-label-color: @text-color;
@checkbox-checked-icon-color: @blue;
@checkbox-disabled-icon-color: @gray;
@checkbox-disabled-label-color: @gray;
@checkbox-disabled-background-color: @border-color;

// Collapse
@collapse-item-transition-duration: .3s;
@collapse-item-content-padding: 15px;
@collapse-item-content-font-size: 13px;
@collapse-item-content-line-height: 1.5;
@collapse-item-content-text-color: @gray-dark;
@collapse-item-content-background-color: @white;
@collapse-item-title-disabled-color: @gray;

// Dialog
@dialog-width: 85%;
@dialog-font-size: @font-size-lg;
@dialog-transition: @animation-duration-base;
@dialog-border-radius: 4px;
@dialog-background-color: @white;
@dialog-header-font-weight: 500;
@dialog-header-line-height: 24px;
@dialog-header-padding-top: @padding-lg;
@dialog-header-isolated-padding: @padding-lg 0;
@dialog-message-padding: @padding-lg;
@dialog-message-font-size: @font-size-md;
@dialog-message-line-height: 20px;
@dialog-message-max-height: 60vh;
@dialog-has-title-message-text-color: @gray-darker;
@dialog-has-title-message-padding-top: @padding-sm;
@dialog-confirm-button-text-color: @blue;

// Field
@field-label-width: 90px;
@field-input-text-color: @text-color;
@field-input-error-text-color: @red;
@field-input-disabled-text-color: @gray-dark;
@field-placeholder-text-color: @gray-dark;
@field-icon-size: 16px;
@field-clear-icon-size: 16px;
@field-clear-icon-color: @gray;
@field-right-icon-color: @gray-dark;
@field-error-message-color: @red;
@field-error-message-text-color: 12px;
@field-text-area-min-height: 60px;

// Info
@info-size: 16px;
@info-color: @white;
@info-padding: 0 3px;
@info-font-size: 12px;
@info-font-weight: 500;
@info-border-width: 1px;
@info-background-color: @red;
@info-font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;

// Image
@image-placeholder-text-color: @gray-dark;
@image-placeholder-font-size: @font-size-md;
@image-placeholder-background-color: @background-color;

// ImagePreview
@image-preview-index-text-color: @white;
@image-preview-index-font-size: @font-size-md;
@image-preview-overlay-background-color: rgba(0, 0, 0, .9);

// List
@list-icon-size: 16px;
@list-icon-margin-right: 5px;
@list-text-color: @gray-dark;
@list-text-font-size: 13px;
@list-text-line-height: 50px;

// Loading
@loading-text-color: @gray-dark;
@loading-text-font-size: @font-size-md;

// NavBar
@nav-bar-height: 46px;
@nav-bar-background-color: @white;
@nav-bar-arrow-size: 16px;
@nav-bar-icon-color: @blue;
@nav-bar-text-color: @red;
@nav-bar-title-font-size: @font-size-lg;
@nav-bar-title-text-color: @text-color;

// Notify
@notify-padding: 6px 15px;
@notify-font-size: 14px;
@notify-line-height: 20px;

// NumberKeyboard
@number-keyboard-key-height: 54px;
@number-keyboard-key-background: #ebedf0;

// Overlay
@overlay-background-color: rgba(0, 0, 0, 0.7);

// PasswordInput
@password-input-height: 50px;
@password-input-margin: 0 @padding-md;
@password-input-font-size: 20px;
@password-input-border-radius: 6px;
@password-input-background-color: @white;
@password-input-info-color: @gray-dark;
@password-input-info-font-size: @font-size-md;
@password-input-error-info-color: @red;
@password-input-dot-size: 10px;
@password-input-dot-color: @black;

// Picker
@picker-background-color: @white;
@picker-toolbar-height: 44px;
@picker-title-font-size: @font-size-lg;
@picker-action-padding: 0 @padding-md;
@picker-action-font-size: @font-size-md;
@picker-action-text-color: @blue;
@picker-action-active-color: @active-color;
@picker-option-font-size: @font-size-lg;
@picker-option-text-color: @black;
@picker-option-disabled-opacity: .3;

// Popup
@popup-background-color: @white;
@popup-transition: @animation-duration-base ease-out;
@popup-round-border-radius: 12px;

// Radio
@radio-size: 20px;

// Swipe
@swipe-indicator: 6px;

// Switch
@switch-width: 2em;
@switch-height: 1em;
@switch-node-size: 1em;
@switch-node-z-index: 1;
@switch-node-background-color: @white;
@switch-node-box-shadow: 0 3px 1px 0 rgba(0, 0, 0, .05), 0 2px 2px 0 rgba(0, 0, 0, .1), 0 3px 3px 0 rgba(0, 0, 0, .05);
@switch-background-color: @white;
@switch-on-background-color: @blue;
@switch-transition-duration: .3s;
@switch-disabled-opacity: .4;
@switch-border: 1px solid rgba(0, 0, 0, .1);

// SwitchCell
@switch-cell-padding-top: 9px;
@switch-cell-padding-bottom: 9px;

// Tab
@tabs-line-height: 44px;
@tabs-card-height: 30px;

// Toast
@toast-max-width: 70%;
@toast-font-size: 14px;
@toast-text-color: @white;
@toast-line-height: 20px;
@toast-border-radius: 4px;
@toast-background-color: rgba(@text-color, .88);
@toast-icon-size: 48px;
@toast-text-min-width: 96px;
@toast-text-padding: 8px 12px;
@toast-default-padding: 15px;
@toast-default-width: 90px;
@toast-default-min-height: 90px;
@toast-position-top-distance: 50px;
@toast-position-bottom-distance: 50px;

// Uploader
@uploader-size: 80px;
@uploader-icon-size: 24px;
@uploader-icon-color: @gray-dark;
@uploader-text-color: @gray-dark;
@uploader-text-font-size: @font-size-sm;
@uploader-upload-border-color: @gray-light;
@uploader-upload-background-color: @white;
@uploader-delete-color: @white;
@uploader-delete-background-color: rgba(0, 0, 0, .45);
@uploader-file-background-color: @background-color;
@uploader-file-icon-size: 20px;
@uploader-file-icon-color: @gray-darker;
@uploader-file-name-font-size: @font-size-sm;
@uploader-file-name-text-color: @gray-darker;
```