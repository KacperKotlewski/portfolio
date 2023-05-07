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
    },
    {
      path: "/cv-fullscreen/",
      name: "cv-only",
      component: () => import("../views/cv/CV_ONLY.vue")
    }
  ],
});

export default router;
