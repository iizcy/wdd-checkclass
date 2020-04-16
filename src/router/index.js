import Vue from "vue";
import VueRouter from "vue-router";
import ChooseSignin from "../views/ChooseSignin.vue";
import SigninGoogle from "../views/SigninGoogle.vue";
import ClassTeacher from "../views/ClassTeacher.vue";
import History_Teacher from "../views/History_Teacher.vue";
import Topic_Student from "../views/Topic_Student.vue";
import Topic_Teacher from "../views/Topic_Teacher.vue";
import ScanQRcode from "../views/ScanQRcode.vue";
import Interact from "../views/Interact.vue";
import ClassStudent from "../views/ClassStudent.vue";
import testQR from "../views/testQR.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SigninGoogle",
    component: SigninGoogle
  },
  {
    path: "/ChooseSignin",
    name: "ChooseSignin",
    component: ChooseSignin
  },
  {
    path: "/ClassTeacher",
    name: "ClassTeacher",
    component: ClassTeacher
  },
  {
    path: "/History_Teacher",
    name: "History_Teacher",
    component: History_Teacher
  },
  {
    path: "/Topic_Student",
    name: "Topic_Student",
    component: Topic_Student
  },
  {
    path: "/Topic_Teacher",
    name: "Topic_Teacher",
    component: Topic_Teacher
  },
  {
    path: "/ScanQRcode",
    name: "ScanQRcode",
    component: ScanQRcode
  },
  {
    path: "/Interact",
    name: "Interact",
    component: Interact
  },
  {
    path: "/ClassStudent",
    name: "ClassStudent",
    component: ClassStudent
  },
  {
    path: "/testQR",
    name: "testQR",
    component: testQR
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
