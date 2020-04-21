<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/ChooseSignin">
        <b-navbar-brand><img src="../assets/plan.png" alt/></b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link :to="{ name: 'ClassStudent' }" class="nav-link"
            >Class</router-link
          >
          <b-nav-item @click="signout" type="submit">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script sc>
import firebase from "firebase";
export default {
  name: "NavBar",
  methods: {
    Class() {
      this.$router.replace("ClassStudent");
    },
    Home() {
      this.$router.replace("ChooseSignin");
    },
    signout() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style>
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.bg-info {
  background-image: linear-gradient(90deg, #9af0f5, #57aae7) !important;
}

.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.3);
}
</style>
