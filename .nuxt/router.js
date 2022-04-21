import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _02f9151b = () => interopDefault(import('..\\pages\\Create.vue' /* webpackChunkName: "pages/Create" */))
const _4c89e084 = () => interopDefault(import('..\\pages\\Posts.vue' /* webpackChunkName: "pages/Posts" */))
const _f266ddcc = () => interopDefault(import('..\\pages\\Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _b2ae9cfc = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages/Register" */))
const _54c5203c = () => interopDefault(import('..\\pages\\postpage\\_id.vue' /* webpackChunkName: "pages/postpage/_id" */))
const _2c87d623 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Create",
    component: _02f9151b,
    name: "Create"
  }, {
    path: "/Posts",
    component: _4c89e084,
    name: "Posts"
  }, {
    path: "/Profile",
    component: _f266ddcc,
    name: "Profile"
  }, {
    path: "/Register",
    component: _b2ae9cfc,
    name: "Register"
  }, {
    path: "/postpage/:id?",
    component: _54c5203c,
    name: "postpage-id"
  }, {
    path: "/",
    component: _2c87d623,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
