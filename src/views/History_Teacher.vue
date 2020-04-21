<template>
  <div id="History_Teacher">
    <nav-bar-teacher></nav-bar-teacher>
    <b-container
      class="history_teacher d-flex flex-column justify-content-center"
    >
      <b-col
        class="status-qr d-flex flex-column justify-content-center "
        align-h="around"
      >
        <b-row>
          <b-col
            align-self="center"
            class="show-qr d-flex flex-column justify-content-center"
          >
            <b-card style="max-width: 20rem; border-radius: 2rem;" class="mb-2">
              <!-- <div class="show-qr">
                <img src="../assets/qr.png" alt />
              </div> -->
              <div v-if="!qrcode" class="show-qr-mockup">
                QR Code
              </div>
              <qrcode v-else class="show-qr" :value="qrcode" tag="img"></qrcode>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="justify-content-center time-cr-qr">
          <b-col xs="12" md="6" class="">
            <!-- <div class="set-time">Time : 10:75</div> -->
            <div class="time-picker">
              <b-form-timepicker v-model="time"></b-form-timepicker>
            </div>
          </b-col>
          <b-col xs="12" md="6">
            <b-button
              v-if="!qrcode"
              variant="primary"
              id="center"
              @click="genQrCode"
              >Create Qr Code</b-button
            >
            <b-button v-else variant="primary" id="center" @click="stopGenQR"
              >Stop Generate</b-button
            >
          </b-col>
        </b-row>
      </b-col>
      <b-row class="calendar-status">
        <b-col xs="12" md="4">
          <div class="calendar">
            <!-- <b-icon icon="calendar" style="width: 30px; height: 30px;"></b-icon> -->
            <b-form-datepicker
              :readonly="false"
              v-model="date"
              locale="en"
              @input="pickerChange"
            ></b-form-datepicker>
          </div>
        </b-col>
        <b-col xs="12" md="4" class="status">
          <div>
            <b-icon icon="circle-fill" style="color: green;"></b-icon> In Time
          </div>
          <div>
            <b-icon icon="circle-fill" style="color: yellow;"></b-icon> Late
          </div>
        </b-col>
        <b-col xs="12" md="4" class="status">
          <b-button variant="success" @click="onExport">Export XLSX</b-button>
        </b-col>
      </b-row>
      <div class="list-name">
        <b-row>
          <b-col xs class="title d-none d-sm-none d-md-block">Student</b-col>
          <b-col xs class="title">Name</b-col>
          <b-col xs class="title">Status</b-col>
        </b-row>
        <b-row v-for="(item, index) in attend" :key="index" class="my-2">
          <b-col xs class="text d-none d-sm-none d-md-block text-center">
            {{ item.studentId }}
          </b-col>
          <b-col xs class="text">
            {{ item.displayName }}
          </b-col>
          <b-col xs class="text text-center">
            <b-icon
              icon="circle-fill"
              v-if="!item.late"
              style="color: green;"
            ></b-icon
            ><b-icon icon="circle-fill" v-else style="color: yellow;"></b-icon>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <!-- <div id="History_Teacher">
      <nav-bar-teacher></nav-bar-teacher>
      <b-container class="container-History_Teacher">
        <b-row align-h="around">
          <b-col cols="4" class="c-left">
            <b-card style="max-width: 20rem; border-radius: 2rem;" class="mb-2">
              <b-card-text>Status</b-card-text>
              <div class="left">
                <b-card-text>
                  <span class="dot" style="background-color: green;"></span> In
                  Time
                </b-card-text>
                <br />
                <b-card-text>
                  <span class="dot" style="background-color: orange;"></span>
                  Late
                </b-card-text>
                <br />
                <b-card-text>
                  <span class="dot" style="background-color: red;"></span>
                  Absent
                </b-card-text>
                <br />
              </div>
            </b-card>
          </b-col>
          <b-col cols="4" class="c-right">
            <b-card style="max-width: 20rem; border-radius: 2rem;" class="mb-2">
              <b-card-text>Qr Code</b-card-text>
            </b-card>
            <b-button href="#" variant="primary" class="btn-creatClass_2 center">Create Qr Code</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-card class="card-history">
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm>StudentID</b-col>
          <b-col sm>Name</b-col>
          <b-col sm>Status</b-col>
        </b-row>
      </b-container>
    </b-card>-->
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import { firestore } from "../library/firebase";
import moment from "moment";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import NavBar_Teacher from "@/components/NavBar_Teacher.vue";
import XLSX from "xlsx";

export default {
  name: "History_Teacher",
  data() {
    return {
      qrcode: null,
      code: this.$route.params.id,
      attend: [],
      date: moment().format("YYYY-MM-DD"),
      time: moment().format("HH:mm"),
      interval: null
    };
  },
  components: {
    "nav-bar-teacher": NavBar_Teacher
  },
  created() {
    this.fetchData();
  },
  computed: {
    checkStatus() {
      return date => new Date() > new Date(date);
    }
  },
  methods: {
    fetchData() {
      firestore
        .collection("Class")
        .doc(this.code)
        .collection(`${this.date}`)
        .onSnapshot(res => {
          this.attend = [];
          res.forEach(doc => {
            this.attend.push({
              studentId: this.getUserId(doc.data().email),
              ...doc.data()
            });
          });
        });
    },
    updateData() {
      let classUpdate = {};
      classUpdate[`time.${this.date}`] = this.time;
      firestore
        .collection("Class")
        .doc(this.code)
        .update(classUpdate);
    },
    genQrCode() {
      // let tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
      // console.log(
      //   new Date(
      //     moment(`${this.date}/${this.time}`, "YYYY-MM-DD/HH:mm").format()
      //   )
      // );
      let currentDate = new Date();
      currentDate.setDate(moment(this.date).format("DD"));
      currentDate.setMonth(moment(this.date).format("MM") - 1);
      currentDate.setFullYear(moment(this.date).format("YYYY"));
      this.qrcode = `${this.code}/${currentDate.toISOString()}`;
      this.fetchData();
      this.updateData();
      this.interval = setInterval(() => {
        currentDate = new Date();
        currentDate.setDate(moment(this.date).format("DD"));
        currentDate.setMonth(moment(this.date).format("MM") - 1);
        currentDate.setFullYear(moment(this.date).format("YYYY"));
        this.qrcode = `${this.code}/${currentDate.toISOString()}`;
      }, 10000);
    },
    stopGenQR() {
      clearInterval(this.interval);
      this.qrcode = null;
    },
    subStr(text, length) {
      if (text) return text.substr(0, length) + "...";
    },
    getUserId(text) {
      if (text) return text.split("@kmitl.ac.th")[0];
    },
    // eslint-disable-next-line no-unused-vars
    pickerChange(e) {
      // console.log(e);
      this.fetchData();
    },
    onExport() {
      const dataWS = XLSX.utils.json_to_sheet(this.attend);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, dataWS);
      XLSX.writeFile(wb, `${this.code}-${this.date}.xlsx`);
    }
  },
  filters: {
    subStr: function(string) {
      if (string) return string.substring(0, 5) + "...";
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
#History_Teacher {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
  background-color: #2c3e50; */

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
/* .col {
  padding: 0%;
} */
/* .row {
  display: flex;
  flex-wrap: wrap;

  margin-right: -15px;
  margin-left: -15px;
} */
.status-qr {
  background-color: #4f4f4f;
  padding: 7%;
}

.set-time {
  background-color: white;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  border-radius: 0.25rem;
  padding: 1.5% 6%;
  font-weight: 600;
  margin: 5px 5px;
  font-size: 1.3em;
}

.img-qr {
  background-color: white;
  border: 0px;
  border-radius: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.show-qr {
  align-items: center;
}
.show-qr img {
  width: 100%;
  width: 250px;
}

.show-qr-mockup {
  width: 250px;
  height: 250px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time-cr-qr {
  margin-top: 30px;
}

.btn {
  padding: 1.5% 6%;
  font-weight: 600;
  /* margin: 5px 0; */
  width: 100%;
  margin: 5px 0;
}

.time-picker {
  display: flex;
  height: 100%;
}

.time-picker .b-form-timepicker {
  margin: 5px 0;
}

.btn-primary {
  font-size: 1.3em;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.calendar-status {
  margin: 20px;
}
.status {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1em;
  font-weight: 700;
}
.status div {
  margin: 0% 10px;
}
.list-name {
  background-color: white;
  border: 0px;
  border-radius: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* margin: 0% 5%; */
  height: 60vh;
  overflow: scroll;
  /* overflow-x: hidden; */
  padding: 20px 15px;
}

.list-name .title {
  font-weight: 800;
  font-size: 1em;
  word-break: break-all;
}

.list-name .text {
  word-break: break-all;
  text-align: left;
}
/* .container-History_Teacher {
  height: 50vh;
}
.card-history {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
  width: 90%;
  height: 50vh;
}
.dot {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}
.btn-creatClass_2 {
  margin-top: 20px;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
}
.left {
  justify-content: flex-start;
}
.c-left {
  top: 20px;
}
.c-right {
  top: 20px;
} */
</style>
