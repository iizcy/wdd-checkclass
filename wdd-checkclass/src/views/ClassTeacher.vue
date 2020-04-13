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
          <div></div>
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

.container-classTeacher {
  width: 100%;
  /* min-height: 90vh; */
}

.wrap-classTeacher {
  /* width: 390px; */
  /* height: 90vh; */
  border-radius: 10px;
  margin: 0% 0%;
}

.card {
  /* height: 15%;
    width: 100%; */
  height: 15vh;
  justify-content: flex-end;
  margin-top: 40px;
  border: 0px;
  border-radius: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-text {
  font-family: "Quicksand", sans-serif;
  font-weight: 900;
  font-size: 90%;
}

.card-body {
  flex: 0 0 auto;
}

.login-btn {
  padding-top: 17%;
}

.btn {
  border-radius: 30rem;
  font-size: 1em;
  padding: 1.5% 6%;
  font-weight: 600;
  align-self: flex-end;
}

.btn-secondary {
  /* width: 50%;
    height: 6%; */
  margin-top: 40px;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.btn-creatClass_2 {
  margin-top: 2px;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

p {
  margin-bottom: 0%;
}

.create_save {
  width: 45%;
  padding: 1.5% 2%;
  margin-top: 0px;
}

.form-control {
  border-radius: 30rem;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-body img {
  width: 70%;
}

.modal-body p {
  font-weight: 600;
}

.show-code {
  width: 80%;
  font-size: 3em;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10% 0;
}

.modal-footer > * {
  margin: 0;
}
</style>