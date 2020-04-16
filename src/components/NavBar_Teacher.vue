<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Class</b-nav-item>
          <b-nav-item @click="signout" type="submit">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "NavBar",
  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        });
    }
  }
};
</script>

<style>
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255);
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
