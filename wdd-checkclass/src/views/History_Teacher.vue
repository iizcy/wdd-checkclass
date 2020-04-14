<template>
  <div>
    <div id="History_Teacher">
      <nav-bar-teacher></nav-bar-teacher>
      <b-container class="container-History_Teacher">
        <b-row align-h="around">
          <b-col cols="4" class="c-left">
            <b-card style="max-width: 20rem; border-radius: 2rem;" class="mb-2">
              <b-card-text>Status</b-card-text>
              <div class="left">
                <b-card-text>
                  <span class="dot" style="background-color: green;"></span> In Time
                </b-card-text>
                <br />
                <b-card-text>
                  <span class="dot" style="background-color: orange;"></span> Late
                </b-card-text>
                <br />
                <b-card-text>
                  <span class="dot" style="background-color: red;"></span> Absent
                </b-card-text>
                <br />
              </div>
            </b-card>
          </b-col>
          <b-col cols="4" class="c-right">
            <b-card style="max-width: 20rem; border-radius: 2rem;" class="mb-2">
              <b-card-text>Qr Code</b-card-text>
            </b-card>
            <b-button href="#" variant="primary" class="btn-creatClass_2 center">Create Qr Code</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-card class="card-history">
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm>StudentID</b-col>
          <b-col sm>Name</b-col>
          <b-col sm>Status</b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import NavBar_Teacher from "@/components/NavBar_Teacher.vue";
export default {
  name: "History_Teacher",
  components: {
    "nav-bar-teacher": NavBar_Teacher
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#History_Teacher {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2c3e50;
}


.container-History_Teacher {
  height: 50vh;
}
.card-history {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
  width: 90%;
  height: 50vh;
}
.dot {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}
.btn-creatClass_2 {
  margin-top: 20px;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
}
.left {
  justify-content: flex-start;
}
.c-left {
  top: 20px;
}
.c-right {
  top: 20px;
}
</style>
