<template>
  <div id="ClassTeacher">
    <nav-bar-teacher></nav-bar-teacher>

    <b-container class="container-classTeacher d-flex justify-content-center">
      <b-row align-h="center" class="wrap-classTeacher d-flex flex-column">
        <!-- modal -->
        <b-button btn-creatClass_1 pill v-b-modal.modal-multi-1>Create Class</b-button>

        <b-modal id="modal-multi-1" centered size="lg" title="Create Class" hide-footer>
          <b-col class="form-group">
            <label for="input-default">Class Name</label>
            <b-form-input id="input-default" placeholder></b-form-input>
          </b-col>

          <b-col class="form-group">
            <label for="input-default">Subject ID</label>
            <b-form-input id="input-default" placeholder></b-form-input>
          </b-col>

          <b-col class="form-group">
            <label for="input-default">Semester</label>
            <b-form-input id="input-default" placeholder></b-form-input>
          </b-col>

          <b-col class="form-group">
            <label for="input-default">Year</label>
            <b-form-input id="input-default" placeholder></b-form-input>
          </b-col>
          <b-button class="btn-creatClass_2 center" pill v-b-modal.modal-multi-2>Create Class</b-button>
        </b-modal>

        <b-modal id="modal-multi-2" centered title="Second Modal" hide-footer>
          <p class="my-2">Second Modal</p>
        </b-modal>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar_Teacher from "@/components/NavBar_Teacher.vue";
export default {
  name: "ClassTeacher",
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