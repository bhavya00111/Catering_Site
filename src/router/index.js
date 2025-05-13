import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import AboutOnly from '@/views/AboutOnly.vue';
import MenuOnly from '@/views/MenuOnly.vue';
import ContactOnly from '@/views/ContactOnly.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutOnly },
  { path: '/menu', component: MenuOnly },
  { path: '/contact', component: ContactOnly }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
