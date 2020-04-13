import Vue from "vue";
import VueRouter from "vue-router";
import ChooseSignin from "../views/ChooseSignin.vue";
import SigninGoogle from "../views/SigninGoogle.vue";
import ClassTeacher from "../views/ClassTeacher.vue";



Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    name:"SigninGoogle",
    component: SigninGoogle
  },
  {
    path:"/ChooseSignin",
    name:"ChooseSignin",
    component: ChooseSignin
  },
  {
    path:"/ClassTeacher",
    name:"ClassTeacher",
    component: ClassTeacher
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
