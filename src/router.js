import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Contacts from './pages/Contacts.vue';
import About from './pages/About.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/contacts',
            name:'contacts',
            component: Contacts
        },
        {
            path:'/chi-siamo',
            name:'about',
            component: About
        },
    ]
})

export { router }