<template>
  <div id="ScanQRcode">
    <nav-bar-student></nav-bar-student>
    <b-container
      class="container-ScanQRcode d-flex flex-column justify-content-center"
    >
      <b-row align-h="center" class="wrap-ScanQRcode">
        <b-col>
          <div class="btn-box">
            <b-button @click="router.go(-1)" class="btn-creatClass_1" pill
              >Back</b-button
            >
          </div>

          <div class="camera-box">
            <p class="error">{{ error }}</p>
            <!-- <p class="decode-result">
              Last result: <b>{{ result }}</b>
            </p> -->
            <b-card>
              <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
                <div v-if="validationSuccess" class="validation-success">
                  Attend Success!
                </div>

                <div v-if="validationFailure" class="validation-failure">
                  {{ scanErr }}
                </div>
                <div v-if="validationPending" class="validation-pending">
                  Long validation in progress...
                </div>
              </qrcode-stream>
            </b-card>
          </div>
          <div>
            <b-card-text>QRCode Scan</b-card-text>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import library_Qr from "../library/qrcode-camera-js-master/assets/instascan.min.js"
import NavBar_Student from "@/components/NavBar_Student.vue";
import { QrcodeStream } from "vue-qrcode-reader"; //ไม่รู้ต้องลิงค์กับไลเบอรี่ในforderไมมมม
// Vue.use(AxiosPlugin);
import { firestore } from "../library/firebase";
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  // name: "ScanQRcode",
  components: {
    "nav-bar-student": NavBar_Student,
    QrcodeStream
  },
  data() {
    return {
      result: "",
      error: "",
      camera: "auto",
      isValid: undefined,
      scanErr: "Attend Not Success!",
      router: this.$router,
      id: this.$route.params.id
    };
  },
  computed: {
    ...mapGetters({
      user: "user"
    }),
    validationPending() {
      return this.isValid === undefined && this.camera === "off";
    },

    validationSuccess() {
      return this.isValid === true;
    },

    validationFailure() {
      return this.isValid === false;
    }
  },
  methods: {
    async onDecode(result) {
      // this.result = result;
      this.camera = "off";

      let data = result.split("/");
      if (data[0] != this.id) {
        this.scanErr = "You aren't in this class!";
        this.isValid = false;

        setTimeout(() => {
          this.resetValidationState();
          this.camera = "auto";
        }, 2000);
      } else {
        // let status =
        //   new Date() >=
        //   new Date(
        //     moment(`${data[2]}/${data[3]}`, "YYYY-MM-DD/HH:mm").format()
        //   );

        let classDoc = firestore.collection("Class").doc(this.id);
        classDoc.get().then(doc => {
          let date = moment(data[1]).format("YYYY-MM-DD");
          let time = doc.data().time[date];

          let status =
            new Date() >=
            new Date(moment(`${date}/${time}`, "YYYY-MM-DD/HH:mm").format());

          classDoc
            .collection(`${date}`)
            .doc(this.user.data.uid)
            .set({ ...this.user.data, time: data[1], late: status })
            .then(() => {
              this.isValid = true;
              setTimeout(() => {
                this.$router.replace({
                  name: "Interact",
                  params: { status: { time: data[1], late: status } }
                });
                this.camera = "auto";
              }, 1000);
            })
            .catch(async () => {
              this.scanErr = "Attend Not Success!";
              this.isValid = false;

              setTimeout(() => {
                this.resetValidationState();
                this.camera = "auto";
              }, 2000);
            });
        });
      }
    },
    onInit(promise) {
      promise.catch(error => {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      });
    },
    resetValidationState() {
      this.isValid = undefined;
    },
    timeout(ms) {
      return new Promise(resolve => {
        window.setTimeout(resolve, ms);
      });
    }
  }

  // ,methods: {
  //   onInitialOpenCamera() {
  //     Instascan.Camera.getCameras()
  //       .then(function(cameras){
  //         console.log(cameras);
  //       })
  //       .catch(error => alert(error))
  //   }
  // }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

#ScanQRcode {
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

.col {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.btn {
  border-radius: 30rem;
  font-size: 1em;
  padding: 1.5% 6%;
  font-weight: 600;
  align-self: flex-start;
}

.btn-secondary {
  /* width: 50%;
    height: 6%; */
  margin-top: 40px;
  background-image: linear-gradient(90deg, #9af0f5, #57aae7);
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.error {
  font-weight: bold;
  color: red;
}

.card {
  justify-content: center;
  /* margin-top: 13%; */
  border-radius: 2rem;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-text:last-child {
  margin-bottom: 0;
  margin: 30px;
  font-size: 1.5em;
  font-weight: 600;
}

.btn-box {
  width: 100%;
  text-align: left;
}

.wrap-ScanQRcode {
  position: relative;
}

.camera-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.validation-success,
.validation-failure,
.validation-pending {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.validation-success {
  color: green;
}
.validation-failure {
  color: red;
}
</style>
