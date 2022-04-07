import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/landing",
  },
  {
    path: "/landing",
    name: "Landing",
    component: () => import("@/pages/Landing/Landing"),
  },
  {
    path: "/main",
    name: "MainPage",
    component: () => import("@/pages/MainPage/MainPage"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/About/About"),
  },
  {
    path: "/announcement",
    name: "Announcement",
    component: () => import("@/pages/Announcement/Announcement"),
  },
  {
    path: "/ecosystem",
    name: "EcoSystem",
    component: () => import("@/pages/Eco/EcoSystem"),
  },
  {
    path: "/partner",
    name: "Partner",
    component: () => import("@/pages/Partner/Partner"),
  },
  {
    path: "/roadmap",
    name: "RoadMap",
    component: () => import("@/pages/RoadMap/RoadMap"),
  },
  {
    path: "/staking",
    name: "Staking",
    component: () => import("@/pages/Staking/Staking"),
  },
  {
    path: "/teamadvisor",
    name: "TeamAdvisor",
    component: () => import("@/pages/TeamAdvisor/TeamAdvisor"),
  },
  {
    path: "/whitepaper",
    name: "WhitePaper",
    component: () => import("@/pages/WhitePaper/WhitePaper"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
