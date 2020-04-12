<template>
  <div id="ChooseSigin">
      <nav-bar-teacher></nav-bar-teacher>
      <H6>ChooseSignin</H6>
  </div>
  
</template>

<script>
import NavBar_Teacher from "@/components/NavBar_Teacher.vue";
export default {
    name:"ChooseSignin",
  components: {
    "nav-bar-teacher": NavBar_Teacher
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#ChooseSigin{
      font-family: "Quicksand", sans-serif;

}
</style>