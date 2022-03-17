import Vue from "vue";
import VueRouter from "vue-router";

import store from '../store/index.js';

// Male Barber
import HomeMale from "../views/maleBarber/HomeScreen.vue";
import OurSaloon from "../views/maleBarber/OurSaloonScreen.vue";
import Pricing from "../views/maleBarber/PricingScreen.vue";
import ApplicationScreen from "../views/maleBarber/ApplicationScreen.vue";
import ProductsScreen from "../views/maleBarber/ProductsScreen";
import AppScreen from "../views/maleBarber/AppScreen";

// Female Barber
import HomeFemale from "../views/femaleBarber/HomeScreen.vue";
import OurSaloonFemale from "../views/femaleBarber/OurSaloonScreen.vue";
import PricingFemale from "../views/femaleBarber/PricingScreen.vue";
import ProductsFemale from "../views/femaleBarber/ProductsScreen.vue";
import ApplicationScreenFemale from "../views/femaleBarber/ApplicationScreen.vue";
import AppScreenFemale from "../views/femaleBarber/AppScreen";

// neutral Barber
import HomeNeutral from "../views/neutralBarber/HomeScreen.vue";
import OurSaloonNeutral from "../views/neutralBarber/OurSaloonScreen.vue";
import PricingNeutral from "../views/neutralBarber/PricingScreen.vue";
import ProductsNeutral from "../views/neutralBarber/ProductsScreen.vue";
import ApplicationScreenNeutral from "../views/neutralBarber/ApplicationScreen.vue";
import AppScreenNeutral from "../views/neutralBarber/AppScreen";

Vue.use(VueRouter);

var loggedIn = true;
console.log(loggedIn);
const routes = [


  {
    path: "/",
    name: "Startseite",
    component: HomeMale,
    beforeEnter: (to, from, next) => {
      // ...
      if (store.state.category == 'Herren Friseur') {
        next('/StartseiteA');
      } else if (store.state.category == 'Damen Friseur') {
        next('/StartseiteB');
      } else {
        next('/StartseiteC');
      }
    }
  },

  ////////////////////////////////
  // Male Barber Screens
  ////////////////////////////////
  {
    path: "/StartseiteA",
    name: "HomeMale",
    component: HomeMale,

  },

  {
    path: "/UnserSalonA",
    name: "OurSaloon",
    component: OurSaloon,
  },
  {
    path: "/PreiseA",
    name: "Pricing",
    component: Pricing,
  },
  {
    path: "/BewerbungA",
    name: "ApplicationScreen",
    component: ApplicationScreen,
  },
  {
    path: "/ProdukteA",
    name: "ProductsScreen",
    component: ProductsScreen,
  },
  {
    path: "/AppA",
    name: "AppScreen",
    component: AppScreen,
  },

  ////////////////////////////////
  // Female Barber Screens
  ////////////////////////////////
  {
    path: "/StartseiteB",
    name: "HomeFemale",
    component: HomeFemale,

  },
  {
    path: "/UnserSalonB",
    name: "OurSaloonFemale",
    component: OurSaloonFemale,

  },
  {
    path: "/PreiseB",
    name: "PricingFemale",
    component: PricingFemale,

  },
  {
    path: "/ProdukteB",
    name: "ProductsFemale",
    component: ProductsFemale,

  },
  {
    path: "/BewerbungB",
    name: "ApplicationScreenFemale",
    component: ApplicationScreenFemale,

  },
  {
    path: "/AppB",
    name: "AppScreenFemale",
    component: AppScreenFemale,

  },
  ////////////////////////////////
  // Neutral Barber Screens
  ////////////////////////////////
  {
    path: "/StartseiteC",
    name: "HomeNeutral",
    component: HomeNeutral,

  },
  {
    path: "/UnserSalonC",
    name: "OurSaloonNeutral",
    component: OurSaloonNeutral,

  },
  {
    path: "/PreiseC",
    name: "PricingNeutral",
    component: PricingNeutral,

  },
  {
    path: "/ProdukteC",
    name: "ProductsNeutral",
    component: ProductsNeutral,

  },
  {
    path: "/BewerbungC",
    name: "ApplicationScreenNeutral",
    component: ApplicationScreenNeutral,

  },
  {
    path: "/AppC",
    name: "AppScreenNeutral",
    component: AppScreenNeutral,

  },

];

const router = new VueRouter({
  routes,
});

export default router;
