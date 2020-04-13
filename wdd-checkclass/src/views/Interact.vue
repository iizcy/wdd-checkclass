<template>
  <div id="Interact">
    <nav-bar-student></nav-bar-student>
    <b-container class="container-Interact d-flex flex-column justify-content-center">
      <b-row align-h="center" class="wrap-Interact d-flex flex-column">
        <b-button to="/ScanQRcode" class="btn-creatClass_1" pill v-b-modal.modal-multi-1>Back to Topic</b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar_Student from "@/components/NavBar_Student.vue";
export default {
  name: "Interact",
  components: {
    "nav-bar-student": NavBar_Student
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#Interact {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.btn-creatClass_1 {
  margin: 5%;
  align-self: flex-start;
  border: none;

 background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
