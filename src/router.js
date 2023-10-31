import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';
import LandingComponent from './components/LandingComponent.vue';

const routes = [
  {
    path: '/',
    component: LandingComponent,
  },
  {
    path: '/home',
    component: HomeComponent,
  },
  {
    path: '/about-me',
    component: AboutMeComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
