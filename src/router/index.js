import Vue from 'vue'
import Router from 'vue-router'
import mainCom from '@/components/main'
import detail from '@/components/detail'
import edit from '@/components/edit'
import newbuild from '@/components/newbuild'
import check from '@/components/check'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: mainCom
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
    },
    {
      path: '/check',
      component: check
    }
  ]
})
