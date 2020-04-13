<template>
  <div id="Topic_Student">
    <nav-bar-teacher></nav-bar-teacher>

    <b-container class="container-Topic_Student">
      <b-container class="bv-example-row">
        <b-row align-h="start">
          <b-col cols="2">
            <b-button class="btn-creatClass_2">Scan QR</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import NavBar_Teacher from "@/components/NavBar_Student.vue";
export default {
  name: "Topic_Student",
  components: {
    "nav-bar-teacher": NavBar_Teacher
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#Topic_Student {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn-creatClass_2 {
  margin-top: 20px;
  background-image: linear-gradient(90deg, #57aae7, #9af0f5);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
}
</style>
