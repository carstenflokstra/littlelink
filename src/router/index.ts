import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Photography from '../views/Photography.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/photography', name: 'Photography', component: Photography },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
