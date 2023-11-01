import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Hello.vue'
import Mapa from './views/MapaGoogle.vue'
import MapaHtml from './views/MapaHtml.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mapa',
      name: 'mapa',
      component: Mapa
    },
    {
      path: '/mapahtml',
      name: 'mapahtml',
      component: MapaHtml
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Autocomplete.vue')
    },
    // {
    //   path: '/table',
    //   name: 'table',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/Table.vue')
    // }
  ]
})

export default router