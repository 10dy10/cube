import { createWebHistory, createRouter } from "vue-router"
import TheHome from '../components/TheHome.vue'
import TheIntro from '../components/TheIntro.vue'
import TheArtist from '../components/TheArtist.vue'
import TheMulti from '../components/TheMulti.vue'
import TheContact from '../components/TheContact.vue'

const routes = [
  {
    path: '/',
    component: TheHome
  },
  {
    path: '/intro',
    component: TheIntro,
  },
  {
    path: '/artist',
    component: TheArtist,
  },
  {
    path: '/multimedia',
    component: TheMulti
  },
  {
    path: '/contact',
    component: TheContact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 