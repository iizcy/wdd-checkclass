<template>
  <div id="Topic_Student">
    <nav-bar-teacher></nav-bar-teacher>

    <b-container class="container-classTeacher d-flex justify-content-center">
      <b-row align-h="center" class="wrap-classTeacher d-flex flex-column">
        <!-- modal -->
        <b-button btn-creatClass_1 pill v-b-modal.modal-multi-1>Create Class</b-button>
      </b-row>
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

#ClassTeacher {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.form-group {
  padding: 2% 0%;
  margin-bottom: 0rem;
}

.form-control {
  border-radius: 30rem;
}

.btn-creatClass_2{
    margin-top: 20px;
    background-image: linear-gradient(90deg, #57aae7, #9af0f5);
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    
}
.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 10rem;
}
</style>