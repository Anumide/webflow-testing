import { createRouter, createWebHistory } from "vue-router";
import signIn from "../views/signin.vue";
import signUp from '../views/signup.vue';
import dashboard from '../views/dashboard.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: signIn
    },
   {
    path: '/sign-up',
    name: 'SignUp',
    component: signUp
   },
   {
    path: '/dashboard',
    name: 'Dashboard',
    component: dashboard
   }
  ],
});

export default router;
