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
        <div class="card text-center"
          v-for="classTeacher in Class"
          v-bind:key="classTeacher.id"
        >
          <div class="card-body d-flex flex-row justify-content-between">
            <p id="fonttext" class="card-text class_s">{{ classTeacher.Class_Name }} </p> <p id="fonttext" class="card-text code">{{ classTeacher.Code }} </p>
            <router-link class="secondary-content" v-bind:to="{ name: 'TopicTeacher', params: { Class_Name: classTeacher.Class_Name }}">
            <i class="fa fa-eye">Link</i></router-link></div>
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
              id="input-default"
              placeholder
            ></b-form-input>
          </b-col>

          <b-col class="form-group">
            <label for="input-default">Subject ID</label>
            <b-form-input
              type="text"
              v-model="Subject_ID"
              required
              id="input-default"
              placeholder
            ></b-form-input>
          </b-col>

          <b-col class="form-group">
            <label for="input-default">Semester</label>
            <b-form-input
              type="text"
              v-model="Semester"
              required
              id="input-default"
              placeholder
            ></b-form-input>
          </b-col>

          <b-col class="form-group">
            <label for="input-default">Year</label>
            <b-form-input
              type="text"
              v-model="Year"
              required
              id="input-default"
              placeholder
            ></b-form-input>
          </b-col>

          <b-col class="form-group">
            <label for="input-default">Code</label>
            <b-form-input
              type="text"
              v-model="Code"
              required
              id="input-default"
              placeholder
            ></b-form-input>
          </b-col>

          <b-button
            @click="CreateClass()"
            class="btn-creatClass_2"
            pill
            v-b-modal.modal-multi-2
            >Create Class</b-button
          >
        </b-modal>

        <!-- modal pop up show code-->
        <b-modal id="modal-multi-2" centered hide-footer>
          <b-col class="show-complete">
            <img src="../assets/complete.svg" />
            <p class="my-2">Create Class Success</p>
            <p class="show-code d-flex justify-content-center"></p>
            <!-- <b-button
            v-on:click="navigate()"
            v-b-modal.modal-multi-2
            >OK</b-button> -->
          </b-col>
        </b-modal>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";
import router from "../router";
import NavBar_Teacher from "@/components/NavBar_Teacher.vue";
export default {
  name: "ClassTeacher",
  components: {
    "nav-bar-teacher": NavBar_Teacher,
  },
  data() {
    return {
      Class: [],
      Class_Name: null,
      Subject_ID: null,
      Semester: null,
      Year: null,
      Code: null,
      loading: true,
    };
  },
  created() {
    const firestore = firebase.firestore();
    firestore
      .collection("Class")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            Class_Name: doc.data().Class_Name,
            Subject_ID: doc.data().Subject_ID,
            Semester: doc.data().Semester,
            Year: doc.data().Year,
            Code: doc.data().Code,
          };
          this.Class.push(data);
        });
      });
  },
  //     beforeRouteEnter(to, from, next) {
  //   const firestore = firebase.firestore()
  //   firestore.collection('user')
  //     .where('Class', '==', to.params.Class)
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         next(vm => {
  //           vm.Class = doc.data().Class;
  //           vm.Subject = doc.data().Subject;
  //           vm.Semester = doc.data().Semester;
  //           vm.Year = doc.data().Year;
  //         });
  //       });
  //     });
  // },
  watch: {
    $route: "fetchData",
  },
  methods: {
    CreateClass() {
      const firestore = firebase.firestore();
      firestore
        .collection("Class")
        .add({
          Class_Name: this.Class_Name,
          Subject_ID: this.Subject_ID,
          Semester: this.Semester,
          Year: this.Year,
          Code: this.Code,
        })
        .then((docRef) => {
          console.log("Client added: ", docRef.id);
          // this.$router.push('/ClassTeacher')
          location.reload();
        })
        .catch((error) => {
          console.error("Error Adding: ", error);
        });
    },
    fetchData() {
      const firestore = firebase.firestore();
      firestore
        .collection("Class")
        .where("Class_Name", "==", this.$route.params.Class_Name)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.Class_Name = doc.data().Class_Name;
            this.Subject_ID = doc.data().Subject_ID;
            this.Semester = doc.data().Semester;
            this.Year = doc.data().Year;
            this.Code = doc.data().Code;
          });
        });
    },
    updateClass() {
      const firestore = firebase.firestore();
      firestore
        .collection("Class")
        .where("Class_Name", "==", this.$route.params.Class_Name)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref
              .update({
                Class_Name: this.Class_Name,
                Subject_ID: this.Subject_ID,
                Semester: this.Semester,
                Year: this.Year,
                Code: this.Code,
              })
              .then(() => {
                this.$router.push({
                  name: "/ClassTeacher",
                  params: { Class_Name: this.Class_Name },
                });
              });
          });
        });
    },
    navigate() {
      router.push({ name: "Topic_Teacher" });
    },
  },
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
  height: 15vh;
  justify-content: flex-end;
  margin-top: 40px;
  border: 0px;
  border-radius: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-text {
  font-family: "Quicksand", sans-serif;
  font-weight: 900;
  font-size: 90%;
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
  margin-top: 40px;
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
