<template>
  <div id="ScanQRcode">
    <nav-bar-student></nav-bar-student>
    <b-container class="container-ScanQRcode d-flex flex-column justify-content-center">
      <b-row align-h="center" class="wrap-ScanQRcode d-flex flex-column">
        <b-col>
          <b-button to="/Topic_Student" class="btn-creatClass_1" pill>Back to Topic</b-button>
          <div>
            <!-- <p class="error">{{ error }}</p>
            <p class="decode-result">
              Last result:
              <b>{{ result }}</b>
            </p> -->
            <b-card>
              <qrcode-stream @decode="onDecode" @init="onInit" />
            </b-card>
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

export default {
  // name: "ScanQRcode",
  components: {
    "nav-bar-student": NavBar_Student,
    QrcodeStream
  },

  data() {
    return {
      result: "",
      error: ""
    };
  },

  methods: {
    onDecode(result) {
      this.result = result;
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
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
      }
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
  height: 50vh;
  width: 50vh;
  justify-content: center;
  margin-top: 13%;
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
</style>
