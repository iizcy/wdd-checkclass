<template>
  <div>
    <b-modal
      id="modal-danger"
      v-model="modal"
      centered
      title="Alert"
      no-close-on-backdrop
    >
      <p class="my-4">
        You are not using the @KMITL.ac.th email.
      </p>
      <p class="my-4">
        Please press singout and change email.
      </p>
      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button variant="danger" class="float-right" @click="signout">
            Sign Out
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { firebase } from "../library/firebase";
export default {
  name: "ErrorAuth",
  data() {
    return { modal: true };
  },
  methods: {
    signout() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style>
#modal-danger .modal-content .modal-header {
  color: #dc3545;
  background-color: #fdeae9 !important;
}

#modal-danger .modal-content .modal-body {
  color: #dc3545;
}
</style>
