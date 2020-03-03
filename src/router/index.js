import Vue from 'vue'
import Router from 'vue-router'
import Plan from '@/components/plan/Index'
import Write from '@/components/write/Index'
import Select from '@/components/select/Index'
import Chart from '@/components/chart/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Plan',
      component: Plan
    },
    {
      path: '/write',
      name: 'Write',
      component: Write
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    }
  ]
})
