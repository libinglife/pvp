import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

import http from './plugins/http'

Vue.config.productionTip = false

Vue.prototype.$http = http



Vue.mixin({
    computed: {
        uploadUrl() {
            return this.$http.defaults.baseURL + 'upload'
        }
    },
    methods: {
        getAuthHeader() {
            if (localStorage.token) {
                return {
                    Authorization: "Bearer " + localStorage.token
                }
            }
        }
    },
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')