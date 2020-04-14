<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <div class="panel-primary">
        <div class="panel-heading">{{ title }}</div>
        <div class="panel-body">
          <div class="form-group">
            <label>URL website</label>
            <input
              type="text"
              name="url"
              placeholder="Enter url"
              class="form-control"
              v-model="text"
            />
          </div>
          <div class="form-group">
            <qr-code
              :text="text"
              size="200"
              color="#030303"
              bg-color="#83d5f8"
              error-level="L"
            >
            </qr-code>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-2"></div>
    <!-- <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue> -->
  </div>
</template>
<script>
//import Vue from "vue";
//import firebase from "firebase";
//import QrcodeVue from "qrcode.vue";
import VueQRCodeComponent from "vue-qrcode-component";
//Vue.component("qr-code", VueQRCodeComponent);
export default {
  name: "QR",
  props: {
    msg: String
  },
  data() {
    return {
      title: "Create QR code",
      text: "https://",
      value: "https://goo.gl/9eIWP9"
    };
  },
  components: {
    qrCode: VueQRCodeComponent
  },
  methods: {}
};
</script>
