import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '',
                name: '首页',
                component: () => import('@/SubHome'),
            },
            {
                path: 'details/:id',
                name: '详情',
                component: () => import('@/Details'),
            },
            {
                path: 'register',
                name: '注册',
                component: () => import('@/Register'),
            },
            {
                path: 'feedback',
                name: '用户反馈',
                component: () => import('@/Feedback'),
            },
            {
                path: 'order',
                name: '订单',
                component: () => import('@/Order'),
            },

        ]

    },
    {
        path: '*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
