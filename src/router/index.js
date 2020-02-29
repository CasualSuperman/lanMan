import Vue from 'vue'
import VueRouter from 'vue-router'
import StandardPage from '@/components/StandardPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: StandardPage,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
        meta: {
          requiresAuth: true,
          mainPage: true,
        },
      },
      {
        path: '/historical',
        name: 'Historical',
        component: () => import(/* webpackChunkName: "historical" */ '../views/Historical.vue'),
        meta: {
          requiresAuth: true,
          mainPage: true,
        },
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          mainPage: true,
        },
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      guest: true,
    },
    params: {suggestedAction: 'login'},
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      guest: true,
    },
    params: {suggestedAction: 'register'},
  }
];

// List all routes registered with the router.
// Cannot detect routes dynamically added with VueRouter.prototype.addRoutes([...]).
VueRouter.prototype.allRoutes = function allRoutes() {
  const all = [];
  all.push(...this.options.routes);
  for (let i = 0; i < all.length; i++) {
    if (all[i].children) {
      all.push(...all[i].children);
    }
  }
  return all;
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const targetRequiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const targetRequiresGuest = to.matched.some(record => record.meta.guest);
  const loggedIn = true;// localStorage.getItem("username") !== null;
  if (targetRequiresAuth && !loggedIn) {
    next({path: "/login", nextUrl: to.fullPath});
  } else if (targetRequiresGuest && loggedIn) {
    next("/dashboard");
  } else {
    next();
  }
});

export default router
