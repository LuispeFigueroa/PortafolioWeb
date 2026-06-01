import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
import HomeView from './views/HomeView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{ path: '/', component: HomeView }],
    scrollBehavior(to) {
        if (to.hash) return { el: to.hash, behavior: 'smooth' }
        return { top: 0 }
    }
})

createApp(App).use(router).mount('#app')