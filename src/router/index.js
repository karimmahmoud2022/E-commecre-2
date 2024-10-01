import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path:'/Shopingcurd',
      name:'Shopingcurd',
      component:()=> import("@/components/Shopingcurd.vue")
    },
    {
      path: '/ContactUS',
      name:'ContactUS',
      component:()=> import("@/components/ContactUs.vue")
    }

  
 
  ]
})

export default router
