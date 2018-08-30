import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import City from '@/components/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
