(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-teamList-teamList"],{"0615":function(t,n,a){var e=a("e0db");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("d4d9ddb8",e,!0,{sourceMap:!1,shadowMode:!1})},"2deb":function(t,n,a){"use strict";var e=a("0615"),i=a.n(e);i.a},"8c55":function(t,n,a){"use strict";a.r(n);var e=a("abb3"),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},"8cc1":function(t,n,a){"use strict";a.r(n);var e=a("944a4"),i=a("8c55");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("2deb");var s=a("f0c5"),r=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"ce96fdfa",null,!1,e["a"],void 0);n["default"]=r.exports},"944a4":function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"teamList"},[t._l(t.list,(function(n,e){return a("v-uni-view",{key:e,staticClass:"teamItem d-flex"},[a("v-uni-view",{staticClass:"teamImg mr-2"},[a("v-uni-image",{staticClass:"teamIcon",attrs:{mode:"widthFix",src:"https://picsum.photos/50?id="+Math.random()+e}})],1),a("v-uni-view",{staticClass:"teamCont"},[a("v-uni-view",{staticClass:"nInfo"},[t._v("姓名"+t._s(e)),a("v-uni-view",{staticClass:"jobs"},[t._v("工作"+t._s(e+1)+"年")])],1),a("v-uni-view",{staticClass:"cInfo uv-line-2"},[a("v-uni-view",{staticClass:"labelCl"},[t._v("擅长：")]),t._v("外科常见病多发病治疗，对伤口造口换药，熟悉医疗过程")],1)],1)],1)})),t.showLoadMore?a("v-uni-view",{staticClass:"uni-loadmore"},[t._v(t._s(t.loadMoreText))]):t._e()],2)},i=[]},abb3:function(t,n,a){"use strict";a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{list:15,loadMoreText:"加载中...",showLoadMore:!1}},onUnload:function(){this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;this.list>=50?this.loadMoreText="没有更多数据了":(this.showLoadMore=!0,setTimeout((function(){console.log(t.list),t.list=t.list+10,console.log(t.list)}),300))}};n.default=e},e0db:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.teamList[data-v-ce96fdfa]{padding:15px}.teamList .teamItem[data-v-ce96fdfa]{border-bottom:1px solid #f3f3f3;padding:10px 5px}.teamList .teamItem .teamImg .teamIcon[data-v-ce96fdfa]{width:50px;height:50px;border-radius:50%}.teamList .teamItem .teamCont .nInfo[data-v-ce96fdfa]{font-size:16px;font-family:PingFang SC;font-weight:700;color:#383838;line-height:20px}.teamList .teamItem .teamCont .nInfo .jobs[data-v-ce96fdfa]{display:inline-block;background:linear-gradient(90deg,#04b2bd,#36b49e);border-radius:4px;font-size:12px;font-family:PingFang SC;font-weight:500;color:#fff;padding:0 10px;margin-left:5px}.teamList .teamItem .teamCont .cInfo[data-v-ce96fdfa]{font-size:12px;font-family:PingFang SC;font-weight:500;color:#757877;line-height:20px}.labelCl[data-v-ce96fdfa]{display:initial;color:#383838}',""]),t.exports=n}}]);