<template>
  <div id="Interact">
    <nav-bar-student></nav-bar-student>
    <b-container
      class="container-Interact d-flex flex-column justify-content-center"
    >
      <div>
        <div>
          <b-button @click="router.go(-1)" class="btn-creatClass_1" pill
            >Back</b-button
          >
        </div>

        <b-card v-if="status">
          <b-img
            src="../assets/complete.svg"
            fluid
            alt="Responsive image"
          ></b-img>
          <b-card-text
            :class="{
              'status-success': !status.late,
              'status-warn': status.late
            }"
          >
            Success!
          </b-card-text>
          <b-card-text
            :class="{
              'time-success': !status.late,
              'time-warn': status.late
            }"
          >
            {{ moment(status.time) }}
          </b-card-text>
          <b-card-text class="name">{{ user.data.displayName }}</b-card-text>
          <b-card-text v-if="status.late" class="attendence">
            You are late.
          </b-card-text>
          <b-card-text v-else class="attendence">
            You are intime.
          </b-card-text>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import NavBar_Student from "@/components/NavBar_Student.vue";
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  name: "Interact",
  data() {
    return {
      status: this.$route.params.status,
      router: this.$router
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  created() {},
  methods: {
    moment(date) {
      return moment(date).format("hh:mm A");
    }
  },
  components: {
    "nav-bar-student": NavBar_Student
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
#Interact {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn {
  border-radius: 30rem;
  font-size: 1em;
  padding: 1.5% 6%;
  font-weight: 600;
  align-self: flex-start;

  /* -webkit-user-select: none;  
  -moz-user-select: none;  
  -ms-user-select: none;  
  -o-user-select: none;  
  user-select: none; */
}

.btn-secondary {
  /* width: 50%;
    height: 6%; */
  margin-top: 40px;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.card {
  /* height: 15%;
    width: 100%; */
  border: 0px;
  border-radius: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 10%;
}

.card-text {
  font-family: "Quicksand", sans-serif;
  font-weight: 900;
  font-size: 90%;
}

.card-body {
  flex: 0 0 auto;
}

.img-fluid {
  max-width: 70%;
  height: auto;
}

.status-success {
  font-size: 150%;
  color: #53ca6a;
}

.time-success {
  font-size: 250%;
  color: #53ca6a;
  font-weight: 800;
}

.status-warn {
  font-size: 150%;
  color: #febf0f;
}

.time-warn {
  font-size: 250%;
  color: #febf0f;
  font-weight: 800;
}

.name {
  font-size: 130%;
  font-family: "Kanit", sans-serif;
  color: black;
  font-weight: 700;
}

.attendence {
  font-size: 1em;
  color: black;
  font-weight: 500;
}
</style>
