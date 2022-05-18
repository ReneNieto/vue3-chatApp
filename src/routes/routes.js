import { createRouter, createWebHistory } from 'vue-router'
import ChatHome from '../components/ChatHome/ChatHome.vue'
import Register from '../components/Register/Register.vue'
import Login from '../components/Login/Login.vue'




const routes = [
    { path: '/', name: 'ChatHome' ,component: ChatHome },
    { path: '/register',name: 'Register', component: Register, },
    { path: '/login',name: 'Login' , component: Login },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
const accessToken = localStorage.getItem('access_token')

// router.beforeEach(async (to, from) => {
//     if (
//      !accessToken &&
//       // ❗️ Avoid an infinite redirect
//       to.name !== 'Login' && to.name !== 'Register'
//     ) {
//       // redirect the user to the login page
//       return { 
//         name: 'Login'
//      }
    
//     }
//   })


  router.beforeEach(async (to, from, next) => {
    if (to.name !== 'Login' && to.name !== 'Register' && !accessToken) next({ name: 'Login' })
    else next()
  })



export default router