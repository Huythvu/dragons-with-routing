import {createRouter, createWebHashHistory} from "vue-router";
import NotFound from '../view/FileNotFoundView.vue';

const routes = [
  {
  path: '/',
  name: 'home',
  component: () => import('../view/HomeView.vue')
},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
