import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/helloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('views/home/index.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('views/chart/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // history 模式则使用 createWebHistory()
  routes
})

export default router
