import Vue from "vue";
import VueRouter from "vue-router";
import ChooseSignin from "../views/ChooseSignin.vue";
import SigninGoogle from "../views/SigninGoogle.vue";
import ClassTeacher from "../views/ClassTeacher.vue";
import History_Teacher from "../views/History_Teacher.vue";
import Topic_Student from "../views/Topic_Student";

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
  },
  {
    path:"/History_Teacher",
    name:"History_Teacher",
    component: History_Teacher
  },
  {
    path:"/Topic_Student",
    name:"Topic_Student",
    component: Topic_Student
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
