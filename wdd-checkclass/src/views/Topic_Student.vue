<template>
  <div id="Topic_Teacher">
    <nav-bar-student></nav-bar-student>
    <b-container class="container-TopicStudent d-flex flex-column justify-content-center">
      <b-row align-h="center" class="wrap-TopicStudent d-flex flex-column">
        <!-- modal pop up create Topic-->

        <b-button v-b-modal.modal-center>Scan QR</b-button>

        <div class="box-card">
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
import NavBar_Student from "@/components/NavBar_Student.vue";
export default {
  name: "TopicStudent",
  components: {
    "nav-bar-student": NavBar_Student
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#Topic_Teacher {
  font-family: "Quicksand", sans-serif;
}

.container-TopicStudent {
  width: 100%;
  /* min-height: 90vh; */
}

.wrap-TopicStudent {
  /* width: 390px; */
  /* height: 90vh; */
  border-radius: 10px;
  margin: 0% 0%;
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

p {
  margin-bottom: 0%;
}

.form-control {
  border-radius: 30rem;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
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