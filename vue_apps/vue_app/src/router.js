/*
 Object Computing Incorporated
 Product: Rapid Stack
 Author: Dorian Yeager
 
 License: MIT
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Account from './views/Account.vue'
import CreateAccount from './views/CreateAccount.vue'
import ChangePassword from './views/ChangePassword.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/createAccount',
      name: 'create_account',
      component: CreateAccount
    },
    {
      path: '/login/:next',
      name: 'login',
      component: Login,
      props: true
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: ChangePassword,
      meta: {
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      next();
    } else {
      next({
        name: 'login',
        params: { next: to.fullPath }
      })
    }
  } else {
    next();
  }
})

export default router;