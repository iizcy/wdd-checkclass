<template>
  <div id="SigninGoogle">
    <b-container class="bv-example-col d-flex justify-content-center">
      <b-col md="6">
        <img src="../assets/logo_check.png" alt />
        <h6>IN-Class</h6>
        <div class="button">
          <b-button @click="socialGoogleLogin"
            ><img style="width:7%;" src="../assets/Vector.png" alt /> Sign in
            with Google</b-button
          >
        </div>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import { auth, firebase, firestore } from "../library/firebase";
// import NavBar_SignIn from "@/components/NavBar_SignIn.vue";
export default {
  name: "SigninGoogle",
  data: function() {
    return { email: "", password: "" };
  },
  components: {
    // "nav-bar-teacher": NavBar_SignIn
  },
  methods: {
    socialGoogleLogin: function() {
      const provide = new firebase.auth.GoogleAuthProvider().addScope("email");
      auth
        .signInWithPopup(provide)
        .then(result => {
          // create user in db
          let obj = {
            google_id: result.additionalUserInfo.profile.id,
            fullname: result.additionalUserInfo.profile.name,
            email: result.additionalUserInfo.profile.email,
            profile_image: result.additionalUserInfo.profile.picture,
            user_type_id: 1
          };
          // console.log(obj);
          firebase
            .database()
            .ref("User")
            .child(result.user.uid)
            .set(obj);

          let user = firestore.collection("User").doc(result.user.uid);
          user
            .get()
            .then(res => {
              if (!res.exists) {
                user.set(obj);
              } else {
                user.update(obj);
              }
              alert("Add user complete");
            })
            .catch(err => {
              if (err == "permission-denied") {
                this.$router.replace("/error");
              }
            });
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#SigninGoogle {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

/* // #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// } */

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
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: none;
}
.col-11 {
  flex: 0 0 91.666667%;
  max-width: 100%;
}
</style>
