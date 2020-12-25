import Vue from 'vue'
import Router from 'vue-router'
import store from "../store"
import routers from './router'

Vue.use(Router);

// const routerArr = router;


const router = new Router({
  // mode: 'history',
  routes: routers
})

//路由器跳转前置操作
// router.beforeEach((to, from, next) => {
//   let userInfo = localStorage.getItem('userInfo');
//   if (userInfo && to.path == '/login') {
//     next({
//       path: '/',
//       replace: true
//     })
//   } else if (!userInfo && to.path != '/login') {
//     next({
//       path: '/',
//       replace: true
//     })
//   } else if (userInfo && to.path != '/login') {
//     next()
//   } else {
//     next()
//   }
// })
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
