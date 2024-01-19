import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ClavierView from "@/views/ClavierView.vue";
import ContactView from "@/views/ContactView.vue";
import JournalView from "@/views/JournalView.vue";
import CreerContactView from "@/views/CreerContactView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/clavier",
      name: "clavier",
      component: ClavierView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/journal",
      name: "journal",
      component: JournalView,
    },
    
    {
      path: "/creerContact",
      name: "creerContact",
      component: CreerContactView,
    },
  ],
});

export default router
