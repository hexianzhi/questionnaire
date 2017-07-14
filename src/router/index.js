import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import check from '@/components/check'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/check',
      component: check
    }
  ]
})
