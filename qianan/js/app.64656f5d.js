(function(e){function n(n){for(var r,o,c=n[0],i=n[1],l=n[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&f.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(f.length)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==u[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},u={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-22346daf":"1dbf3038","chunk-3cb4301d":"4544d7ab","chunk-7681dd5f":"c920dd6d","chunk-783c2850":"cfd456a6"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-22346daf":1,"chunk-3cb4301d":1,"chunk-7681dd5f":1,"chunk-783c2850":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-22346daf":"7d59f349","chunk-3cb4301d":"3cf09e70","chunk-7681dd5f":"7f4380c8","chunk-783c2850":"0e433876"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===r||d===u))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],d=l.getAttribute("data-href");if(d===r||d===u)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],s.parentNode.removeChild(s),t(a)},s.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=a);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var f=new Error;l=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}u[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var s=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"1a5d":function(e,n,t){var r={"./Home.vue":["bb51","chunk-783c2850"],"./Login.vue":["a55b","chunk-22346daf"],"./Main.vue":["cd56","chunk-3cb4301d"],"./Welcome.vue":["eec5","chunk-7681dd5f"]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id="1a5d",e.exports=o},2499:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],a=t("2877"),c={},i=Object(a["a"])(c,o,u,!1,null,null,null),l=i.exports,d=(t("99af"),t("b0c0"),t("d3b7"),t("5530")),f=t("8c4f");t("ac1f"),t("5319");function s(e){return/^http[s]?:\/\/.*/.test(e)}var p=function(e){return function(){return t("1a5d")("./"+e+".vue")}};function h(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[],r=0;r<e.length;r++)if(e[r].list&&e[r].list.length>=1)t=t.concat(e[r].list);else if(e[r].url&&/\S/.test(e[r].url)){e[r].url=e[r].url.replace(/^\//,"");var o=e[r].url;e[r].perms&&(o=e[r].perms.replace(/^\//,""));var u={path:o.replace("/","-"),component:null,name:e[r].url.replace("/","-"),meta:{iframeUrl:""}};if(s(e[r].url))u["path"]="i-".concat(e[r].url),u["name"]="i-".concat(e[r].url),u["meta"]["iframeUrl"]=e[r].url;else try{u["component"]=p("".concat(e[r].url))||null}catch(a){}n.push(u)}return t.length>=1&&h(t,n),n}var m=[];r["default"].use(f["a"]);var v=[{path:"/welcome",name:"Welcome",component:function(){return t.e("chunk-7681dd5f").then(t.bind(null,"eec5"))}},{path:"/login/:index",name:"Login",component:function(){return t.e("chunk-22346daf").then(t.bind(null,"a55b"))}}],b={path:"/",name:"Main",component:function(){return t.e("chunk-3cb4301d").then(t.bind(null,"cd56"))},redirect:{name:"Home"},children:[{path:"/home",name:"Home",component:function(){return t.e("chunk-783c2850").then(t.bind(null,"bb51"))}}],beforeEnter:function(e,n,t){var r=localStorage.getItem("token");r&&/\S/.test(r)?t():t("/welcome")}},g=new f["a"]({isAddDynamicMenuRoutes:!1,routes:v.concat(b)});g.beforeEach((function(e,n,t){g.options.isAddDynamicMenuRoutes?t():(b.name="main-dynamic",localStorage.setItem("menuList",JSON.stringify(m)),b.children=h(m),g.addRoutes([b]),g.options.isAddDynamicMenuRoutes=!0,t(Object(d["a"])(Object(d["a"])({},e),{},{replace:!0})))}));var y=g,k=t("2f62");r["default"].use(k["a"]);var w=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=t("5c96"),j=t.n(O);t("0fae");r["default"].use(j.a,{size:"small",zIndex:3e3});t("2499"),t("508f");r["default"].config.productionTip=!1,new r["default"]({router:y,store:w,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.64656f5d.js.map