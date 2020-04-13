<template>
  <div id="ClassTeacher">
    <nav-bar-teacher></nav-bar-teacher>

    <b-container class="container-classTeacher d-flex flex-column justify-content-center">
      <b-row align-h="center" class="wrap-classTeacher d-flex flex-column">
        <!-- modal pop up create code-->
        <b-button class="btn-creatClass_1" pill v-b-modal.modal-multi-1>Create Class</b-button>

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
          <b-button class="btn-creatClass_2" pill v-b-modal.modal-multi-2>Create Class</b-button>
        </b-modal>

        <!-- modal pop up show code-->

        <b-modal id="modal-multi-2" centered title hide-footer>
          <img src="../assets/complete.svg" alt />
          <p class="my-2">Create Class Success</p>
          <p class="show-code d-flex justify-content-center">3256</p>
        </b-modal>
      </b-row>

      <!-- card class code-->

      <div class="card text-center">
        <div class="card-body d-flex flex-row justify-content-between">
          <p class="card-text class_s">Class 1</p>
          <p class="card-text code">Code : 9877</p>
        </div>
      </div>
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
}

.form-group {
  padding: 2% 0%;
  margin-bottom: 0rem;
}

.form-control {
  border-radius: 30rem;
}

.btn-creatClass_1 {
  margin: 5%;
  align-self: flex-end;
  border: none;

  background-image: linear-gradient(90deg, #57aae7, #9af0f5);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.btn-creatClass_2 {
  margin-top: 20px;
  background-image: linear-gradient(90deg, #57aae7, #9af0f5);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  align-self: center;
}

/* .modal-body {
  padding: 2rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.my-2 {
  font-size: 1.2em;
  font-weight: 600;
}

img {
  width: 75%;
}

.show-code {
  width: 80%;
  font-size: 2em;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: none;
  margin: 10% 0;
}

.card {
    /* height: 15%;
    width: 100%; */
    height: 15vh;
    justify-content: flex-end;
    margin-top: 20px;
    border: 0px;
    border-radius: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-text {
    font-family: 'Quicksand', sans-serif;
    font-weight: 900;
    font-size: 90%;
}

.card-body {
    flex: 0 0 auto;
    padding: 0% 5%;
}

</style>