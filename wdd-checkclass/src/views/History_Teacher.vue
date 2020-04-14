<template>
  <div id="History_Teacher">
    <nav-bar-teacher></nav-bar-teacher>
    <b-container
      class="history_teacher d-flex flex-column justify-content-center"
    >
      <b-row class="status-qr align-items-center" align-h="around">
        <b-col cols="4" class="status">
          <p class="h6 mb-2" style="padding-top:10px; font-weight: 800;">Status</p>
          <div>
            <p class="d-flex justify-content-center align-items-center">
              <b-icon icon="circle-fill" style="color: green;"></b-icon>In Time
            </p>
            <p class="d-flex justify-content-center align-items-center">
              <b-icon icon="circle-fill" style="color: yellow;"></b-icon>Late
            </p>
            <p class="d-flex justify-content-center align-items-center">
              <b-icon icon="circle-fill" style="color: red;"></b-icon>Absent
            </p>
          </div>
        </b-col>
        <b-col cols="7" class="img-qr">
          <div class="show-qr">
            <img src="../assets/qr.png" alt />
          </div>
        </b-col>
        <div>
          <b-button class="btn-creatClass_1" pill>Create QR Code</b-button>
        </div>
      </b-row>

      <b-row class="list-name">
        <b-col>Student</b-col>
        <b-col>Name</b-col>
        <b-col>Status</b-col>
      </b-row>
    </b-container>
    <!-- <div id="History_Teacher">
      <nav-bar-teacher></nav-bar-teacher>
      <b-container class="container-History_Teacher">
        <b-row align-h="around">
          <b-col cols="4" class="c-left">
            <b-card style="max-width: 20rem; border-radius: 2rem;" class="mb-2">
              <b-card-text>Status</b-card-text>
              <div class="left">
                <b-card-text>
                  <span class="dot" style="background-color: green;"></span> In
                  Time
                </b-card-text>
                <br />
                <b-card-text>
                  <span class="dot" style="background-color: orange;"></span>
                  Late
                </b-card-text>
                <br />
                <b-card-text>
                  <span class="dot" style="background-color: red;"></span>
                  Absent
                </b-card-text>
                <br />
              </div>
            </b-card>
          </b-col>
          <b-col cols="4" class="c-right">
            <b-card style="max-width: 20rem; border-radius: 2rem;" class="mb-2">
              <b-card-text>Qr Code</b-card-text>
            </b-card>
            <b-button href="#" variant="primary" class="btn-creatClass_2 center">Create Qr Code</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-card class="card-history">
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm>StudentID</b-col>
          <b-col sm>Name</b-col>
          <b-col sm>Status</b-col>
        </b-row>
      </b-container>
    </b-card>-->
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import NavBar_Teacher from "@/components/NavBar_Teacher.vue";
export default {
  name: "History_Teacher",
  components: {
    "nav-bar-teacher": NavBar_Teacher
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#History_Teacher {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
  background-color: #2c3e50; */
}

.row {
  display: flex;
  flex-wrap: wrap;
  /* margin-right: -15px; */
  /* margin-left: -15px; */
}

.status-qr {
  background-color: #4f4f4f;
  padding: 7%;
}

.status {
  background-color: white;
  border: 0px;
  border-radius: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.img-qr {
  background-color: white;
  border: 0px;
  border-radius: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.show-qr img {
  width: 60%;
}

.btn {
  border-radius: 30rem;
  font-size: 1em;
  padding: 1.5% 6%;
  font-weight: 600;
}

.btn-secondary {
  width: 300px;

  font-size: 1.3em;
  margin-top: 40px;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.list-name {
  background-color: white;
  border: 0px;
  border-radius: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 5% 5%;
  height: 60vh;
  padding-top: 3%;
}

.list-name .col {
  font-weight: 800;
  font-size: 1em;
}
/* .container-History_Teacher {
  height: 50vh;
}
.card-history {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
  width: 90%;
  height: 50vh;
}
.dot {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}
.btn-creatClass_2 {
  margin-top: 20px;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
}
.left {
  justify-content: flex-start;
}
.c-left {
  top: 20px;
}
.c-right {
  top: 20px;
} */
</style>
