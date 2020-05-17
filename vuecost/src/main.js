// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import axios from 'axios'
import App from './App'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetails'
import Edit from './components/Edit'

Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.use(VueResource)
Vue.prototype.$http=axios

const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path:"/",
      component:Customers
    },
    {
      path:"/about",
      component:About
    },
    {
      path:"/add",
      component:Add
    },
    {
      path:"/customer/:id",
      component:CustomerDetails
    },
    {
      path:"/edit/:id",
      component:Edit
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  components: { 
    App
  },
  template: '<App/>'
}).$mount("#app")

export default router
