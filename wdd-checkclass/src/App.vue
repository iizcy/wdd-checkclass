<template>
  <div id="app">
    <nav-bar></nav-bar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!-- <router-view /> -->
    <b-container class="bv-example-col d-flex justify-content-center">
      <b-col  md="6">
        <img src="../image_vue/logo.png" alt />
        <h6>IN-Class</h6>
        <div class="button">
          <b-button>Sign in with Google</b-button>
        </div>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import NavBar_Teacher from "@/components/NavBar_Teacher.vue";
export default {
  components: {
    "nav-bar": NavBar_Teacher
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

img {
  width: 70%;
}

.container {
  margin-top: 50px;
}

h6 {
  font-size: 2em;
  padding-top: 5%;
  font-weight: 800;
  text-align: center;
}

.button {
  padding-top: 15%;
    padding-bottom: 15%;

}

.btn-secondary {
  width: 80%;
  border-radius: 30rem;
  font-size: 1.2em;
  font-weight: 600;
  background-image: linear-gradient(90deg, #57aae7, #9af0f5);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: none;
}
.col-11 {
    flex: 0 0 91.666667%;
    max-width: 100%;
}
</style>
