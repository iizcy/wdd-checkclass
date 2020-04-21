<template>
  <div id="ClassTeacher">
    <nav-bar-teacher></nav-bar-teacher>

    <b-container
      class="container-classTeacher d-flex flex-column justify-content-center"
    >
      <b-row align-h="center" class="wrap-classTeacher d-flex flex-column">
        <!-- modal pop up create code-->
        <b-button class="btn-creatClass_1" pill v-b-modal.modal-multi-1
          >Create Class</b-button
        >
        <div
          class="card text-center"
          v-for="classTeacher in Class"
          v-bind:key="classTeacher.id"
        >
          <div
            class="card-body d-flex flex-column justify-content-center"
            v-on:click="navigate(classTeacher.Code)"
          >
            <p id="fonttext" class="card-text id-class">
              Semester: {{ classTeacher.Semester }} / {{ classTeacher.Year }}
              {{ classTeacher.Subject_ID }}
            </p>
            <p id="fonttext" class="card-text name-class">
              {{ classTeacher.Class_Name }}
            </p>
            <p id="fonttext" class="card-text code-class">
              Code: {{ classTeacher.Code }}
            </p>
            <!-- <router-link
              class="secondary-content"
              v-bind:to="{
                name: 'TopicTeacher',
                params: { Class_Name: classTeacher.Class_Name },
              }"
            >
              <i class="fa fa-eye">Link</i></router-link
            > -->
          </div>
        </div>
        <b-modal
          id="modal-multi-1"
          centered
          size="lg"
          title="Create Class"
          hide-footer
        >
          <b-col class="form-group">
            <label for="input-default">Class Name</label>
            <b-form-input
              type="text"
              v-model="Class_Name"
              required
              placeholder
            ></b-form-input>
          </b-col>

          <b-col class="form-group">
            <label for="input-default">Subject ID</label>
            <b-form-input
              type="text"
              v-model="Subject_ID"
              required
              placeholder
            ></b-form-input>
          </b-col>

          <b-col class="form-group">
            <label for="input-default">Semester</label>
            <b-form-input
              type="text"
              v-model="Semester"
              required
              placeholder
            ></b-form-input>
          </b-col>

          <b-col class="form-group">
            <label for="input-default">Year</label>
            <b-form-input
              type="text"
              v-model="Year"
              required
              placeholder
            ></b-form-input>
          </b-col>

          <!-- <b-col class="form-group">
            <label for="input-default">Code</label>
            <b-form-input
              type="text"
              v-model="Code"
              required
              placeholder
            ></b-form-input>
          </b-col> -->

          <div class="text-center">
            <b-button @click="CreateClass()" class="btn-creatClass_2" pill
              >Create Class</b-button
            >
          </div>
        </b-modal>

        <!-- modal pop up show code and alert seccess-->
        <b-modal
          id="modal-multi-2"
          centered
          hide-footer
          v-model="modal"
          @hidden="resetModal"
        >
          <b-col class="show-complete">
            <img src="../assets/complete.svg" />
            <p class="my-2">Create Class Success</p>
            <p class="show-code d-flex justify-content-center">
              code : {{ Code }}
            </p>
          </b-col>
          <div class="text-center">
            <b-button class="btn-creatClass_2" pill @click="setModal(false)"
              >OK</b-button
            >
          </div>
        </b-modal>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import firebase from "firebase";
import router from "../router";
import NavBar_Teacher from "@/components/NavBar_Teacher.vue";
import { mapGetters } from "vuex";
import { firestore } from "../library/firebase";

export default {
  name: "ClassTeacher",
  components: {
    "nav-bar-teacher": NavBar_Teacher
  },
  data() {
    return {
      Class: [],
      Class_Name: null,
      Subject_ID: null,
      Semester: null,
      Year: null,
      Code: (
        Date.now() + Math.floor(Math.random() * 1000000000000001)
      ).toString(36),
      loading: true,
      modal: false
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  created() {
    firestore
      .collection("Class")
      .where("uid", "==", this.user.data.uid)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            Class_Name: doc.data().Class_Name,
            Subject_ID: doc.data().Subject_ID,
            Semester: doc.data().Semester,
            Year: doc.data().Year,
            Code: doc.data().Code,
            uid: doc.data().uid
          };
          this.Class.push(data);
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    resetModal() {
      location.reload();
    },
    setModal(status) {
      this.modal = status;
    },
    CreateClass() {
      firestore
        .collection("Class")
        .doc(this.Code)
        .set({
          Class_Name: this.Class_Name,
          Subject_ID: this.Subject_ID,
          Semester: this.Semester,
          Year: this.Year,
          Code: this.Code,
          uid: this.user.data.uid,
          students: []
        })
        .then(() => {
          // console.log("Client added: ", docRef.id);
          this.setModal(true);

          firestore
            .collection("User")
            .doc(this.user.data.uid)
            .collection("owner")
            .add({ code: this.Code, uid: this.user.data.uid });
        })
        .catch(error => {
          console.error("Error Adding: ", error);
        });
    },
    fetchData() {
      firestore
        .collection("Class")
        .where("Class_Name", "==", this.$route.params.Class_Name)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.Class_Name = doc.data().Class_Name;
            this.Subject_ID = doc.data().Subject_ID;
            this.Semester = doc.data().Semester;
            this.Year = doc.data().Year;
            this.Code = doc.data().Code;
          });
        });
    },
    updateClass() {
      firestore
        .collection("Class")
        .where("Class_Name", "==", this.$route.params.Class_Name)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                Class_Name: this.Class_Name,
                Subject_ID: this.Subject_ID,
                Semester: this.Semester,
                Year: this.Year
              })
              .then(() => {
                this.$router.push({
                  name: "/ClassTeacher",
                  params: { Class_Name: this.Class_Name }
                });
              });
          });
        });
    },
    navigate(code) {
      router.push({ name: "History_Teacher", params: { id: code } });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#ClassTeacher {
  font-family: "Quicksand", sans-serif;
}

.container-classTeacher {
  width: 100%;
  /* min-height: 90vh; */
}

.wrap-classTeacher {
  /* width: 390px; */
  /* height: 90vh; */
  border-radius: 10px;
  margin: 0% 0%;
}

.card {
  /* height: 15%;
    width: 100%; */
  margin: 20px 0;
  border: 0px;
  border-radius: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-family: "Quicksand", sans-serif;
}

/* .card-text {
  font-family: "Quicksand", sans-serif;
  font-weight: 900;
  font-size: 1em;
} */
.id-class {
  font-weight: 600;
  font-size: 1em;
}

.name-class {
  font-weight: 900;
  font-size: 1.2em;
}

.code-class {
  font-weight: 600;
  font-size: 1.5em;
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

.btn-secondary {
  /* width: 50%;
    height: 6%; */
  margin: 20px 0;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.btn-creatClass_2 {
  margin-top: 2px;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

p {
  margin-bottom: 0%;
}

.create_save {
  width: 45%;
  padding: 1.5% 2%;
  margin-top: 0px;
}

.form-control {
  border-radius: 30rem;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.show-complete {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.modal-body img {
  width: 70%;
}

.modal-body p {
  font-weight: 600;
}

.show-code {
  width: 80%;
  font-size: 3em;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10% 0;
}

.modal-footer > * {
  margin: 0;
}
</style>
