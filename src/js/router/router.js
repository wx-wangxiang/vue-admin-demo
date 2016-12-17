import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
    '/': {
        name: 'index',
        component: (resolve) => {
            require(['../component/poerPage.vue'], resolve)
        }
    },
    '/modal/poer': {
        name: 'poer',
        component: (resolve) => {
            require(['../component/poerPage.vue'], resolve)
        }
    },
    '/modal/price': {
        name: 'price',
        component: (resolve) => {
            require(['../component/pricePage.vue'], resolve)
        }
    },
    '/modal/busi': {
        name: 'busi',
        component: (resolve) => {
            require(['../component/busiPage.vue'], resolve)
        }
    },
    '/modal/remove': {
        name: 'remove',
        component: (resolve) => {
            require(['../component/removePage.vue'], resolve)
        }
    }
})

export default router
