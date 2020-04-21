import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import ChooseSignin from "../views/ChooseSignin.vue";
import SigninGoogle from "../views/SigninGoogle.vue";
import ClassTeacher from "../views/ClassTeacher.vue";
import History_Teacher from "../views/History_Teacher.vue";
import Topic_Student from "../views/Topic_Student.vue";
import ScanQRcode from "../views/ScanQRcode.vue";
import Interact from "../views/Interact.vue";
import ClassStudent from "../views/ClassStudent.vue";
import testQR from "../views/testQR.vue";
import ErrorAuth from "../views/ErrorAuth.vue";
import { firestore } from "../library/firebase";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.user.loggedIn) {
    next();
    return;
  }
  next("/ChooseSignin");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.user.loggedIn) {
    try {
      firestore
        .collection("Class")
        .get()
        .then(() => {
          next();
        })
        .catch(err => {
          if (err.code === "permission-denied") {
            next("/error");
          }
        });
    } catch (error) {
      console.log(error);
    }

    return;
  }
  next("/");
};

const routes = [
  {
    path: "/",
    name: "SigninGoogle",
    component: SigninGoogle,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: "/ChooseSignin",
    name: "ChooseSignin",
    component: ChooseSignin,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/class-teacher",
    name: "ClassTeacher",
    component: ClassTeacher,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/class-teacher/:id",
    name: "History_Teacher",
    component: History_Teacher,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/class-student/:id",
    name: "Topic_Student",
    component: Topic_Student,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/class-student/:id/scan",
    name: "ScanQRcode",
    component: ScanQRcode,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/class-student/:id/scan/status",
    name: "Interact",
    component: Interact,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/class-student",
    name: "ClassStudent",
    component: ClassStudent,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/testQR",
    name: "testQR",
    component: testQR,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/error",
    name: "error",
    component: ErrorAuth
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
