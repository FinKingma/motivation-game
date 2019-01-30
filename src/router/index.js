import Vue from 'vue'
import Router from 'vue-router'
import MotivationGame from '@/components/MotivationGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MotivationGame',
      component: MotivationGame
    }
  ]
})
