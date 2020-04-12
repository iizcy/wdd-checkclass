import Vue from "vue";
import VueRouter from "vue-router";
import ChooseSignin from "../views/ChooseSignin.vue";


Vue.use(VueRouter);

const routes = [
  {
    path:"/ChooseSignin",
    name:"ChooseSignin",
    component: ChooseSignin
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
