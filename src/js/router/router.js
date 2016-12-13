import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
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
    }
})

export default router
