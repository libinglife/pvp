import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./style.scss";

import VueAwesomeSwiper from "vue-awesome-swiper";

// import style
import "swiper/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default options with global component } */ );

// 引入card 组件

import Card from "./components/Card";
Vue.component("m-card", Card);

import ListCard from "./components/ListCard";
Vue.component("m-list-card", ListCard);

Vue.config.productionTip = false;

// 配置http
let axios = require("axios");

Vue.prototype.$http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/web/api/'
        // baseURL: "http://localhost:3002/web/api/",
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");