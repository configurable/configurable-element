import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Table1 from './views/table1/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/table1',
      name: 'table1',
      component: Table1,
      meta: {}
    },
    {
      path: '/table2',
      name: 'table2',
      component: Table1,
      meta: {}
    }     
  ]
})
