(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-orders-orders"],{"73ce":function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{list:[{name:"全部订单"},{name:"待付款"},{name:"待服务"},{name:"服务中"},{name:"已完成"}],selectListIndex:0,dataList:10,loadMoreText:"加载中...",showLoadMore:!1,scrollTop:0,iconStyle:{color:"#FFFFFF"}}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onUnload:function(){this.loadMoreText="加载更多",this.showLoadMore=!1},onLoad:function(){this.getData()},methods:{click:function(t){this.selectListIndex=t.index,uni.pageScrollTo({scrollTop:0,duration:300}),this.dataList=10},getData:function(){this.dataList=10},toOrderPage:function(t){uni.navigateTo({url:"/pages/orderInfo/orderInfo?id="+t})},cancelFn:function(t){console.log(t)}},onReachBottom:function(){var t=this;this.dataList>=50?this.loadMoreText="没有更多数据了":(this.showLoadMore=!0,setTimeout((function(){t.dataList=t.dataList+10}),300))}};i.default=a},7918:function(t,i,e){var a=e("a920");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("71d2cf54",a,!0,{sourceMap:!1,shadowMode:!1})},a920:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-0c42a33d]{background-color:#f5f8f9}body.?%PAGE?%[data-v-0c42a33d]{background-color:#f5f8f9}',""]),t.exports=i},bd04:function(t,i,e){"use strict";e.r(i);var a=e("73ce"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},d040:function(t,i,e){"use strict";e.r(i);var a=e("d052"),n=e("bd04");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("fe43");var o=e("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"0c42a33d",null,!1,a["a"],void 0);i["default"]=r.exports},d052:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={uvSticky:e("c0cb").default,uvTabs:e("cac7").default,uvButton:e("cf50").default,uvBackTop:e("df47").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"ordersPage"},[a("uv-sticky",{attrs:{bgColor:"#f5f8f9"}},[a("uv-tabs",{attrs:{scrollable:!1,lineWidth:"50",lineHeight:"5",lineColor:"linear-gradient(to right, #04B2BD , #FFFFFF)",activeStyle:{color:"#383838",fontWeight:"bold",transform:"scale(1.05)"},inactiveStyle:{color:"#ADADAD",transform:"scale(1)"},itemStyle:"padding-left: 5px; padding-right: 5px; height: 50px;",list:t.list,current:t.selectListIndex},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.click.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"ordersList m-2"},[t._l(t.dataList,(function(i,n){return a("v-uni-view",{key:n,staticClass:"ordersItem d-flex flex-column bg-white p-2 mb-2",staticStyle:{"border-radius":"18px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toOrderPage(n)}}},[a("v-uni-view",{staticClass:"giTop d-flex j-sb mb-2"},[a("v-uni-view",{staticStyle:{color:"#383838","font-size":"32upx"}},[t._v("2023年10月1日02:26")]),a("v-uni-view",{staticStyle:{color:"#04B2BD"}},[t._v("待服务")])],1),a("v-uni-view",{staticClass:"giCont d-flex"},[a("v-uni-view",{staticClass:"imageBox mr-2",staticStyle:{width:"250upx"}},[a("v-uni-image",{staticStyle:{width:"250upx"},attrs:{src:e("1539"),mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"giInfoBox d-flex flex-column flex-1"},[a("v-uni-view",{staticClass:"giTitle line-h-md",staticStyle:{"font-size":"32upx"}},[t._v("PICC护理-"+t._s(n))]),a("v-uni-view",{staticClass:"priceDetail row line-h-md"},[a("v-uni-view",{staticClass:"priceItem span-10 row"},[a("v-uni-view",{staticClass:"piName font-13 mr-1",staticStyle:{color:"#ADADAD"}},[t._v("服务费")]),a("v-uni-view",{staticClass:"piValue font-13"},[t._v("¥100")])],1),a("v-uni-view",{staticClass:"priceItem span-10 row"},[a("v-uni-view",{staticClass:"piName font-13 mr-1",staticStyle:{color:"#ADADAD"}},[t._v("交通费")]),a("v-uni-view",{staticClass:"piValue font-13"},[t._v("¥100")])],1),a("v-uni-view",{staticClass:"priceItem span-10 row"},[a("v-uni-view",{staticClass:"piName font-13 mr-1",staticStyle:{color:"#ADADAD"}},[t._v("材料费")]),a("v-uni-view",{staticClass:"piValue font-13"},[t._v("¥100")])],1),a("v-uni-view",{staticClass:"priceItem span-10 row"},[a("v-uni-view",{staticClass:"piName font-13 mr-1",staticStyle:{color:"#ADADAD"}},[t._v("续买服务")]),a("v-uni-view",{staticClass:"piValue font-13"},[t._v("¥100")])],1)],1),a("v-uni-view",{staticClass:"priceTotal d-flex line-h-md a-center",staticStyle:{"font-size":"34upx"}},[a("v-uni-view",{staticClass:"mr-1",staticStyle:{"font-size":"34upx"}},[t._v("实付")]),a("v-uni-view",{staticClass:"text-hiroPrice"},[t._v("¥100")])],1)],1)],1),a("v-uni-view",{staticClass:"d-flex j-end mt-1 mb-1 mr-1"},[a("uv-button",{staticClass:"mr-2",attrs:{size:"small",shape:"circle",text:"取消订单"},nativeOn:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.cancelFn(n)}}}),a("uv-button",{attrs:{"custom-style":{paddingRight:"18px",paddingLeft:"18px"},size:"small",color:"linear-gradient(to right, #05B3BD, #1ECDB7)",shape:"circle",text:"去支付"}})],1)],1)})),t.showLoadMore?a("v-uni-view",{staticClass:"uni-loadmore"},[t._v(t._s(t.loadMoreText))]):t._e(),a("uv-back-top",{attrs:{"scroll-top":t.scrollTop,iconStyle:t.iconStyle,customStyle:"background:#04b2bd"}})],2)],1)},s=[]},fe43:function(t,i,e){"use strict";var a=e("7918"),n=e.n(a);n.a}}]);