import Vue from 'vue'
import Router from 'vue-router'
import check from '@/components/check'
import detail from '@/components/detail'
import edit from '@/components/edit'
import newbuild from '@/components/newbuild'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/check'
    },
    {
      path: '/check',
      component: check
    },
    {
      path: '/edit',
      component: edit
    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: '/newbuild',
      component: newbuild
    }
  ]
})
