import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export function page(path) {
  return () => import(/* webpackChunkName: "[request]" */ `@/pages/${path}`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/articles",
    name: "Articles",
    component: page("article/Index.vue"),
  },
  {
    path: "/articles/:id",
    name: "Articles.detail",
    component: page("article/Detail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const beforeEach = (to, from, next) => {
  router.app.$Progress.start();
  next();
};

const afterEach = () => {
  router.app.$Progress.finish();
};

router.beforeEach(beforeEach);
router.afterEach(afterEach);

export default router;
