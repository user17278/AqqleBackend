import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/register',
        component: () => import('@/views/RegisterView'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeView'),
        children: [
            {
                path: 'recent-order',
                component: () => import('@/components/RecentOrdersSection.vue')
            },
            {
                path: 'setting',
                component: () => import('@/components/SettingSection.vue'),
                children: [
                    {
                        path: 'edit',
                        component: () => import('@/components/SettingWrapper.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/LoginView')
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (to.path === '/home') {
        next({ path: '/home/recent-order' })
    } else {
        next()
    }
})

export default router