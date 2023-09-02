import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/emp',
        name: 'emp',
        component: () => import(/* webpackChunkName: "about" */ '../views/tlias/EmpView.vue')
    },
    {
        path: '/dept',
        name: 'dept',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/tlias/DeptView.vue')
    },
    {
        path: '/',
        redirect: '/emp',

    },
]

const router = new VueRouter({
    routes
})

export default router
