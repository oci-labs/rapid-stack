import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'
import CreateAccount from '../views/CreateAccount.vue'
import ChangePassword from '../views/ChangePassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
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
});

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
});


export default router
