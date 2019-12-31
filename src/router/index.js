import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRoutes = [
    // {
    //     path: '/redirect',
    //     component: Home,
    //     hidden: true,
    //     children: [{
    //         path: '/redirect/:path*',
    //         component: () => import('@views/redirect/index')
    //     }]
    // },
    // {
    //     path: '',
    //     component: Home,
    //     redirect: '/index/index',
    //     hidden: true
    // },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    // {
    //     path: '/404',
    //     component: () => import('@view/errorPage/404'), 
    //     hidden: true
    // }
]

export default new Router({
    mode: 'history',
    base: '/permission', // 添加跟目录，对应服务器部署子目录
    routes: constantRoutes
})