import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryCreate from '../views/CategoryCreate.vue'
import CategoryList from '../views/CategoryList.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'main',
        redirect: '/category/list',
        component: Main,
        children: [{
            name: 'categoryCreate',
            path: '/category/create',
            component: CategoryCreate
        }, {
            name: 'CategoryList',
            path: '/category/list',
            component: CategoryList
        }, {
            name: 'categoryEdit',
            path: '/category/edit/:id',
            props: true,
            component: CategoryEdit
        }, ]
    },

]

const router = new VueRouter({
    routes
})

export default router