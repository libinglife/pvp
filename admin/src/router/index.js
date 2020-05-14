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

// 文章
import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleCreate from '../views/ArticleCreate.vue'
import ArticleList from '../views/ArticleList.vue'

// 广告
import AdsEdit from '../views/AdsEdit.vue'
import AdsCreate from '../views/AdsCreate.vue'
import AdsList from '../views/AdsList.vue'



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
        }, {
            name: 'articleList',
            path: '/article/list',
            component: ArticleList
        }, {
            name: 'articleEdit',
            path: '/article/edit/:id',
            props: true, //把参数添加到组件属性上
            component: ArticleEdit
        }, {
            name: 'articleCreate',
            path: '/article/create',
            component: ArticleCreate
        }, {
            name: 'adsList',
            path: '/ads/list',
            component: AdsList
        }, {
            name: 'adsEdit',
            path: '/ads/edit/:id',
            props: true, //把参数添加到组件属性上
            component: AdsEdit
        }, {
            name: 'adsCreate',
            path: '/ads/create',
            component: AdsCreate
        }]
    },

]

const router = new VueRouter({
    routes
})

export default router