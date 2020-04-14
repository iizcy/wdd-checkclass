<template>
  <div id="Topic_Teacher">
    <nav-bar-teacher></nav-bar-teacher>
    <b-container
      class="container-TopicTeacher d-flex flex-column justify-content-center"
    >
      <b-row align-h="center" class="wrap-TopicTeacher d-flex flex-column">
        <!-- modal pop up create Topic-->

        <b-button v-b-modal.modal-center>Create Topic</b-button>
        <div>
          <b-modal id="modal-center" centered hide-footer>
            <b-col class="form-group">
              <label for="input-default">Topic Name</label>
              <b-form-input id="input-default" placeholder></b-form-input>
              <b-button>Create Topic</b-button>
            </b-col>
          </b-modal>
        </div>

        <div class="box-card" style="cursor: pointer;" v-on:click="navigate()">
          <!-- card class code-->
          <div class="card text-center">
            <div class="card-body d-flex flex-row justify-content-between">
              <p class="card-text class_s">week 1</p>
              <p class="card-text code">Code : 9877</p>
            </div>
          </div>

          <!-- comment -->
          <div class="text-comment">
            <p>very good</p>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import router from '../router';
import NavBar_Teacher from "@/components/NavBar_Teacher.vue";
export default {
  name: "TopicTeacher",
  components: {
    "nav-bar-teacher": NavBar_Teacher
  },
  methods: {
    navigate() {
      router.push({ name: "History_Teacher" });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#Topic_Teacher {
  font-family: "Quicksand", sans-serif;
}

.container-TopicTeacher {
  width: 100%;
  /* min-height: 90vh; */
}

.wrap-TopicTeacher {
  /* width: 390px; */
  /* height: 90vh; */
  border-radius: 10px;
  margin: 0% 0%;
}

.form-group {
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

label {
  font-weight: 600;
  font-size: 1.3em;
}
.card {
  /* height: 15%;
    width: 100%; */
  width: 100%;
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

.btn-primary {
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  /* width: 50%;
    height: 6%; */
  margin-top: 40px;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

p {
  margin-bottom: 0%;
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

.modal-footer > * {
  margin: 0;
}

.box-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-comment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  padding: 2% 5%;
  width: 90%;
  height: 5vh;
  border-radius: 0.5rem;
  background-color: #4f4f4f;
  font-size: 1em;
  color: white;
  margin-top: -8px;
}
</style>
