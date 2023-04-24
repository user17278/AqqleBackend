import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: () => import('@/views/HomeView')
    },
    {
        path: '/',
        component: () => import('@/views/LoginView')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router