import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/Home.vue")
    },
    {
      path: "/cv/",
      name: "cv",
      component: () => import("../views/cv/CV_view.vue")
    }
  ],
});

export default router;
