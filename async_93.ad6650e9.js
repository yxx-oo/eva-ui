(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{213:function(t,e,o){"use strict";o.r(e);var n={i18n:{"zh-CN":{city:"城市",title2:"禁用选项",title3:"展示顶部栏",title4:"多列联动",defaultIndex:"默认选中项",withPopup:"搭配弹出层使用",chooseCity:"选择城市",column1:["杭州","宁波","温州","嘉兴","湖州"],column2:[{text:"杭州",disabled:!0},{text:"宁波"},{text:"温州"}],column3:{"浙江":["杭州","宁波","温州","嘉兴","湖州"],"福建":["福州","厦门","莆田","三明","泉州"]},toastContent:function(t,e){return"当前值："+t+", 当前索引："+e}},"en-US":{city:"City",title2:"Disable Option",title3:"Show Toolbar",title4:"Multi Columns",defaultIndex:"Default Index",withPopup:"With Popup",chooseCity:"Choose City",column1:["Delaware","Florida","Georqia","Indiana","Maine"],column2:[{text:"Delaware",disabled:!0},{text:"Florida"},{text:"Georqia"}],column3:{Group1:["Delaware","Florida","Georqia","Indiana","Maine"],Group2:["Alabama","Kansas","Louisiana","Texas"]},toastContent:function(t,e){return"Value: "+t+", Index："+e}}},data:function(){return{showPicker:!1,fieldValue:""}},computed:{columns:function(){var t=this.$t("column3");return[{values:Object.keys(t),className:"column1"},{values:t[Object.keys(t)[0]],className:"column2",defaultIndex:2}]}},methods:{onChange1:function(t,e,o){this.$toast(this.$t("toastContent",e,o))},onChange2:function(t,e){t.setColumnValues(1,this.$t("column3")[e[0]])},onConfirm:function(t,e){this.$toast(this.$t("toastContent",t,e))},onCancel:function(){this.$toast(this.$t("cancel"))},onClickField:function(){this.showPicker=!0},onConfirm2:function(t){this.showPicker=!1,this.fieldValue=t},onCancel2:function(){this.showPicker=!1}}},l=o(0),a=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("demo-section",[o("demo-block",{attrs:{title:t.$t("basicUsage")}},[o("eva-picker",{attrs:{columns:t.$t("column1")},on:{change:t.onChange1}})],1),o("demo-block",{attrs:{title:t.$t("defaultIndex")}},[o("eva-picker",{attrs:{columns:t.$t("column1"),"default-index":2},on:{change:t.onChange1}})],1),o("demo-block",{attrs:{title:t.$t("title3")}},[o("eva-picker",{attrs:{"show-toolbar":"",title:t.$t("title"),columns:t.$t("column1")},on:{cancel:t.onCancel,confirm:t.onConfirm}})],1),o("demo-block",{attrs:{title:t.$t("withPopup")}},[o("eva-field",{attrs:{readonly:"",clickable:"",label:t.$t("city"),value:t.fieldValue,placeholder:t.$t("chooseCity")},on:{click:t.onClickField}}),o("eva-popup",{attrs:{position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[o("eva-picker",{attrs:{"show-toolbar":"",columns:t.$t("column1")},on:{cancel:t.onCancel2,confirm:t.onConfirm2}})],1)],1),o("demo-block",{attrs:{title:t.$t("title2")}},[o("eva-picker",{attrs:{columns:t.$t("column2")}})],1),o("demo-block",{attrs:{title:t.$t("title4")}},[o("eva-picker",{attrs:{columns:t.columns},on:{change:t.onChange2}})],1),o("demo-block",{attrs:{title:t.$t("loadingStatus")}},[o("eva-picker",{attrs:{loading:"",columns:t.columns}})],1)],1)},[],!1,null,null,null);e.default=a.exports}}]);