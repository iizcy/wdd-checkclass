<template>
  <div id="ClassStudent">
    <nav-bar-student></nav-bar-student>
    <b-container
      class="container-classStudent d-flex flex-column justify-content-center"
    >
      <b-row align-h="center" class="wrap-classStudent d-flex flex-column">
        <!-- modal pop up create code-->
        <b-button class="btn-creatClass_1" pill @click="modalShow = !modalShow"
          >Join Class</b-button
        >

        <b-modal
          id="modal-join-class"
          centered
          size="lg"
          ok-only
          @ok="handleOk"
          v-model="modalShow"
        >
          <b-col class="form-group">
            <b-form ref="form" @submit.stop.prevent="handleSubmit">
              <label for="input-default">Join Class</label>
              <b-form-group
                invalid-feedback="Code is required"
                :state="codeState"
              >
                <b-form-input
                  id="code-input"
                  :state="codeState"
                  placeholder="Code"
                  v-model="code"
                  required
                ></b-form-input>
              </b-form-group>
            </b-form>
          </b-col>
        </b-modal>
      </b-row>

      <!-- card class-->

      <div
        class="card text-center"
        style="cursor: pointer;"
        v-for="(item, index) in classes"
        :key="index"
        v-on:click="navigate(item.Code)"
      >
        <div class="card-body d-flex flex-column justify-content-center">
          <p class="id-class">
            Semester {{ item.Semester }} / {{ item.Year }} {{ item.Subject_ID }}
          </p>
          <p class="name-class">{{ item.Class_Name }}</p>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import router from "../router";
import NavBar_Student from "@/components/NavBar_Student.vue";
import { mapGetters } from "vuex";
import { firestore, firebase } from "../library/firebase";
export default {
  name: "ClassStudent",
  data() {
    return {
      modalShow: false,
      code: null,
      codeState: null,
      classes: []
    };
  },
  created() {
    this.fetchClass();
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  components: {
    "nav-bar-student": NavBar_Student
  },
  methods: {
    navigate(code) {
      router.push({ name: "Topic_Student", params: { id: code } });
    },
    fetchClass() {
      firestore
        .collection("Class")
        .where("students", "array-contains", this.user.data.uid)
        .get()
        .then(res => {
          this.classes = [];
          res.forEach(doc => {
            this.classes.push(doc.data());
          });
        });
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.codeState = valid;
      return valid;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();

      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }

      let classRef = firestore.collection("Class").doc(this.code);
      classRef.get().then(res => {
        if (res.exists) {
          if (res.data().uid == this.user.data.uid) {
            return alert("You are the owner of this class!");
          }
          classRef
            .update({
              students: firebase.firestore.FieldValue.arrayUnion(
                this.user.data.uid
              )
            })
            .then(() => {
              this.fetchClass();
            });
        } else {
          alert("Code not fount!");
        }
        this.code = null;
      });

      this.modalShow = false;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#ClassStudent {
  font-family: "Quicksand", sans-serif;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.container-classStudent {
  width: 100%;
  /* min-height: 90vh; */
}

.wrap-classStudent {
  /* width: 390px; */
  /* height: 90vh; */
  border-radius: 10px;
  margin: 0% 0%;
}

.card {
  /* height: 15%;
    width: 100%; */
  /* height: 15vh; */
  margin-top: 40px;
  border: 0px;
  border-radius: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-family: "Quicksand", sans-serif;
}

.id-class {
  font-weight: 600;
  font-size: 1em;
}

.name-class {
  font-weight: 900;
  font-size: 1.2em;
}

.card-body {
  flex: 0 0 auto;
}

.login-btn {
  padding-top: 17%;
}

.btn {
  border-radius: 30rem;
  font-size: 1em;
  padding: 1.5% 6%;
  font-weight: 600;
  align-self: flex-end;
}

.btn-primary {
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  /* width: 50%;
    height: 6%; */
  margin-top: 40px;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

p {
  margin-bottom: 0%;
}

.create_save {
  width: 40%;
  padding: 1.5% 2%;
  margin-top: 0px;
}

.form-control {
  border-radius: 30rem;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
}

.form-group {
  text-align: center;
}

label {
  font-weight: 600;
  font-size: 1.3em;
}

.modal-footer {
  justify-content: center;
}
</style>
