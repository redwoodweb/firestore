import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import New from '@/components/New'
import Edit from '@/components/Edit'
import Add from '@/components/Add'
import EmployeeView from '@/components/EmployeeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/:employee_id',
      name: 'edit',
      component: Edit
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/:employee_id',
      name: 'employeeview',
      component: EmployeeView
    }
  ]
})
