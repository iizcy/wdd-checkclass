<template>
  <div id="ClassStudent">
    <nav-bar-student></nav-bar-student>
    <div>class student</div>
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

</style>