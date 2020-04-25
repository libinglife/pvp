import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'main',
        component: Main,
        children: [{
            name: 'categoryCreate',
            path: '/category/create',
            component: CategoryEdit
        }, {
            name: 'CategoryList',
            path: '/category/list',
            component: CategoryList
        }]
    },

]

const router = new VueRouter({
    routes
})

export default router