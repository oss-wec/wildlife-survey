import Vue from 'vue'
import Router from 'vue-router'
import AnimalCounter from '@/components/AnimalCounter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AnimalCounter',
      component: AnimalCounter
    }
  ]
})
