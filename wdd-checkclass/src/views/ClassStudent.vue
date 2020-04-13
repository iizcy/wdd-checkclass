<template>
  <div id="ClassStudent">
    <nav-bar-student></nav-bar-student>
    <b-container class="container-classStudent d-flex flex-column justify-content-center">
      <b-row align-h="center" class="wrap-classStudent d-flex flex-column">

        <!-- modal pop up create code-->
        <b-button class="btn-creatClass_1" pill v-b-modal.modal-1>Join Class</b-button>

        <b-modal id="modal-1" centered size="lg" ok-only>
          <b-col class="form-group">
            <label for="input-default">Join Class</label>
            <b-form-input id="input-default" placeholder="Code"></b-form-input>
          </b-col>
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
import NavBar_Student from "@/components/NavBar_Student.vue";
export default {
  name: "ClassStudent",
  components: {
    "nav-bar-student": NavBar_Student
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#ClassStudent {
  font-family: "Quicksand", sans-serif;
}

.container-classStudent {
    width: 100%;
    /* min-height: 90vh; */
}

.wrap-classStudent {
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
    font-family: 'Quicksand', sans-serif;
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

.btn-primary{
    background-image: linear-gradient(90deg, #57aae7, #9af0f5);
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.btn-secondary{
    /* width: 50%;
    height: 6%; */
    margin-top: 40px;
    background-image: linear-gradient(90deg, #57aae7, #9af0f5);
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

p {
    margin-bottom: 0%;
}

.create_save {
    width: 40%;
    padding: 1.5% 2%;
    margin-top: 0px;
}

.form-control {
    border-radius: 30rem;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
}

.form-group {
    text-align: center;
}

label {
    font-weight: 600;
    font-size: 1.3em;
}

.modal-footer{
  justify-content: center;
}

</style>