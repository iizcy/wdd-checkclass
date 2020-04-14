<template>
  <div class="container col-md-6" id="comment">
    <h2>Online Comment</h2>
    <!-- display comment -->
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ messageText }}</h5>
        <p class="card-text text-muted">{{ name }}</p>
      </div>
    </div>
    <hr />
    <!-- form design -->
    <form class="form-group" @submit.prevent="storeMessage">
      <div>
        <textarea name="name" class="form-control"></textarea>
      </div>
      <label for="">Name: </label><br />
      <input type="text" class="form-control" /><br />
      <button type="button" class="btn btn-primary">Comment</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
//import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
export default {
  name: "Comment",
  props: {
    msg: String
  },
  methods: {
    comment: function() {
      const provider = new firebase.auth.GoogleAuthProvider().addScope("email");
      //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      //firebase.auth().languageCode = 'us';
      // provider.setCustomParameters({
      //   'login_hint': "user@example.com"
      // });
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // create user in db
          let obj = {
            google_id: result.additionalUserInfo.profile.id,
            fullname: result.additionalUserInfo.profile.name,
            email: result.additionalUserInfo.profile.email,
            profile_image: result.additionalUserInfo.profile.picture,
            user_type_id: 1
          };
          console.log(obj);
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    }
  }
};
var comment = new Vue({
  el: "#comment",
  data: {
    messageText: "",
    message: [],
    name: "Print"
  }
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
