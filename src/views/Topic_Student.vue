<template>
  <div id="Topic_Student">
    <nav-bar-student></nav-bar-student>
    <b-container
      class="container-TopicStudent d-flex flex-column justify-content-center"
    >
      <b-row align-h="center" class="wrap-TopicStudent d-flex flex-column">
        <!-- modal pop up create Topic-->
        <router-link
          :to="{ name: 'ScanQRcode', params: { id: id } }"
          class="btn-box"
          ><b-button v-b-modal.modal-center>Scan QR</b-button></router-link
        >

        <div
          class="card-body-nametopic d-flex flex-column justify-content-center mt-3"
        >
          <p class="code-class">
            Semester {{ classData.Semester }}/ {{ classData.Year }}
            {{ classData.Subject_ID }}
          </p>
          <p class="name-class">{{ classData.Class_Name }}</p>
        </div>

        <!-- card class code-->
        <div
          class="card text-center"
          style="cursor: pointer;"
          v-for="(item, index) in times"
          :key="index"
        >
          <div class="card-body-check d-flex flex-row justify-content-between">
            <p class="date">{{ moment(item.time) }}</p>
            <div class="status d-flex flex-row justify-content-center">
              <p>
                status
              </p>
              <b-icon
                icon="circle-fill"
                style="color: green;"
                v-if="!item.late"
              ></b-icon>
              <b-icon icon="circle-fill" style="color: yellow;" v-else></b-icon>
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar_Student from "@/components/NavBar_Student.vue";
import { firestore } from "../library/firebase";
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "TopicStudent",
  data() {
    return {
      id: this.$route.params.id,
      classData: {},
      times: []
    };
  },
  created() {
    this.fetchData();
  },
  components: {
    "nav-bar-student": NavBar_Student
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    moment(date) {
      return moment(date).format("DD/MM/YYYY HH:mm:ss");
    },
    fetchData() {
      let classDoc = firestore.collection("Class").doc(this.id);
      classDoc.get().then(doc => {
        let time = doc.data().time;
        this.classData = doc.data();
        let times = [];
        Object.keys(time).forEach(date => {
          classDoc
            .collection(date)
            .doc(this.user.data.uid)
            .get()
            .then(res => {
              times.push(res.data());
              this.times = times;
            });
        });
      });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#Topic_Student {
  font-family: "Quicksand", sans-serif;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.container-TopicStudent {
  width: 100%;
  /* min-height: 90vh; */
}

.wrap-TopicStudent {
  /* width: 390px; */
  /* height: 90vh; */
  border-radius: 10px;
  margin: 0% 0%;
}

label {
  font-weight: 600;
  font-size: 1.3em;
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

.code-class {
  font-weight: 600;
  font-size: 1em;
}

.name-class {
  font-weight: 900;
  font-size: 1.2em;
}
.card-body-check {
  padding: 20px 20px;
  font-size: 1em;
  font-weight: 600;
}

.card-body {
  flex: 0 0 auto;
}

.btn-box {
  width: 100%;
  text-align: right;
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

p {
  margin-bottom: 0%;
}

.form-control {
  border-radius: 30rem;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
}

.box-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text-comment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  padding: 2% 5%;
  width: 90%;
  height: 5vh;
  border-radius: 0.5rem;
  background-color: #4f4f4f;
  font-size: 1em;
  color: white;
  margin-top: -8px;
}

.status {
  align-items: center;
}
.status p {
  padding: 0% 10px;
}
</style>
