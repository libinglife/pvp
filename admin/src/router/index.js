import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

// 分类
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryCreate from '../views/CategoryCreate.vue'
import CategoryList from '../views/CategoryList.vue'

// 物品
import GoodsEdit from '../views/GoodsEdit.vue'
import GoodsCreate from '../views/GoodsCreate.vue'
import GoodsList from '../views/GoodsList.vue'

// 英雄
import HeroesEdit from '../views/HeroesEdit.vue'
import HeroesCreate from '../views/HeroesCreate.vue'
import HeroesList from '../views/HeroesList.vue'


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
            name: 'categoryList',
            path: '/category/list',
            component: CategoryList
        }, {
            name: 'categoryEdit',
            path: '/category/edit/:id',
            props: true,
            component: CategoryEdit
        }, {
            name: 'goodsCreate',
            path: '/goods/create',
            component: GoodsCreate
        }, {
            name: 'goodsList',
            path: '/goods/list',
            component: GoodsList
        }, {
            name: 'goodsEdit',
            path: '/goods/edit/:id',
            props: true,
            component: GoodsEdit
        }, {
            name: 'heroList',
            path: '/heroes/list',
            component: HeroesList
        }, {
            name: 'heroCreate',
            path: '/heroes/create',
            component: HeroesCreate
        }, {
            name: 'heroEdit',
            path: '/heroes/edit/:id',
            props: true, //把参数添加到组件属性上
            component: HeroesEdit
        }]
    },

]

const router = new VueRouter({
    routes
})

export default router