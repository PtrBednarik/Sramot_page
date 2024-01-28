import './assets/main.css'

import AboutPage from "@/pages/AboutPage.vue"
import GalleryPage from "@/pages/GalleryPage.vue";
import HomePage from "@/pages/HomePage.vue";

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: HomePage},
        { path: '/about', name: 'About', component: AboutPage },
        { path: '/gallery', name: 'Gallery', component: GalleryPage },
    ]
});

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
