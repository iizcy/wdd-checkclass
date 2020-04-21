<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isKmitl: null,
      modal: false
    };
  }
  // created() {
  //   if (!this.user.data) return;
  //   firestore
  //     .collection("Class")
  //     .get()
  //     .then()
  //     .catch(err => {
  //       if (err.code == "permission-denied") {
  //         this.isKmitl = false;
  //         this.modal = true;
  //       }
  //     });
  // }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-color: #f6f6f6;
}
</style>
