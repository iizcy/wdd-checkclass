<template>
  <div id="History_Teacher">
    <nav-bar-teacher></nav-bar-teacher>
    <div class="container-History_Teacher">
      <b-container class="bv-example-row">
      <b-row align-h="around">
      <b-col cols="4">
      <b-card
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>Status</b-card-text>        
      </b-card>
      </b-col>
      <b-col cols="4">
            <b-card
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>Status</b-card-text>
                   
      </b-card>
      <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-col>
      </b-row>
      </b-container>
    </div>
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
  background-color:#2c3e50;
}
.container-History_Teacher{
  height: 50vh;
}

</style>
