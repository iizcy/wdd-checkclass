<template>
  <div id="ChooseSignin">
    <nav-bar-teacher></nav-bar-teacher>
    <div
      class="container-choose d-flex justify-content-center align-item-center"
    >
      <div class="wrap-choose">
        <h6>Sign-in</h6>
        <b-card style="cursor: pointer;" v-on:click="navigate()">
          <b-card-text>Teacher</b-card-text>
        </b-card>
        <b-card style="cursor: pointer;" v-on:click="navigate2()">
          <b-card-text>Student</b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router';
import NavBar_Teacher from "@/components/NavBar_Teacher.vue";
export default {
  name: "ChooseSignin",
  components: {
    "nav-bar-teacher": NavBar_Teacher
  },
  methods: {
    navigate() {
      router.push({ name: "ClassTeacher" });
    },
    navigate2() {
      router.push({ name: "ClassStudent" });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#ChooseSigin {
  font-family: "Quicksand", sans-serif;
}

.container-choose {
  width: 100%;
  height: 95vh;
}

.wrap-choose {
  width: 390px;
  margin: 0% 10%;
}

.card {
  height: 30%;
  justify-content: center;
  margin-top: 13%;
  border-radius: 2rem;
  border: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-text {
  font-weight: 900;
  font-size: 2.3em;
}

h6 {
  font-size: 1.5em;
  margin-top: 13%;
  font-weight: 800;
  text-align: center;
}

.card-body {
  flex: 0 0 auto;
}
</style>
