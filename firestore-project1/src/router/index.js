import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import New from '@/components/New'
import Edit from '@/components/Edit'
import Add from '@/components/Add'
import EmployeeView from '@/components/EmployeeView'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
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
