import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import City from '@/components/city/City'
import Details from '@/components/details/Details'
import Content from '@/components/show/Content'

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
    },
    {
      path: '/detail/*',
      name: 'Details',
      component: Details
    },
    {
      path: '/show/*',
      name: 'Show',
      component: Content
    },
  ],
  scrollBehavior(to,from,savedPositioned){
    return {x:0,y:0}
  }
})
