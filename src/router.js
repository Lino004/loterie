import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Connexion from './views/Connexion.vue'
import Erreur from './views/Error.vue'
import Good from './views/Good.vue'
import Menu1 from '@/components/home/Menu1.vue'
import Menu2 from '@/components/home/Menu2.vue'
import Menu3 from '@/components/home/Menu3.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/connexion'
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion
    },
    {
      path: '/error',
      name: 'error',
      component: Erreur
    },
    {
      path: '/good',
      name: 'good',
      component: Good
    },
    {
      path: '/home',
      name: 'hone',
      component: Home,
      children: [
        {
          path: '/home/',
        },
        {
          path: '/home/menu1',
          name: 'menu1',
          component: Menu1,
        },
        {
          path: '/home/menu2',
          name: 'menu2',
          component: Menu2,
        },
        {
          path: '/home/menu3',
          name: 'menu3',
          component: Menu3,
        },
      ]
    },
  ]
})
