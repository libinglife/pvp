(function(t){function e(e){for(var n,a,i=e[0],o=e[1],c=e[2],l=0,u=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);p&&p(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),d()}function d(){for(var t,e=0;e<s.length;e++){for(var d=s[e],n=!0,a=1;a<d.length;a++){var i=d[a];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=d[0]))}return t}var n={},a={app:0},r={app:0},s=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dacff4d6","chunk-1834838d":"420fe219","chunk-5d0bfe50":"93204dea"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var d=n[e]={i:e,l:!1,exports:{}};return t[e].call(d.exports,d,d.exports,o),d.l=!0,d.exports}o.e=function(t){var e=[],d={"chunk-1834838d":1,"chunk-5d0bfe50":1};a[t]?e.push(a[t]):0!==a[t]&&d[t]&&e.push(a[t]=new Promise((function(e,d){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-1834838d":"fcf597be","chunk-5d0bfe50":"da9e4464"}[t]+".css",r=o.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===r))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){c=u[i],l=c.getAttribute("data-href");if(l===n||l===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[t],p.parentNode.removeChild(p),d(s)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,d){n=r[t]=[e,d]}));e.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(t);var u=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(p);var d=r[t];if(0!==d){if(d){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,d[1](u)}r[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,d){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:d})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var d=Object.create(null);if(o.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(d,n,function(e){return t[e]}.bind(null,n));return d},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;s.push([0,"chunk-vendors"]),d()})({0:function(t,e,d){t.exports=d("56d7")},"132a":function(t,e,d){t.exports=d.p+"img/p2.3313a282.jpeg"},"21bb":function(t,e,d){"use strict";var n=d("c6d9"),a=d.n(n);a.a},"37f3":function(t,e,d){t.exports=d.p+"img/p1.87d0b634.jpeg"},"56d7":function(t,e,d){"use strict";d.r(e);d("e260"),d("e6cf"),d("cca6"),d("a79d");var n=d("2b0e"),a=function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{attrs:{id:"app"}},[d("router-view")],1)},r=[],s=d("2877"),i={},o=Object(s["a"])(i,a,r,!1,null,null,null),c=o.exports,l=(d("d3b7"),d("1860")),u=function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"main"},[t._m(0),d("div",{staticClass:"nav nav-inverse bg-primary py-3 pb-2 ai-center jc-around"},[d("div",{staticClass:"nav-item pb-1 nav-active "},[d("router-link",{staticClass:"text-white",attrs:{to:"/"}},[t._v("首页")])],1),d("div",{staticClass:"nav-item pb-1"},[d("router-link",{staticClass:"text-white",attrs:{to:"/"}},[t._v("攻略中心")])],1),d("div",{staticClass:"nav-item pb-1"},[d("router-link",{staticClass:"text-white",attrs:{to:"/"}},[t._v("赛事中心")])],1)]),d("router-view")],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topBar d-flex ai-center bg-block py-2 px-3"},[n("img",{attrs:{src:d("cf05"),height:"30",alt:""}}),n("div",{staticClass:"px-2 flex-1"},[n("div",{staticClass:"text-white "},[t._v("王者荣耀")]),n("div",{staticClass:"text-grey fs-sm mt-1"},[t._v("团队成就更多")])]),n("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])}],f={name:"Main",components:{}},v=f,h=(d("a006"),Object(s["a"])(v,u,p,!1,null,null,null)),m=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},[n("swiper-slide",[n("img",{staticClass:"w-100",attrs:{src:d("37f3"),alt:""}})]),n("swiper-slide",[n("img",{staticClass:"w-100",attrs:{src:d("132a"),alt:""}})]),n("swiper-slide",[n("img",{staticClass:"w-100",attrs:{src:d("cdae"),alt:""}})]),n("div",{staticClass:"swiper-pagination pagination-home text-right pr-3 pb-3",attrs:{slot:"pagination"},slot:"pagination"})],1),n("div",{staticClass:"nav-box mt-3"},[n("div",{staticClass:"nav-icon bg-white  d-flex flex-warp pt-3"},t._l(t.iconNavList,(function(e,d){return n("div",{key:e,staticClass:"nav-item text-center mt-2 mb-3"},[n("i",{staticClass:"sprite py-3",class:t.getNavClas(d)}),n("p",[t._v(t._s(e))])])})),0),t._m(0)]),n("m-list-card",{attrs:{title:"新闻资讯",iconName:"menu",navList:t.newsNavList},scopedSlots:t._u([{key:"content",fn:function(e){var d=e.contentData;return t._l(d.newsList,(function(e,d){return n("router-link",{key:d,staticClass:"py-2 d-flex",attrs:{tag:"div",to:"/article/"+e._id}},[n("span",{staticClass:"text-dark-1"},[t._v("["+t._s(e.type)+"]")]),n("span",{staticClass:"pl-1"},[t._v("|")]),n("span",{staticClass:"flex-1 text-ellipsis px-1"},[t._v(t._s(e.title))]),n("span",{staticClass:"fs-sm text-dark-1"},[t._v(t._s(t._f("timeFilter")(e.updatedAt)))])])}))}}])}),n("m-list-card",{attrs:{title:"英雄列表",iconName:"Hero-copy",navList:t.herosNavList},scopedSlots:t._u([{key:"content",fn:function(e){var d=e.contentData;return[n("div",{staticClass:"d-flex flex-warp",staticStyle:{margin:"0 -0.5rem"}},t._l(d.heroList,(function(e,d){return n("router-link",{key:d,staticClass:"p-2 text-center",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/hero/"+e._id}},[n("img",{attrs:{src:e.avatar,width:"100%",alt:""}}),n("div",[t._v(t._s(e.name))])])})),1)]}}])}),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")]),n("p",[t._v("dsfdddddddddddddd")])],1)},g=[function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"arrow bg-light text-center py-2"},[d("i",{staticClass:"sprite arrow-show-hide"}),d("span",{staticClass:"fs-xm text-dark px-2"},[t._v("收起")])])}],_=(d("96cf"),d("1da1")),w=d("3ba8"),y=d.n(w),x={name:"Home",components:{},filters:{timeFilter:function(t){return y()(t).format("MM/DD")}},data:function(){return{swiperOptions:{pagination:{el:".swiper-pagination"}},iconNavList:["爆料站","故事站","周边商城","体验服","新人专区","荣耀.传承","模拟战资料库","王者营地","公众号","版本介绍","对局环境","无限王者团","创意互动营"],newsNavList:[],herosNavList:[]}},created:function(){this.fetchNews(),this.fetchHeroes()},methods:{fetchNews:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/news");case 2:d=e.sent,t.newsNavList=d.data;case 4:case"end":return e.stop()}}),e)})))()},fetchHeroes:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/heroes");case 2:d=e.sent,console.log(d),t.herosNavList=d.data;case 5:case"end":return e.stop()}}),e)})))()},getNavClas:function(t){var e;switch(t){case 0:e="news";break;case 1:e="story";break;case 2:e="shopping";break;case 3:e="experience";break;case 4:e="new-people";break;case 5:e="glory";break;case 6:e="simulation";break;case 7:e="king";break;case 8:e="bjnewban";break;case 9:e="versions";break;case 10:e="game";break;case 11:e="king-group";break;case 12:e="creative";break}return[e]}}},C=x,k=(d("21bb"),Object(s["a"])(C,b,g,!1,null,null,null)),N=k.exports;n["default"].use(l["a"]);var L=[{path:"/",component:m,children:[{path:"/",name:"Home",component:N},{path:"/article/:id",name:"Article",props:!0,component:function(){return d.e("chunk-1834838d").then(d.bind(null,"3ad6"))}}]},{path:"/hero/:id",name:"HeroDetail",props:!0,component:function(){return d.e("chunk-5d0bfe50").then(d.bind(null,"4e9f"))}},{path:"/about",name:"About",component:function(){return d.e("about").then(d.bind(null,"f820"))}}],j=new l["a"]({routes:L}),O=j,S=(d("944d"),d("d02f")),E=d.n(S),A=(d("8102"),function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"card  bg-white p-3 border-b"},[d("div",{staticClass:"card-header pt-1 pb-3 d-flex ai-center"},[d("i",{staticClass:"iconfont fs-xxl",class:"icon-"+t.iconName}),d("span",{staticClass:"fs-xl flex-1 fs-xl px-2"},[t._v(t._s(t.title))]),d("i",{staticClass:"iconfont icon-more fs-xxl"})]),d("div",{staticClass:"card-body"},[d("div",{staticClass:"nav py-3 px-1 ai-center jc-between"},t._l(t.navList,(function(e,n){return d("div",{key:n,staticClass:"nav-item pb-1",class:{"nav-active":t.actived==n},on:{click:function(e){return t.navChange(n)}}},[d("span",[t._v(t._s(e.name))])])})),0),t._t("default")],2)])}),$=[],P=(d("a9e3"),{props:{title:{type:String,required:!0},iconName:{type:String,required:!0},navList:{type:Array,required:!0},actived:{type:Number,value:0}},data:function(){return{}},methods:{navChange:function(t){this.$emit("navChange",t)}}}),D=P,T=Object(s["a"])(D,A,$,!1,null,"627afa9c",null),q=T.exports,H=function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"card  mt-3 bg-white  border-b"},[d("m-card",{attrs:{title:t.title,iconName:t.iconName,navList:t.navList,actived:t.actived},on:{navChange:t.onNavChange}},[d("swiper",{ref:"mySwiper",attrs:{options:{autoHeight:!0}},on:{"slide-change":t.onSlideChange}},t._l(t.navList,(function(e,n){return d("swiper-slide",{key:n},[t._t("content",null,{contentData:e})],2)})),1)],1)],1)},M=[],R={props:{title:{type:String,required:!0},iconName:{type:String,required:!0},navList:{type:Array,required:!0}},data:function(){return{actived:0}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},methods:{onSlideChange:function(){this.actived=this.swiper.realIndex},onNavChange:function(t){this.actived=t,this.swiper.slideTo(t)}}},B=R,U=Object(s["a"])(B,H,M,!1,null,"37e6f946",null),F=U.exports;n["default"].use(E.a),n["default"].component("m-card",q),n["default"].component("m-list-card",F),n["default"].config.productionTip=!1;var I=d("82ae");n["default"].prototype.$http=I.create({baseURL:Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API_URL||"/web/api/"}),new n["default"]({router:O,render:function(t){return t(c)}}).$mount("#app")},8676:function(t,e,d){},"944d":function(t,e,d){},a006:function(t,e,d){"use strict";var n=d("8676"),a=d.n(n);a.a},c6d9:function(t,e,d){},cdae:function(t,e,d){t.exports=d.p+"img/p3.c39560c6.jpeg"},cf05:function(t,e,d){t.exports=d.p+"img/logo.b3b3bca8.png"}});
//# sourceMappingURL=app.c06639c0.js.map