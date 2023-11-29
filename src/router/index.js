import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/Home.vue'

const router = createRouter({
  //history: createWebHistory(import.meta.env.VITE_BASE_URL),
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/agentdoc', name: 'agentdoc', component: () => import('../pages/AgentDocs.vue') },
    { path: '/semmdesc', name: 'semmdesc', component: () => import('../pages/SemmDesc.vue') },
    { path: '/bnbpage', name: 'bnbpage', component: () => import('../pages/BnbPage.vue') },
    { path: '/hayekpage', name: 'hayekpage', component: () => import('../pages/HayekPage.vue') },
    { path: '/recharge', name: 'recharge', component: () => import('../pages/Recharge.vue') },
    { path: '/agentpage', name: 'agentpage', component: () => import('../pages/AgentPage.vue') },
    { path: '/daipage', name: 'daipage', component: () => import('../pages/DaiPage.vue') },
    { path: '/syncing', name: 'syncing', component: () => import('../pages/SyncPage.vue') },
  ]
})

export default router
