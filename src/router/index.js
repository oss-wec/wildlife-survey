import Vue from 'vue'
import Router from 'vue-router'
import AnimalCounter from '@/components/AnimalCounter'
import GroupTally from '@/components/GroupTally'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AnimalCounter',
      component: AnimalCounter
    }, {
      path: '/group-tally',
      name: 'GroupTally',
      component: GroupTally
    }
  ]
})
