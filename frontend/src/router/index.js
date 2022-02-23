import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)
const isLogged = (to, from, next) => {
  if (store.getters.getToken) {
    next()
    return;
  }
  next('/wall');
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component : () => import('../views/Home.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path: '/wall',
    name: 'Wall',
    component: () => import('../views/Wall.vue'),
    beforeEach: isLogged,
  },
  {
    path: '/myProfile',
    name: 'UserProfil',
    component: () => import('../views/UserProfil.vue'),
    beforeEach: isLogged,
  },
  {
    path: '/AllProfile',
    name: 'AllProfile',
    component: () => import('../views/AllProfile.vue'),
    beforeEach: isLogged,
  },
  {
    path: '/comments/:PostId',
    name: 'Comments',
    component: () => import('../views/Comments.vue'),
    beforeEach: isLogged,
  },
]

const router = new VueRouter({
  routes
})

export default router
