(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{114:function(o,t,n){"use strict";var e=n(75);n.n(e).a},115:function(o,t,n){(o.exports=n(23)(!1)).push([o.i,".demo-popup .eva-button {\n  margin: 10px 0 10px 15px;\n}\n.demo-popup .eva-popup {\n  width: 60%;\n  padding: 20px;\n  box-sizing: border-box;\n}\n.demo-popup .eva-popup--bottom {\n  width: 100%;\n  padding: 0;\n  border-radius: 0;\n}\n.demo-popup .eva-popup .eva-tabs__content {\n  height: 156px;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n.demo-popup .eva-popup .eva-tab__pane:not(:first-child) {\n  padding: 10px;\n  line-height: 1.4;\n  color: #7d7e80;\n}\n.demo-popup .eva-popup--top {\n  color: #fff;\n  width: 100%;\n  border-radius: 0;\n  line-height: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.demo-popup .eva-popup--left,\n.demo-popup .eva-popup--right {\n  width: 100%;\n  height: 100%;\n}\n",""])},148:function(o,t,n){"use strict";n.r(t);var e={i18n:{"zh-CN":{position:"弹出位置",button1:"弹出 Popup",button2:"底部弹出",button3:"弹出 Dialog",button4:"顶部弹出",button5:"右侧弹出",button6:"关闭弹层",columns:["杭州","宁波","温州","嘉兴","湖州"]},"en-US":{position:"Position",button1:"Show Popup",button2:"From Bottom",button3:"Show Dialog",button4:"From Top",button5:"From Right",button6:"Close Popup",columns:["Delaware","Florida","Georqia","Indiana","Maine"]}},data:function(){return{show1:!1,show2:!1,show3:!1,show4:!1,show5:!1}},watch:{show3:function(o){var t=this;o&&setTimeout(function(){t.show3=!1},2e3)}},methods:{showDialog:function(){this.$dialog.confirm({title:"confirm标题",message:"弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。"})}}},i=(n(114),n(0)),s=Object(i.a)(e,function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("demo-section",[n("demo-block",{attrs:{title:o.$t("basicUsage")}},[n("eva-button",{on:{click:function(t){o.show1=!0}}},[o._v(o._s(o.$t("button1")))]),n("eva-popup",{model:{value:o.show1,callback:function(t){o.show1=t},expression:"show1"}},[o._v(o._s(o.$t("content")))])],1),n("demo-block",{attrs:{title:o.$t("position")}},[n("eva-button",{on:{click:function(t){o.show2=!0}}},[o._v(o._s(o.$t("button2")))]),n("eva-popup",{attrs:{position:"bottom"},model:{value:o.show2,callback:function(t){o.show2=t},expression:"show2"}},[n("eva-picker",{attrs:{"show-toolbar":"",columns:o.$t("columns")},on:{confirm:function(t){o.show2=!1},cancel:function(t){o.show2=!1}}})],1),n("eva-button",{on:{click:function(t){o.show3=!0}}},[o._v(o._s(o.$t("button4")))]),n("eva-popup",{attrs:{position:"top",overlay:!1},model:{value:o.show3,callback:function(t){o.show3=t},expression:"show3"}},[o._v("\n      "+o._s(o.$t("content"))+"\n    ")]),n("eva-button",{on:{click:function(t){o.show4=!0}}},[o._v(o._s(o.$t("button5")))]),n("eva-popup",{attrs:{position:"right"},model:{value:o.show4,callback:function(t){o.show4=t},expression:"show4"}},[n("eva-button",{on:{click:function(t){o.show4=!1}}},[o._v(o._s(o.$t("button6")))]),n("eva-button",{on:{click:function(t){o.show5=!0}}},[o._v(o._s(o.$t("button5")))]),n("eva-popup",{attrs:{position:"right"},model:{value:o.show5,callback:function(t){o.show5=t},expression:"show5"}},[n("eva-button",{on:{click:function(t){o.show5=!1}}},[o._v(o._s(o.$t("button6")))])],1)],1)],1)],1)},[],!1,null,null,null);t.default=s.exports},75:function(o,t,n){var e=n(115);"string"==typeof e&&(e=[[o.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(24)(e,i);e.locals&&(o.exports=e.locals)}}]);