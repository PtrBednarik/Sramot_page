import './assets/main.css'

import AboutPage from "@/pages/AboutPage.vue";
import GalleryPage from "@/pages/GalleryPage.vue";
import TheWelcome from "@/components/TheWelcome.vue";

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: TheWelcome },
        { path: '/about', name: 'About', component: AboutPage },
        { path: '/gallery', name: 'Gallery', component: GalleryPage },
    ]
});

createApp(App)
    .use(router)
    .mount('#app')
